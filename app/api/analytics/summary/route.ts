import { NextResponse } from 'next/server';
import { getFirebaseAdmin, BASELINE_COUNTERS, BASELINE_TOTAL_VIEWS, BASELINE_TOTAL_CLICKS } from '@/lib/firebase';

export async function GET() {
  try {
    const { db } = getFirebaseAdmin();
    const doc = await db.collection('bstrung_counters').doc('summary').get();

    const data = doc.data() || {};
    const items = data.items || {};

    const formattedCounts: Record<string, number> = {};

    // Combine baseline + real counts
    Object.keys(BASELINE_COUNTERS).forEach((key) => {
      const realClicks = items[key]?.clicks || 0;
      formattedCounts[key] = BASELINE_COUNTERS[key] + realClicks;
    });

    // Also include any new keys tracked in Firestore
    Object.keys(items).forEach((key) => {
      if (!formattedCounts[key]) {
        formattedCounts[key] = items[key].clicks || 0;
      }
    });

    const totalViews = (data.totalPageViews || 0) + BASELINE_TOTAL_VIEWS;
    const totalClicks = (data.totalClicks || 0) + BASELINE_TOTAL_CLICKS;

    return NextResponse.json({
      success: true,
      totalViews,
      totalClicks,
      counters: formattedCounts,
    });
  } catch (err: any) {
    console.error('Summary API error:', err);
    // Fallback to baseline
    return NextResponse.json({
      success: true,
      totalViews: BASELINE_TOTAL_VIEWS,
      totalClicks: BASELINE_TOTAL_CLICKS,
      counters: BASELINE_COUNTERS,
    });
  }
}
