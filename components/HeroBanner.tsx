'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  Stethoscope,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  Pill,
  Apple,
  Cpu,
  Layers,
  FlaskConical,
  Gauge,
  ExternalLink,
} from 'lucide-react';
import { useZaloConsult } from './ZaloConsultContext';

export default function HeroBanner() {
  const { openZaloModal } = useZaloConsult();
  const [greeting, setGreeting] = useState('Chào bạn!');
  const [formattedDate, setFormattedDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const hour = now.getHours();
      if (hour < 12) {
        setGreeting('Chào buổi sáng');
      } else if (hour < 18) {
        setGreeting('Chào buổi chiều');
      } else {
        setGreeting('Chào buổi tối');
      }

      const days = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
      const dayName = days[now.getDay()];
      const day = String(now.getDate()).padStart(2, '0');
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const year = now.getFullYear();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');

      setFormattedDate(`${dayName}, ngày ${day}/${month}/${year}`);
      setCurrentTime(`${hours}:${minutes}`);
    };

    updateDateTime();
    const timer = setInterval(updateDateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-6 pb-10 md:pt-10 md:pb-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 md:space-y-8">
        
        {/* Top Greeting Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#E8E4DA] pb-4">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-[#12211F] tracking-tight">
              Cổng Y Khoa & Sổ Tay Lâm Sàng
            </h1>
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#63706D] mt-1.5 font-medium">
              <span>{greeting}</span>
              <span>•</span>
              <span>{formattedDate}</span>
              {currentTime && (
                <>
                  <span>•</span>
                  <span className="font-mono font-bold text-[#1F5C55] bg-[#E2EBE8] px-2 py-0.5 rounded-md border border-[#BDD3CC]">
                    {currentTime}
                  </span>
                </>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E2EBE8] text-[#1F5C55] text-xs font-bold border border-[#BDD3CC]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>BSCKI. Lương Đình Trung</span>
            </span>
          </div>
        </div>

        {/* System Health / Readiness Card (Inspired by Reference Image Status Card) */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#E8E4DA] shadow-xs">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200/80 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-[#12211F]">
                  Cổng Y Khoa Sẵn Sàng Phục Vụ
                </h2>
                <p className="text-xs text-[#63706D] mt-0.5">
                  Trợ lý AI & Cẩm nang phác đồ trực tuyến 24/7
                </p>
              </div>
            </div>

            <div className="text-right shrink-0">
              <span className="text-2xl sm:text-3xl font-black font-serif text-emerald-600">
                100%
              </span>
              <span className="block text-[11px] text-[#63706D] font-medium">
                Sẵn sàng
              </span>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="w-full bg-[#F0EBE1] h-2 rounded-full overflow-hidden mb-3">
            <div className="bg-gradient-to-r from-emerald-500 to-[#1F5C55] h-full w-full rounded-full transition-all duration-500" />
          </div>

          <div className="flex items-center justify-between text-[11px] text-[#63706D] font-medium">
            <span>Dữ liệu lâm sàng chuẩn hóa theo Bộ Y tế & Quốc tế</span>
            <span className="text-emerald-700 font-semibold">Cập nhật trực tuyến</span>
          </div>
        </div>

        {/* 4 Core Clinical Tools Bento Cards (2 cols mobile, 4 cols desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          
          {/* Card 1: Thực Hành Nội Khoa */}
          <a
            href="https://notebooklm.google.com/notebook/a9ba76b2-c822-48d0-8fbd-f305a03cad29"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white hover:bg-[#FAF9F5] rounded-2xl p-4 border border-[#E8E4DA] hover:border-cyan-600/50 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-50 text-cyan-700 border border-cyan-200/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Stethoscope className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-semibold text-cyan-800 bg-cyan-50/80 px-2 py-0.5 rounded-md border border-cyan-200/50 flex items-center gap-1">
                <span>Tra cứu</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </span>
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-[#12211F] group-hover:text-cyan-800 transition-colors leading-snug">
                Thực Hành Nội Khoa
              </h3>
              <p className="text-[11px] sm:text-xs text-[#63706D] font-normal mt-1 leading-relaxed">
                Phác đồ chẩn đoán, Cấp cứu & Hồi sức ICU
              </p>
            </div>
          </a>

          {/* Card 2: Tương Tác Thuốc */}
          <a
            href="https://notebooklm.google.com/notebook/5fd2fede-0ef7-4699-b3c6-680c4bc84618"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white hover:bg-[#FAF9F5] rounded-2xl p-4 border border-[#E8E4DA] hover:border-emerald-600/50 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Pill className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50/80 px-2 py-0.5 rounded-md border border-emerald-200/50 flex items-center gap-1">
                <span>Tra cứu</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </span>
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-[#12211F] group-hover:text-emerald-800 transition-colors leading-snug">
                Tương Tác Thuốc
              </h3>
              <p className="text-[11px] sm:text-xs text-[#63706D] font-normal mt-1 leading-relaxed">
                Cập nhật chuẩn Dược thư & Bộ Y Tế
              </p>
            </div>
          </a>

          {/* Card 3: Xét Nghiệm & Trị Số SI */}
          <a
            href="https://notebooklm.google.com/notebook/3dbcddca-26c7-477a-a299-c3f482f85277"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white hover:bg-[#FAF9F5] rounded-2xl p-4 border border-[#E8E4DA] hover:border-purple-600/50 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 border border-purple-200/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                <FlaskConical className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-semibold text-purple-800 bg-purple-50/80 px-2 py-0.5 rounded-md border border-purple-200/50 flex items-center gap-1">
                <span>Tra cứu</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </span>
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-[#12211F] group-hover:text-purple-800 transition-colors leading-snug">
                Xét Nghiệm & Trị Số SI
              </h3>
              <p className="text-[11px] sm:text-xs text-[#63706D] font-normal mt-1 leading-relaxed">
                Biện luận sinh hóa, huyết học & marker
              </p>
            </div>
          </a>

          {/* Card 4: Thang Điểm & Tiên Lượng */}
          <a
            href="https://notebooklm.google.com/notebook/863d113d-3014-46ae-a171-8253e3a75eee"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white hover:bg-[#FAF9F5] rounded-2xl p-4 border border-[#E8E4DA] hover:border-amber-600/50 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 border border-amber-200/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Gauge className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-semibold text-amber-800 bg-amber-50/80 px-2 py-0.5 rounded-md border border-amber-200/50 flex items-center gap-1">
                <span>Tra cứu</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </span>
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-[#12211F] group-hover:text-amber-800 transition-colors leading-snug">
                Thang Điểm & Tiên Lượng
              </h3>
              <p className="text-[11px] sm:text-xs text-[#63706D] font-normal mt-1 leading-relaxed">
                HEART, CURB-65, CKD-EPI & phân tầng
              </p>
            </div>
          </a>

        </div>

        {/* Action Bar (Clear separation between Free AI Assistant and Direct 1-1 Doctor Consultation) */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#E8E4DA] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="text-sm sm:text-base font-bold text-[#12211F]">
              Bạn cần tra cứu phác đồ hay cần tư vấn bệnh án riêng?
            </h3>
            <p className="text-xs text-[#63706D] mt-0.5">
              Hỏi đáp miễn phí tức thì qua Trợ lý AI hoặc Đặt lịch tư vấn trực tiếp 1-1 cùng BSCKI. Lương Đình Trung
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 shrink-0 w-full sm:w-auto">
            <a
              href="#tien-ich"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#1F5C55] hover:bg-[#16443F] text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
            >
              <Sparkles className="w-4 h-4 text-emerald-200" />
              <span>Tra Cứu Cùng Trợ Lý AI (Miễn Phí)</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={openZaloModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#FAF7F2] hover:bg-[#EFECE5] text-[#1F5C55] font-bold text-xs sm:text-sm border border-[#CBD5CF] transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#1F5C55]" />
              <span>Tư Vấn 1-1 Cùng Bác Sĩ (Zalo)</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
