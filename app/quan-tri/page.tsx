'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Lock,
  Eye,
  MousePointerClick,
  MessageCircle,
  Smartphone,
  Monitor,
  RefreshCw,
  LogOut,
  ArrowLeft,
  Flame,
  CheckCircle2,
  Clock,
  Sparkles,
  BarChart3,
  TrendingUp,
  UserCheck,
  ExternalLink,
  FileText,
  X,
} from 'lucide-react';
import Image from 'next/image';
import AnalyticsTimeChart from '@/components/AnalyticsTimeChart';

interface HandbookItem {
  id: string;
  label: string;
  category: string;
  realClicks: number;
  totalClicks: number;
  lastClickedAt: string | null;
}

interface DailyItem {
  date: string;
  pageViews?: number;
  clicks?: number;
  deviceBreakdown?: {
    mobile?: number;
    desktop?: number;
    tablet?: number;
  };
}

interface EventItem {
  id: string;
  eventType: string;
  targetId: string;
  targetLabel: string;
  category: string;
  deviceType: string;
  timestamp: string;
}

interface ConsultationItem {
  id: string;
  patientName: string;
  patientPhone: string;
  amount: number;
  billImage?: string;
  note?: string;
  createdAt: string;
  status: 'pending' | 'contacted' | 'completed';
}

interface StatsData {
  rawViews: number;
  rawClicks: number;
  totalViews: number;
  totalClicks: number;
  handbookRanking: HandbookItem[];
  dailyStats: DailyItem[];
  recentEvents: EventItem[];
  consultations?: ConsultationItem[];
}

export default function AdminPage() {
  const [pin, setPin] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState<StatsData | null>(null);
  const [selectedBillImage, setSelectedBillImage] = useState<string | null>(null);

  // Auto-login if previously verified in sessionStorage
  useEffect(() => {
    const savedPin = sessionStorage.getItem('bstrung_admin_pin');
    if (savedPin) {
      setPin(savedPin);
      fetchStats(savedPin);
    }
  }, []);

  const fetchStats = async (pinToUse: string) => {
    setLoading(true);
    setErrorMsg('');
    try {
      const res = await fetch('/api/admin/stats', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pin: pinToUse }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Mã PIN không đúng');
      }
      setStats(data.stats);
      setIsAuthenticated(true);
      sessionStorage.setItem('bstrung_admin_pin', pinToUse);
    } catch (err: any) {
      setErrorMsg(err.message || 'Có lỗi xảy ra khi xác thực');
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin.length < 6) {
      setErrorMsg('Vui lòng nhập đủ mã PIN 6 số');
      return;
    }
    fetchStats(pin);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('bstrung_admin_pin');
    setIsAuthenticated(false);
    setPin('');
    setStats(null);
  };

  // 1. PIN LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#F5F2EB] flex flex-col justify-center items-center px-4 py-12">
        <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E4DA] shadow-lg">
          <div className="text-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-[#E2EBE8] text-[#1F5C55] flex items-center justify-center mx-auto mb-4 border border-[#BDD3CC] shadow-inner">
              <Lock className="w-8 h-8" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#1F5C55] bg-[#E2EBE8] px-3 py-1 rounded-full border border-[#BDD3CC]">
              Khu Vực Quản Trị Bảo Mật
            </span>
            <h1 className="text-xl sm:text-2xl font-bold font-serif text-[#12211F] mt-3">
              Cổng Thống Kê & Báo Cáo
            </h1>
            <p className="text-xs text-[#63706D] mt-1">
              Dành riêng cho BSCKI. Lương Đình Trung
            </p>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#12211F] mb-1.5 text-center">
                Nhập mã PIN 6 số để mở bảng điều khiển
              </label>
              <input
                type="password"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={6}
                value={pin}
                onChange={(e) => {
                  setPin(e.target.value.replace(/\D/g, ''));
                  setErrorMsg('');
                }}
                placeholder="••••••"
                className="w-full text-center text-2xl tracking-[0.5em] font-mono py-3 px-4 rounded-xl border border-[#CBD5CF] bg-[#FAF9F5] focus:outline-hidden focus:border-[#1F5C55] focus:ring-2 focus:ring-[#1F5C55]/20 text-[#12211F]"
                autoFocus
              />
            </div>

            {errorMsg && (
              <p className="text-xs text-rose-600 font-semibold text-center bg-rose-50 py-2 px-3 rounded-lg border border-rose-200">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={loading || pin.length < 6}
              className="w-full py-3 px-4 rounded-xl bg-[#1F5C55] hover:bg-[#16443F] disabled:bg-stone-300 text-white font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Đang xác thực...</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" />
                  <span>Mở Bảng Thống Kê</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-[#E8E4DA] text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-[#63706D] hover:text-[#1F5C55] font-medium"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Quay lại trang chủ bstrung.vn</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // 2. AUTHENTICATED DASHBOARD
  const zaloItem = stats?.handbookRanking.find((h) => h.id === 'zalo-consult');
  const zaloClicks = zaloItem ? zaloItem.totalClicks : 0;

  // Calculate devices percentage
  let totalMobile = 0;
  let totalDesktop = 0;
  stats?.dailyStats.forEach((d) => {
    totalMobile += d.deviceBreakdown?.mobile || 0;
    totalDesktop += (d.deviceBreakdown?.desktop || 0) + (d.deviceBreakdown?.tablet || 0);
  });
  const totalTrackedDevices = totalMobile + totalDesktop;
  const mobilePct = totalTrackedDevices > 0 ? Math.round((totalMobile / totalTrackedDevices) * 100) : 78; // Default 78% mobile
  const desktopPct = 100 - mobilePct;

  return (
    <div className="min-h-screen bg-[#F5F2EB] text-[#12211F] pb-16">
      {/* Top Header */}
      <header className="bg-white border-b border-[#E8E4DA] sticky top-0 z-30 shadow-2xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-bold text-[#1F5C55] uppercase tracking-wider">
                Hệ Thống Thống Kê Trực Tuyến 24/7
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold font-serif text-[#12211F] tracking-tight">
              Bảng Quản Trị Lượt Truy Cập & Tra Cứu · bstrung.vn
            </h1>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => fetchStats(pin)}
              disabled={loading}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF9F5] hover:bg-[#EAE6DD] text-xs font-semibold text-[#12211F] border border-[#CBD5CF] transition-colors cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span>Làm mới</span>
            </button>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF9F5] hover:bg-[#EAE6DD] text-xs font-semibold text-[#12211F] border border-[#CBD5CF] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Xem Web</span>
            </Link>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-xs font-semibold text-rose-700 border border-rose-200 transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Khóa</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8">
        {/* 4 Big Metrics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {/* Card 1: Tổng lượt xem trang */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E8E4DA] shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-[#63706D]">Lượt Truy Cập Web</span>
              <div className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-700 flex items-center justify-center">
                <Eye className="w-4 h-4" />
              </div>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-bold font-serif text-[#12211F] block">
                {stats?.totalViews.toLocaleString('vi-VN')}
              </span>
              <span className="text-[11px] text-emerald-700 font-semibold mt-1 block">
                +{stats?.rawViews} lượt mới ghi nhận
              </span>
            </div>
          </div>

          {/* Card 2: Tổng lượt tra cứu / click sổ tay */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E8E4DA] shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-[#63706D]">Lượt Click Sổ Tay / AI</span>
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <MousePointerClick className="w-4 h-4" />
              </div>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-bold font-serif text-[#12211F] block">
                {stats?.totalClicks.toLocaleString('vi-VN')}
              </span>
              <span className="text-[11px] text-emerald-700 font-semibold mt-1 block">
                +{stats?.rawClicks} lượt click mới
              </span>
            </div>
          </div>

          {/* Card 3: Đăng ký tư vấn 1-1 */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E8E4DA] shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-[#63706D]">Đăng Ký Tư Vấn 1-1</span>
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <UserCheck className="w-4 h-4" />
              </div>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-bold font-serif text-[#12211F] block">
                {(stats?.consultations?.length || 0).toLocaleString('vi-VN')}
              </span>
              <span className="text-[11px] text-emerald-700 font-medium mt-1 block">
                {stats?.consultations?.length
                  ? `${stats.consultations.reduce((sum, c) => sum + (c.amount || 0), 0).toLocaleString('vi-VN')} đ đã xác nhận`
                  : 'Chờ ca chuyển khoản mới'}
              </span>
            </div>
          </div>

          {/* Card 4: Tỷ lệ Thiết bị */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E8E4DA] shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-[#63706D]">Thiết Bị Người Dùng</span>
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
                <Smartphone className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="flex items-baseline justify-between">
                <span className="text-lg sm:text-xl font-bold font-serif text-[#12211F]">
                  📱 {mobilePct}%
                </span>
                <span className="text-sm font-semibold text-[#63706D]">
                  💻 {desktopPct}%
                </span>
              </div>
              <div className="w-full bg-[#EAE6DD] h-2 rounded-full overflow-hidden mt-2">
                <div
                  className="bg-[#1F5C55] h-full rounded-full transition-all duration-500"
                  style={{ width: `${mobilePct}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section: Biểu Đồ Thống Kê Theo Thời Gian (Ngày / Tháng / Năm & Từng Thẻ) */}
        <AnalyticsTimeChart
          dailyStats={stats?.dailyStats || []}
          handbookRanking={stats?.handbookRanking || []}
        />

        {/* Section: Danh Sách Bệnh Nhân Đăng Ký Tư Vấn 1-1 (Đã Gửi Hóa Đơn) */}
        <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#E8E4DA] shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-5 border-b border-[#E8E4DA]">
            <div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-700" />
                <h2 className="text-lg font-bold font-serif text-[#12211F]">
                  Danh Sách Đăng Ký Tư Vấn 1-1 (Đã Gửi Hóa Đơn)
                </h2>
              </div>
              <p className="text-xs text-[#63706D] mt-0.5">
                Thông tin bệnh nhân đã chuyển khoản và gửi kèm ảnh chụp hóa đơn ngân hàng
              </p>
            </div>
            <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 self-start sm:self-auto">
              {stats?.consultations?.length || 0} ca đăng ký
            </span>
          </div>

          {stats?.consultations && stats.consultations.length > 0 ? (
            <div className="space-y-3.5">
              {stats.consultations.map((item) => {
                const dateObj = new Date(item.createdAt);
                const timeStr = dateObj.toLocaleTimeString('vi-VN', {
                  hour: '2-digit',
                  minute: '2-digit',
                });
                const dateFormatted = dateObj.toLocaleDateString('vi-VN', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                });

                return (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E8E4DA] hover:border-emerald-600/50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="flex items-start gap-3.5 min-w-0">
                      {/* Bill Thumbnail */}
                      {item.billImage ? (
                        <button
                          type="button"
                          onClick={() => setSelectedBillImage(item.billImage || null)}
                          className="relative w-16 h-16 rounded-xl overflow-hidden border border-emerald-300 bg-white shrink-0 group hover:ring-2 hover:ring-emerald-500 transition-all cursor-pointer"
                          title="Bấm để xem ảnh bill phóng to"
                        >
                          <Image
                            src={item.billImage}
                            alt="Biên lai chuyển khoản"
                            fill
                            className="object-cover"
                            unoptimized
                          />
                          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-[10px] font-bold transition-opacity">
                            Xem bill
                          </div>
                        </button>
                      ) : (
                        <div className="w-16 h-16 rounded-xl bg-[#EAE6DD] flex items-center justify-center text-xs text-[#8C9895] shrink-0">
                          Không có bill
                        </div>
                      )}

                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-bold text-sm sm:text-base text-[#12211F]">
                            {item.patientName}
                          </span>
                          <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                            {item.amount.toLocaleString('vi-VN')} đ
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-xs text-[#63706D] flex-wrap">
                          <span className="font-mono text-emerald-800 font-semibold">
                            📱 {item.patientPhone}
                          </span>
                          <span>•</span>
                          <span>{timeStr} ngày {dateFormatted}</span>
                        </div>

                        {item.note && (
                          <p className="text-xs text-[#63706D] bg-white p-2 rounded-lg border border-[#E8E4DA] mt-1 line-clamp-2">
                            <strong>Ghi chú:</strong> {item.note}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                      {item.billImage && (
                        <button
                          type="button"
                          onClick={() => setSelectedBillImage(item.billImage || null)}
                          className="px-3 py-2 rounded-xl bg-white hover:bg-[#FAF9F5] text-xs font-semibold text-[#1F5C55] border border-[#CBD5CF] transition-colors cursor-pointer"
                        >
                          Xem hóa đơn
                        </button>
                      )}
                      <a
                        href={`https://zalo.me/${item.patientPhone}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#1F5C55] hover:bg-[#16443F] text-xs font-bold text-white shadow-xs transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Mở Zalo nhắn tin</span>
                        <ExternalLink className="w-3 h-3 opacity-70" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="p-8 rounded-2xl bg-[#FAF9F5] border border-dashed border-[#CBD5CF] text-center">
              <UserCheck className="w-8 h-8 text-[#8C9895] mx-auto mb-2 opacity-60" />
              <p className="text-xs text-[#63706D] font-medium">
                Chưa có bệnh nhân nào gửi xác nhận chuyển khoản mới.
              </p>
              <p className="text-[11px] text-[#8C9895] mt-0.5">
                Khi bệnh nhân hoàn tất gửi ảnh bill trên web, thông tin sẽ xuất hiện ngay tại đây.
              </p>
            </div>
          )}
        </div>

        {/* Section: Bảng Xếp Hạng Mức Độ Quan Tâm Sổ Tay */}
        <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#E8E4DA] shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-5 border-b border-[#E8E4DA]">
            <div>
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-600" />
                <h2 className="text-lg font-bold font-serif text-[#12211F]">
                  Bảng Xếp Hạng Độ Quan Tâm Của Độc Giả
                </h2>
              </div>
              <p className="text-xs text-[#63706D] mt-0.5">
                Xếp theo số lượt mở tra cứu và tương tác với Trợ lý AI NotebookLM
              </p>
            </div>
            <span className="text-[11px] font-semibold text-[#1F5C55] bg-[#E2EBE8] px-3 py-1 rounded-full border border-[#BDD3CC] self-start sm:self-auto">
              Đồng bộ dữ liệu thời gian thực
            </span>
          </div>

          <div className="space-y-3">
            {stats?.handbookRanking.map((hb, index) => {
              const maxClicks = stats?.handbookRanking[0]?.totalClicks || 1;
              const pct = Math.round((hb.totalClicks / maxClicks) * 100);

              return (
                <div
                  key={hb.id}
                  className="p-3.5 sm:p-4 rounded-2xl bg-[#FAF9F5] border border-[#E8E4DA] hover:border-[#1F5C55]/40 transition-colors"
                >
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 ${
                          index === 0
                            ? 'bg-amber-500 text-white'
                            : index === 1
                            ? 'bg-stone-400 text-white'
                            : index === 2
                            ? 'bg-amber-700 text-white'
                            : 'bg-[#EAE6DD] text-[#63706D]'
                        }`}
                      >
                        #{index + 1}
                      </span>
                      <div>
                        <span className="font-bold text-sm text-[#12211F] block">
                          {hb.label}
                        </span>
                        <span className="text-[10px] text-[#63706D] font-medium">
                          Chuyên đề: {hb.category}
                        </span>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-sm sm:text-base font-bold font-mono text-[#1F5C55] block">
                        {hb.totalClicks.toLocaleString('vi-VN')} <span className="text-xs font-normal text-[#63706D]">lượt</span>
                      </span>
                      {hb.realClicks > 0 && (
                        <span className="text-[10px] text-emerald-700 font-semibold">
                          +{hb.realClicks} tương tác mới
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-[#EAE6DD] h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-[#1F5C55] to-emerald-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section: Nhật Ký Truy Cập Thời Gian Thực (Live Activity) */}
        <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#E8E4DA] shadow-xs">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E8E4DA]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#1F5C55]" />
              <h2 className="text-lg font-bold font-serif text-[#12211F]">
                Nhật Ký Tương Tác Gần Đây (25 sự kiện mới nhất)
              </h2>
            </div>
            <span className="text-xs text-[#63706D]">Tự động cập nhật</span>
          </div>

          {stats?.recentEvents && stats.recentEvents.length > 0 ? (
            <div className="divide-y divide-[#E8E4DA]/60">
              {stats.recentEvents.map((ev) => {
                const dateObj = new Date(ev.timestamp);
                const timeStr = dateObj.toLocaleTimeString('vi-VN', {
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit',
                });
                const dateFormatted = dateObj.toLocaleDateString('vi-VN', {
                  day: '2-digit',
                  month: '2-digit',
                });

                return (
                  <div
                    key={ev.id}
                    className="py-2.5 sm:py-3 flex items-center justify-between gap-3 text-xs"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-[10px] font-mono text-[#63706D] bg-[#FAF9F5] px-2 py-0.5 rounded border border-[#E8E4DA] shrink-0">
                        {timeStr} ({dateFormatted})
                      </span>
                      <span className="font-semibold text-[#12211F] truncate">
                        {ev.targetLabel}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[10px] px-2 py-0.5 rounded-full font-medium bg-[#E2EBE8] text-[#1F5C55]">
                        {ev.eventType === 'page_view' ? 'Xem trang' : 'Click tra cứu'}
                      </span>
                      <span className="text-[10px] text-[#63706D]">
                        {ev.deviceType === 'mobile' ? '📱 Điện thoại' : '💻 Máy tính'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-xs text-[#63706D] py-6 text-center">
              Chưa có lượt tương tác mới nào được ghi nhận. Hệ thống đang sẵn sàng bắt đầu đếm!
            </p>
          )}
        </div>

        {/* Modal: Xem Hóa Đơn Phóng To */}
        {selectedBillImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fadeIn">
            <div className="fixed inset-0" onClick={() => setSelectedBillImage(null)} />
            <div className="relative max-w-lg w-full bg-white rounded-3xl p-4 shadow-2xl z-10 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#E8E4DA]">
                <span className="font-bold text-sm text-[#12211F]">Biên Lai Chuyển Khoản</span>
                <button
                  onClick={() => setSelectedBillImage(null)}
                  className="p-1 rounded-full bg-[#EAE6DD] hover:bg-[#DDD8CD] transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4 text-[#12211F]" />
                </button>
              </div>
              <div className="relative w-full max-h-[70vh] aspect-3/4 rounded-xl overflow-hidden bg-stone-100 border border-[#E8E4DA]">
                <Image
                  src={selectedBillImage}
                  alt="Ảnh hóa đơn phóng to"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <div className="text-center pt-1">
                <button
                  onClick={() => setSelectedBillImage(null)}
                  className="px-5 py-2 rounded-xl bg-[#1F5C55] hover:bg-[#16443F] text-xs font-bold text-white transition-colors cursor-pointer"
                >
                  Đóng cửa sổ
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
