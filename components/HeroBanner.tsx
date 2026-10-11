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

        {/* 4 Quick Stat Bento Cards (2 cols mobile, 4 cols desktop - Exactly like the reference image) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          
          {/* Card 1: Phác đồ */}
          <div className="bg-white rounded-2xl p-4 border border-[#E8E4DA] shadow-xs flex flex-col justify-between hover:border-[#1F5C55]/40 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-cyan-50 text-cyan-700 border border-cyan-200/60 flex items-center justify-center mb-3">
              <Stethoscope className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold font-serif text-[#12211F] block">
                12+
              </span>
              <span className="text-xs text-[#63706D] font-medium block mt-0.5">
                Khoa Lâm Sàng
              </span>
            </div>
          </div>

          {/* Card 2: Thuốc */}
          <div className="bg-white rounded-2xl p-4 border border-[#E8E4DA] shadow-xs flex flex-col justify-between hover:border-[#1F5C55]/40 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200/60 flex items-center justify-center mb-3">
              <Pill className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold font-serif text-[#12211F] block">
                100+
              </span>
              <span className="text-xs text-[#63706D] font-medium block mt-0.5">
                Cặp Tương Tác Thuốc
              </span>
            </div>
          </div>

          {/* Card 3: Dinh dưỡng */}
          <div className="bg-white rounded-2xl p-4 border border-[#E8E4DA] shadow-xs flex flex-col justify-between hover:border-[#1F5C55]/40 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 border border-amber-200/60 flex items-center justify-center mb-3">
              <Apple className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold font-serif text-[#12211F] block">
                7 Ngày
              </span>
              <span className="text-xs text-[#63706D] font-medium block mt-0.5">
                Thực Đơn Cá Nhân Hóa
              </span>
            </div>
          </div>

          {/* Card 4: AI Assistant */}
          <div className="bg-white rounded-2xl p-4 border border-[#E8E4DA] shadow-xs flex flex-col justify-between hover:border-[#1F5C55]/40 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 border border-purple-200/60 flex items-center justify-center mb-3">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold font-serif text-[#12211F] block">
                24/7
              </span>
              <span className="text-xs text-[#63706D] font-medium block mt-0.5">
                Trợ Lý AI NotebookLM
              </span>
            </div>
          </div>

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
