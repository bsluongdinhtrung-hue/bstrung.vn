import { NextRequest, NextResponse } from 'next/server';
import { getFirebaseAdmin, AnalyticsCounterItem } from '@/lib/firebase';
import { FieldValue } from 'firebase-admin/firestore';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      eventType = 'click',
      targetId,
      targetLabel = 'Không xác định',
      category = 'other',
      deviceType = 'desktop',
    } = body;

    if (!targetId && eventType === 'click') {
      return NextResponse.json({ error: 'Missing targetId' }, { status: 400 });
    }

    const { db } = getFirebaseAdmin();
    const now = new Date();
    const isoString = now.toISOString();
    const dateStr = now.toISOString().split('T')[0]; // YYYY-MM-DD

    const summaryRef = db.collection('bstrung_counters').doc('summary');
    const dailyRef = db.collection('bstrung_daily_stats').doc(dateStr);
    const eventRef = db.collection('bstrung_events').doc();

    const batch = db.batch();

    // 1. Log event document
    batch.set(eventRef, {
      eventType,
      targetId: targetId || 'home_page',
      targetLabel,
      category,
      deviceType,
      timestamp: isoString,
      date: dateStr,
    });

    // 2. Update summary
    if (eventType === 'page_view') {
      batch.set(
        summaryRef,
        {
          totalPageViews: FieldValue.increment(1),
          updatedAt: isoString,
        },
        { merge: true }
      );

      // Update daily stats for page view
      batch.set(
        dailyRef,
        {
          date: dateStr,
          pageViews: FieldValue.increment(1),
          [`deviceBreakdown.${deviceType}`]: FieldValue.increment(1),
          updatedAt: isoString,
        },
        { merge: true }
      );
    } else {
      // Click event
      batch.set(
        summaryRef,
        {
          totalClicks: FieldValue.increment(1),
          updatedAt: isoString,
          [`items.${targetId}.id`]: targetId,
          [`items.${targetId}.label`]: targetLabel,
          [`items.${targetId}.category`]: category,
          [`items.${targetId}.clicks`]: FieldValue.increment(1),
          [`items.${targetId}.lastClickedAt`]: isoString,
        },
        { merge: true }
      );

      // Update daily stats for click
      batch.set(
        dailyRef,
        {
          date: dateStr,
          clicks: FieldValue.increment(1),
          [`clicksByTarget.${targetId}`]: FieldValue.increment(1),
          [`deviceBreakdown.${deviceType}`]: FieldValue.increment(1),
          updatedAt: isoString,
        },
        { merge: true }
      );
    }

    await batch.commit();

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('Track API error:', err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
