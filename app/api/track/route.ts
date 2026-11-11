import { NextRequest, NextResponse } from 'next/server';
import { recordEvent } from '@/lib/analytics-storage';

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

    const now = new Date();
    const isoString = now.toISOString();

    await recordEvent({
      eventType,
      targetId: targetId || 'home_page',
      targetLabel,
      category,
      deviceType,
      timestamp: isoString,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('Track API error:', err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
