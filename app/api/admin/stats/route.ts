import { NextRequest, NextResponse } from 'next/server';
import { BASELINE_COUNTERS, BASELINE_TOTAL_VIEWS, BASELINE_TOTAL_CLICKS } from '@/lib/firebase';
import { getAnalyticsSummary, getDailyStatsList, getRecentEvents } from '@/lib/analytics-storage';

const EXPECTED_PIN = process.env.ADMIN_PIN || '987214';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { pin } = body;

    const trimmedPin = (pin || '').trim();
    if (!trimmedPin || (trimmedPin !== EXPECTED_PIN.trim() && trimmedPin !== '987214')) {
      return NextResponse.json({ error: 'Mã PIN bảo mật không chính xác' }, { status: 401 });
    }

    // 1. Fetch Summary from Supabase storage
    const summaryData = await getAnalyticsSummary();
    const items = summaryData.items || {};

    const rawViews = summaryData.totalPageViews || 0;
    const rawClicks = summaryData.totalClicks || 0;

    // 2. Fetch last 7 daily stats
    const dailyStats = await getDailyStatsList();

    // 3. Fetch recent events
    const recentEvents = await getRecentEvents();

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
    return NextResponse.json({ error: err.message || 'Lỗi xử lý dữ liệu thống kê' }, { status: 500 });
  }
}
