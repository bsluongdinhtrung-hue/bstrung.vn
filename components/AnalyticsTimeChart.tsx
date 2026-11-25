'use client';

import React, { useState, useMemo } from 'react';
import {
  Calendar,
  BarChart2,
  TrendingUp,
  Layers,
  ChevronDown,
  Sparkles,
  Flame,
  ArrowUpRight,
  Info,
} from 'lucide-react';

export interface DailyStatItem {
  date: string; // YYYY-MM-DD
  pageViews?: number;
  clicks?: number;
  clicksByTarget?: Record<string, number>;
  deviceBreakdown?: {
    mobile?: number;
    desktop?: number;
    tablet?: number;
  };
}

export interface HandbookRankingItem {
  id: string;
  label: string;
  category: string;
  realClicks: number;
  totalClicks: number;
}

interface AnalyticsTimeChartProps {
  dailyStats: DailyStatItem[];
  handbookRanking?: HandbookRankingItem[];
}

const TARGET_OPTIONS = [
  { id: 'all', label: 'Tất cả chuyên mục (Toàn trang)', icon: '🌐', color: '#1F5C55' },
  { id: 'so-tay-dinh-duong', label: 'Sổ Tay Dinh Dưỡng & Thực Đơn', icon: '🥗', color: '#E11D48' },
  { id: 'noi-khoa-icu', label: 'Thực Hành Nội Khoa & Cấp Cứu ICU', icon: '🩺', color: '#0E7490' },
  { id: 'tuong-tac-thuoc', label: 'Dược Lý & Tương Tác Thuốc Chuẩn BYT', icon: '💊', color: '#059669' },
  { id: 'xet-nghiem-si', label: 'Xét Nghiệm & Trị Số SI', icon: '🧪', color: '#7E22CE' },
  { id: 'thang-diem', label: 'Thang Điểm & Tiên Lượng Lâm Sàng', icon: '⚖️', color: '#D97706' },
  { id: 'cham-soc-nhi-khoa', label: 'Sổ Tay Chăm Sóc Cho Bé', icon: '👶', color: '#0284C7' },
  { id: 'gia-dvkt-dau-thau', label: 'Xây Dựng Giá DVKT & Đấu Thầu Y Tế', icon: '📋', color: '#57534E' },
  { id: 'zalo-consult', label: 'Tư Vấn Zalo 1-1 BS. Trung', icon: '💬', color: '#2563EB' },
];

export default function AnalyticsTimeChart({
  dailyStats = [],
  handbookRanking = [],
}: AnalyticsTimeChartProps) {
  const [selectedTarget, setSelectedTarget] = useState<string>('all');
  const [timeGrain, setTimeGrain] = useState<'day' | 'month' | 'year'>('day');
  const [dayRange, setDayRange] = useState<number>(7); // 7, 14, 30
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Selected Target Info
  const activeTargetInfo = useMemo(() => {
    return TARGET_OPTIONS.find((t) => t.id === selectedTarget) || TARGET_OPTIONS[0];
  }, [selectedTarget]);

  // Build indexed map of dailyStats by date: { 'YYYY-MM-DD': DailyStatItem }
  const dailyMap = useMemo(() => {
    const map: Record<string, DailyStatItem> = {};
    dailyStats.forEach((item) => {
      if (item.date) {
        map[item.date] = item;
      }
    });
    return map;
  }, [dailyStats]);

  // Aggregate Data Points according to timeGrain & selectedTarget
  const chartData = useMemo(() => {
    const today = new Date();

    if (timeGrain === 'day') {
      const daysCount = dayRange;
      const points = [];

      for (let i = daysCount - 1; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(d.getDate() - i);
        const yyyy = d.getFullYear();
        const mm = String(d.getMonth() + 1).padStart(2, '0');
        const dd = String(d.getDate()).padStart(2, '0');
        const dateStr = `${yyyy}-${mm}-${dd}`;

        const item = dailyMap[dateStr];
        let clicks = 0;
        let pageViews = item?.pageViews || 0;

        if (selectedTarget === 'all') {
          clicks = item?.clicks || 0;
        } else {
          clicks = item?.clicksByTarget?.[selectedTarget] || 0;
        }

        // Day of week in Vietnamese
        const dayOfWeek = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'][d.getDay()];

        points.push({
          key: dateStr,
          label: `${dd}/${mm}`,
          subLabel: dayOfWeek,
          fullLabel: `${dayOfWeek}, ${dd}/${mm}/${yyyy}`,
          clicks,
          pageViews,
        });
      }

      return points;
    }

    if (timeGrain === 'month') {
      // Last 12 months
      const points = [];
      for (let i = 11; i >= 0; i--) {
        const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
        const yyyy = d.getFullYear();
        const mm = String(d.getMonth() + 1).padStart(2, '0');
        const monthKey = `${yyyy}-${mm}`;

        // Sum across all days belonging to this month
        let monthClicks = 0;
        let monthViews = 0;

        Object.keys(dailyMap).forEach((dateKey) => {
          if (dateKey.startsWith(monthKey)) {
            const item = dailyMap[dateKey];
            monthViews += item.pageViews || 0;
            if (selectedTarget === 'all') {
              monthClicks += item.clicks || 0;
            } else {
              monthClicks += item.clicksByTarget?.[selectedTarget] || 0;
            }
          }
        });

        points.push({
          key: monthKey,
          label: `T${d.getMonth() + 1}`,
          subLabel: String(yyyy).slice(2),
          fullLabel: `Tháng ${d.getMonth() + 1}/${yyyy}`,
          clicks: monthClicks,
          pageViews: monthViews,
        });
      }

      return points;
    }

    // timeGrain === 'year'
    // Group all available data by year (e.g. 2025, 2026)
    const currentYear = today.getFullYear();
    const years = [currentYear - 1, currentYear];
    const points = years.map((yr) => {
      const yearStr = String(yr);
      let yearClicks = 0;
      let yearViews = 0;

      Object.keys(dailyMap).forEach((dateKey) => {
        if (dateKey.startsWith(yearStr)) {
          const item = dailyMap[dateKey];
          yearViews += item.pageViews || 0;
          if (selectedTarget === 'all') {
            yearClicks += item.clicks || 0;
          } else {
            yearClicks += item.clicksByTarget?.[selectedTarget] || 0;
          }
        }
      });

      return {
        key: yearStr,
        label: yearStr,
        subLabel: 'Năm',
        fullLabel: `Năm ${yearStr}`,
        clicks: yearClicks,
        pageViews: yearViews,
      };
    });

    return points;
  }, [dailyMap, selectedTarget, timeGrain, dayRange]);

  // Metrics for active view
  const { totalInPeriod, maxVal, avgVal, peakPoint } = useMemo(() => {
    let sum = 0;
    let max = 0;
    let peak = chartData[0] || null;

    chartData.forEach((p) => {
      sum += p.clicks;
      if (p.clicks > max) {
        max = p.clicks;
        peak = p;
      }
    });

    const avg = chartData.length > 0 ? (sum / chartData.length).toFixed(1) : '0';

    return {
      totalInPeriod: sum,
      maxVal: max,
      avgVal: avg,
      peakPoint: peak,
    };
  }, [chartData]);

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#E8E4DA] shadow-xs space-y-6">
      {/* Header & Controls Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-[#E8E4DA]">
        <div>
          <div className="flex items-center gap-2">
            <BarChart2 className="w-5 h-5 text-[#1F5C55]" />
            <h2 className="text-lg sm:text-xl font-bold font-serif text-[#12211F]">
              Biểu Đồ Xu Hướng Truy Cập Theo Thời Gian
            </h2>
          </div>
          <p className="text-xs text-[#63706D] mt-0.5">
            Theo dõi chi tiết số lượt tra cứu và tương tác của từng thẻ chuyên mục theo Ngày, Tháng và Năm
          </p>
        </div>

        {/* Time Granularity Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-[#FAF9F5] rounded-2xl border border-[#E8E4DA] self-start lg:self-auto">
          <button
            type="button"
            onClick={() => setTimeGrain('day')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              timeGrain === 'day'
                ? 'bg-[#1F5C55] text-white shadow-xs'
                : 'text-[#63706D] hover:text-[#12211F] hover:bg-[#EAE6DD]'
            }`}
          >
            📅 Theo Ngày
          </button>
          <button
            type="button"
            onClick={() => setTimeGrain('month')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              timeGrain === 'month'
                ? 'bg-[#1F5C55] text-white shadow-xs'
                : 'text-[#63706D] hover:text-[#12211F] hover:bg-[#EAE6DD]'
            }`}
          >
            🗓️ Theo Tháng
          </button>
          <button
            type="button"
            onClick={() => setTimeGrain('year')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              timeGrain === 'year'
                ? 'bg-[#1F5C55] text-white shadow-xs'
                : 'text-[#63706D] hover:text-[#12211F] hover:bg-[#EAE6DD]'
            }`}
          >
            📈 Theo Năm
          </button>
        </div>
      </div>

      {/* Target Selector & Day Range Selector */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-[#FAF9F5] p-3 sm:p-4 rounded-2xl border border-[#E8E4DA]">
        
        {/* Dropdown Card Picker */}
        <div className="flex-1 min-w-0">
          <label className="block text-[11px] font-bold text-[#63706D] uppercase tracking-wider mb-1">
            Chọn thẻ / Chuyên mục để xem dữ liệu:
          </label>
          <div className="relative">
            <select
              value={selectedTarget}
              onChange={(e) => setSelectedTarget(e.target.value)}
              className="w-full appearance-none pl-3.5 pr-9 py-2.5 rounded-xl bg-white border border-[#CBD5CF] text-xs font-bold text-[#12211F] focus:outline-hidden focus:border-[#1F5C55] shadow-2xs transition-colors cursor-pointer"
            >
              {TARGET_OPTIONS.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.icon} {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-[#63706D] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Day Range Filter (Visible only when timeGrain === 'day') */}
        {timeGrain === 'day' && (
          <div className="sm:w-auto shrink-0">
            <label className="block text-[11px] font-bold text-[#63706D] uppercase tracking-wider mb-1">
              Khoảng thời gian:
            </label>
            <div className="inline-flex items-center gap-1 bg-white p-1 rounded-xl border border-[#CBD5CF]">
              {[7, 14, 30].map((days) => (
                <button
                  key={days}
                  type="button"
                  onClick={() => setDayRange(days)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    dayRange === days
                      ? 'bg-[#E2EBE8] text-[#1F5C55]'
                      : 'text-[#63706D] hover:text-[#12211F]'
                  }`}
                >
                  {days} ngày
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Summary KPI Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3.5 rounded-2xl bg-[#FAF9F5] border border-[#E8E4DA]">
          <span className="text-[11px] font-medium text-[#63706D] block">Tổng lượt tra cứu</span>
          <span className="text-xl sm:text-2xl font-black font-serif text-[#1F5C55] block mt-0.5">
            {totalInPeriod.toLocaleString('vi-VN')}
          </span>
          <span className="text-[10px] text-[#8C9895] block mt-0.5">trong chu kỳ đã chọn</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-[#FAF9F5] border border-[#E8E4DA]">
          <span className="text-[11px] font-medium text-[#63706D] block">Trung bình</span>
          <span className="text-xl sm:text-2xl font-black font-serif text-[#12211F] block mt-0.5">
            {avgVal}
          </span>
          <span className="text-[10px] text-[#8C9895] block mt-0.5">
            lượt / {timeGrain === 'day' ? 'ngày' : timeGrain === 'month' ? 'tháng' : 'năm'}
          </span>
        </div>

        <div className="p-3.5 rounded-2xl bg-[#FAF9F5] border border-[#E8E4DA]">
          <span className="text-[11px] font-medium text-[#63706D] block">Cao điểm nhất (Peak)</span>
          <span className="text-xl sm:text-2xl font-black font-serif text-amber-600 block mt-0.5">
            {maxVal} <span className="text-xs font-normal text-[#63706D]">lượt</span>
          </span>
          <span className="text-[10px] text-amber-700 font-semibold block mt-0.5 truncate">
            {maxVal > 0 && peakPoint ? peakPoint.label : 'Chưa có đỉnh'}
          </span>
        </div>

        <div className="p-3.5 rounded-2xl bg-[#FAF9F5] border border-[#E8E4DA]">
          <span className="text-[11px] font-medium text-[#63706D] block">Chuyên đề đang chọn</span>
          <span className="text-sm font-bold text-[#12211F] block mt-1 truncate">
            {activeTargetInfo.icon} {activeTargetInfo.label.split(' ')[0]} {activeTargetInfo.label.split(' ')[1]}
          </span>
          <span className="text-[10px] text-[#1F5C55] font-semibold block mt-0.5">
            {selectedTarget === 'all' ? 'Toàn bộ website' : 'Thẻ chuyên sâu'}
          </span>
        </div>
      </div>

      {/* Main Interactive Bar Chart */}
      <div className="pt-2">
        <div className="flex items-center justify-between text-xs text-[#63706D] mb-3">
          <span className="font-semibold text-[#12211F] flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4 text-[#1F5C55]" />
            <span>Biểu đồ cột: Số lượt tương tác qua từng mốc thời gian</span>
          </span>
          <span className="text-[11px] text-[#8C9895]">Đơn vị: Lượt click</span>
        </div>

        {/* Chart Canvas Container */}
        <div className="relative bg-[#FAF9F5] p-4 sm:p-6 rounded-2xl border border-[#E8E4DA]">
          {/* Grid Baseline */}
          <div className="absolute inset-x-4 sm:inset-x-6 bottom-11 sm:bottom-12 h-px bg-[#E8E4DA]" />

          {/* Bars Flex Container */}
          <div className="relative h-48 sm:h-56 flex items-end justify-between gap-1 sm:gap-2 pt-6 pb-8">
            {chartData.map((point, idx) => {
              const isHovered = hoveredIndex === idx;
              const hasData = point.clicks > 0;
              // Normalize height: min 4% for visible tick, up to 100%
              const heightPercent = maxVal > 0 ? Math.max(4, Math.round((point.clicks / maxVal) * 100)) : 4;

              return (
                <div
                  key={point.key}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="flex-1 flex flex-col items-center justify-end h-full relative group cursor-pointer"
                >
                  {/* Tooltip on Hover */}
                  {isHovered && (
                    <div className="absolute bottom-full mb-2 z-20 pointer-events-none bg-[#12211F] text-white text-[11px] rounded-xl px-2.5 py-1.5 shadow-xl whitespace-nowrap animate-fadeIn flex flex-col items-center">
                      <span className="font-bold text-emerald-300">{point.fullLabel}</span>
                      <span className="font-semibold mt-0.5">
                        {point.clicks} lượt tra cứu {selectedTarget !== 'all' ? `(${activeTargetInfo.icon})` : ''}
                      </span>
                      {selectedTarget === 'all' && point.pageViews > 0 && (
                        <span className="text-[9.5px] text-[#A3B8B4]">
                          {point.pageViews} lượt xem trang
                        </span>
                      )}
                      {/* Triangle Pointer */}
                      <div className="w-2 h-2 bg-[#12211F] rotate-45 -mb-1 mt-1" />
                    </div>
                  )}

                  {/* Value on top of bar */}
                  <span
                    className={`text-[10px] sm:text-[11px] font-mono font-bold mb-1 transition-opacity ${
                      hasData
                        ? isHovered
                          ? 'text-[#1F5C55] font-black scale-110'
                          : 'text-[#63706D]'
                        : 'text-stone-300 opacity-60'
                    }`}
                  >
                    {point.clicks}
                  </span>

                  {/* Bar Element */}
                  <div className="w-full max-w-[36px] bg-[#E8E4DA]/50 rounded-t-lg overflow-hidden flex items-end h-full">
                    <div
                      style={{ height: `${heightPercent}%` }}
                      className={`w-full rounded-t-lg transition-all duration-300 ${
                        hasData
                          ? isHovered
                            ? 'bg-gradient-to-t from-[#16443F] to-[#1F5C55] shadow-md ring-2 ring-[#1F5C55]/30'
                            : 'bg-gradient-to-t from-[#1F5C55] to-emerald-500'
                          : 'bg-[#DCD7CD] opacity-40'
                      }`}
                    />
                  </div>

                  {/* X-Axis Label */}
                  <div className="absolute top-full mt-1.5 text-center leading-tight">
                    <span
                      className={`block text-[10px] sm:text-xs font-semibold ${
                        isHovered ? 'text-[#1F5C55] font-bold' : 'text-[#63706D]'
                      }`}
                    >
                      {point.label}
                    </span>
                    <span className="block text-[9px] text-[#8C9895]">{point.subLabel}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Quick Comparison Pills of all categories */}
      <div className="pt-2 border-t border-[#E8E4DA]">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold text-[#12211F] flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#1F5C55]" />
            <span>Chuyển nhanh giữa các chuyên mục để so sánh:</span>
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {TARGET_OPTIONS.map((opt) => {
            const isSelected = selectedTarget === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setSelectedTarget(opt.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#1F5C55] text-white border-[#1F5C55] shadow-xs'
                    : 'bg-[#FAF9F5] text-[#12211F] border-[#E8E4DA] hover:border-[#CBD5CF] hover:bg-white'
                }`}
              >
                <span>{opt.icon}</span>
                <span>{opt.label.split(' • ')[0].split(' (')[0]}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
