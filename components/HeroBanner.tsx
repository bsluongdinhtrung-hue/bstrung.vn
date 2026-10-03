'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, BookOpen, Stethoscope, Activity, ArrowRight, ShieldCheck } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 md:pt-14 md:pb-18 bg-gradient-to-b from-sky-50/70 via-white to-slate-50 border-b border-slate-200/60">
      {/* Decorative backdrop elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Info */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-sky-600 animate-pulse" />
              <span>Cổng Thông Tin Thực Hành Y Khoa & Trợ Lý AI 2026</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              BSCKI. Lương Đình Trung
              <span className="block text-xl sm:text-2xl md:text-3xl font-semibold text-sky-600 mt-2">
                Hỗ Trợ Thực Hành Lâm Sàng & Phân Tích Y Học
              </span>
            </h1>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Hệ thống tổng hợp các sổ tay chuyên khoa số hóa, tích hợp trí tuệ nhân tạo (NotebookLM AI) 
              và các bộ công cụ phân tích dữ liệu lâm sàng phục vụ điều trị, tra cứu thuốc, dinh dưỡng và quản lý người bệnh đái tháo đường.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#dinh-duong"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm shadow-md shadow-sky-600/20 hover:shadow-lg transition-all"
              >
                <BookOpen className="w-4 h-4" />
                <span>Sổ tay Dinh dưỡng AI</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#noi-khoa"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200 shadow-xs hover:border-slate-300 transition-all"
              >
                <Stethoscope className="w-4 h-4 text-sky-600" />
                <span>Sổ tay Nội khoa</span>
              </a>

              <a
                href="#hba1c"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold text-sm border border-emerald-200 transition-all"
              >
                <Activity className="w-4 h-4 text-emerald-600" />
                <span>Quản lý HbA1c</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                <span>Tài liệu Y khoa chuẩn hóa</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Bảo mật dữ liệu tuyệt đối (Client-side)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <span>Tích hợp AI hỏi đáp chuyên sâu</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Card / Bento Feature */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-2xl bg-white p-6 shadow-xl border border-slate-200/90 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100/50 rounded-bl-full pointer-events-none" />
                
                <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden shadow-xs border border-sky-100 shrink-0">
                    <Image
                      src="/images/cropped-logo-moi-1.png"
                      alt="Avatar BS. Trung"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">BSCKI. Lương Đình Trung</h3>
                    <p className="text-xs text-sky-600 font-semibold">Bác sĩ Chuyên khoa I</p>
                    <p className="text-xs text-slate-500">Khám chữa bệnh & Quản lý lâm sàng</p>
                  </div>
                </div>

                <div className="py-4 space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="p-2 rounded-lg bg-sky-100 text-sky-700 shrink-0">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800">Sổ tay Dinh Dưỡng Thông Minh</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">Xây dựng thực đơn, tra cứu hàm lượng vi chất và chế độ ăn bệnh lý.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 shrink-0">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800">Bảng Quản Lý HbA1c Trực Quan</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">Phân tầng bệnh nhân ĐTĐ, theo dõi xu hướng và cảnh báo trễ hẹn.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="p-2 rounded-lg bg-amber-100 text-amber-700 shrink-0">
                      <Stethoscope className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800">Trợ Lý Kê Đơn & Tương Tác Thuốc</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">Cảnh báo tương tác dược lý, thang điểm lâm sàng và liều dùng.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://zalo.me/0983898830"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 font-semibold text-xs border border-sky-200 transition-colors"
                  >
                    <span>Kết nối tư vấn trực tiếp qua Zalo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
