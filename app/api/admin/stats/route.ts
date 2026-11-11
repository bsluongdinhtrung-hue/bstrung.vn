import { NextRequest, NextResponse } from 'next/server';
import { getFirebaseAdmin, BASELINE_COUNTERS, BASELINE_TOTAL_VIEWS, BASELINE_TOTAL_CLICKS } from '@/lib/firebase';

const EXPECTED_PIN = process.env.ADMIN_PIN || '987214';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { pin } = body;

    if (!pin || pin.trim() !== EXPECTED_PIN.trim()) {
      return NextResponse.json({ error: 'Mã PIN bảo mật không chính xác' }, { status: 401 });
    }

    const { db } = getFirebaseAdmin();

    // 1. Fetch Summary
    const summaryDoc = await db.collection('bstrung_counters').doc('summary').get();
    const summaryData = summaryDoc.data() || {};
    const items = summaryData.items || {};

    const rawViews = summaryData.totalPageViews || 0;
    const rawClicks = summaryData.totalClicks || 0;

    // 2. Fetch last 7 daily stats
    const dailySnap = await db
      .collection('bstrung_daily_stats')
      .orderBy('date', 'desc')
      .limit(7)
      .get();

    const dailyStats = dailySnap.docs.map((doc) => doc.data()).reverse();

    // 3. Fetch recent 25 events
    const eventsSnap = await db
      .collection('bstrung_events')
      .orderBy('timestamp', 'desc')
      .limit(25)
      .get();

    const recentEvents = eventsSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // 4. Calculate handbook rankings
    const handbookRanking = [
      { id: 'so-tay-dinh-duong', label: 'Sổ Tay Dinh Dưỡng & Thực Đơn', category: 'Dinh dưỡng' },
      { id: 'noi-khoa-icu', label: 'Thực Hành Nội Khoa & Cấp Cứu ICU', category: 'Lâm sàng' },
      { id: 'tuong-tac-thuoc', label: 'Dược Lý & Tương Tác Thuốc Chuẩn BYT', category: 'Thuốc' },
      { id: 'xet-nghiem-si', label: 'Xét Nghiệm & Trị Số SI', category: 'Cận lâm sàng' },
      { id: 'thang-diem', label: 'Thang Điểm & Tiên Lượng Lâm Sàng', category: 'Thang điểm' },
      { id: 'cham-soc-nhi-khoa', label: 'Sổ Tay Chăm Sóc & Điều Trị Cho Bé', category: 'Nhi khoa' },
      { id: 'gia-dvkt-dau-thau', label: 'Xây Dựng Giá DVKT & Đấu Thầu Y Tế', category: 'Quản trị Y tế' },
      { id: 'zalo-consult', label: 'Liên Hệ / Tư Vấn Zalo 1-1 BS. Trung', category: 'Tư vấn' },
    ].map((hb) => {
      const realClicks = items[hb.id]?.clicks || 0;
      const baseline = BASELINE_COUNTERS[hb.id] || 0;
      return {
        ...hb,
        realClicks,
        totalClicks: baseline + realClicks,
        lastClickedAt: items[hb.id]?.lastClickedAt || null,
      };
    }).sort((a, b) => b.totalClicks - a.totalClicks);

    return NextResponse.json({
      success: true,
      stats: {
        rawViews,
        rawClicks,
        totalViews: rawViews + BASELINE_TOTAL_VIEWS,
        totalClicks: rawClicks + BASELINE_TOTAL_CLICKS,
        handbookRanking,
        dailyStats,
        recentEvents,
      },
    });
  } catch (err: any) {
    console.error('Admin Stats API error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
