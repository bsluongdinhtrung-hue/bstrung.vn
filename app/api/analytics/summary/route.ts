import { NextResponse } from 'next/server';
import { BASELINE_COUNTERS, BASELINE_TOTAL_VIEWS, BASELINE_TOTAL_CLICKS } from '@/lib/firebase';
import { getAnalyticsSummary } from '@/lib/analytics-storage';

export async function GET() {
  try {
    const summary = await getAnalyticsSummary();
    const items = summary.items || {};

    const formattedCounts: Record<string, number> = {};

    // Combine baseline + real counts
    Object.keys(BASELINE_COUNTERS).forEach((key) => {
      const realClicks = items[key]?.clicks || 0;
      formattedCounts[key] = BASELINE_COUNTERS[key] + realClicks;
    });

    // Also include any new keys tracked
    Object.keys(items).forEach((key) => {
      if (!formattedCounts[key]) {
        formattedCounts[key] = items[key].clicks || 0;
      }
    });

    const totalViews = (summary.totalPageViews || 0) + BASELINE_TOTAL_VIEWS;
    const totalClicks = (summary.totalClicks || 0) + BASELINE_TOTAL_CLICKS;

    return NextResponse.json({
      success: true,
      totalViews,
      totalClicks,
      counters: formattedCounts,
      rawClicks: summary.totalClicks || 0,
    });
  } catch (err: any) {
    console.error('Summary API error:', err);
    return NextResponse.json({
      success: true,
      totalViews: BASELINE_TOTAL_VIEWS,
      totalClicks: BASELINE_TOTAL_CLICKS,
      counters: BASELINE_COUNTERS,
      rawClicks: 0,
    });
  }
}
