'use client';

import React from 'react';
import Image from 'next/image';
import { Pill, ExternalLink, ShieldAlert, CheckCircle2, ArrowRight, Clock, AlertTriangle, Sparkles } from 'lucide-react';

export default function SectionMedication() {
  const CONSULT_URL = 'https://notebooklm.google.com/notebook/5fd2fede-0ef7-4699-b3c6-680c4bc84618';

  return (
    <section id="thuoc" className="bg-white rounded-3xl border border-[#E8E4DA] shadow-xs hover:shadow-md transition-all duration-300 p-6 sm:p-10 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-5 border-b border-[#E8E4DA] gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E2EBE8] border border-[#BDD3CC] text-[#1F5C55] text-xs font-bold mb-2.5">
            <Pill className="w-3.5 h-3.5 text-[#1F5C55]" />
            <span>Dược Lý Lâm Sàng • An Toàn Kê Đơn Thuốc</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#12211F] tracking-tight">
            Hướng Dẫn Dùng Thuốc An Toàn & Tránh Tương Tác
          </h2>
          <p className="text-[#63706D] text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
            Bạn đang dùng nhiều loại thuốc cùng lúc? Thuốc nào nên uống trước bữa ăn, thuốc nào cần uống sau ăn? 
            Tra cứu nhanh để đảm bảo hiệu quả điều trị tối ưu và phòng ngừa các tương tác bất lợi.
          </p>
        </div>

        <a
          href={CONSULT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#1F5C55] hover:bg-[#16443F] text-white font-bold text-xs sm:text-sm shadow-2xs transition-all shrink-0"
        >
          <Sparkles className="w-4 h-4 text-emerald-200" />
          <span>Hỏi AI kiểm tra đơn thuốc</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Content Bento */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
        
        <div className="lg:col-span-4">
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-[#E8E4DA] shadow-xs bg-[#FAF9F5] group">
            <Image
              src="/images/thuoc-va-tuong-tac-thuoc-nen.png"
              alt="Hướng dẫn dùng thuốc an toàn"
              fill
              className="object-cover group-hover:scale-104 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12211F]/75 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-[#1F5C55] text-white mb-1 inline-block">
                Dược học an toàn
              </span>
              <p className="text-xs text-slate-200">
                Biên soạn bởi BSCKI. Lương Đình Trung
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            
            <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E8E4DA]">
              <div className="flex items-center gap-2 font-bold text-[#12211F] text-xs sm:text-sm mb-1.5">
                <ShieldAlert className="w-4 h-4 text-amber-600" />
                <span>Cảnh Báo Tương Tác Giữa Các Thuốc</span>
              </div>
              <p className="text-[11.5px] text-[#63706D] leading-relaxed">
                Nhận biết ngay những cặp thuốc không nên uống cùng lúc để tránh giảm tác dụng điều trị hoặc gia tăng độc tính.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E8E4DA]">
              <div className="flex items-center gap-2 font-bold text-[#12211F] text-xs sm:text-sm mb-1.5">
                <Clock className="w-4 h-4 text-[#1F5C55]" />
                <span>Thời Điểm Uống Thuốc Chuẩn</span>
              </div>
              <p className="text-[11.5px] text-[#63706D] leading-relaxed">
                Hướng dẫn cụ thể thuốc uống lúc đói, thuốc uống ngay sau ăn no và khoảng cách giãn cữ giữa các lần uống.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E8E4DA]">
              <div className="flex items-center gap-2 font-bold text-[#12211F] text-xs sm:text-sm mb-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Lưu Ý Người Cao Tuổi & Bệnh Thận</span>
              </div>
              <p className="text-[11.5px] text-[#63706D] leading-relaxed">
                Hiệu chỉnh liều theo mức lọc cầu thận (eGFR) nhằm bảo vệ chức năng gan thận khi điều trị dài ngày.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E8E4DA]">
              <div className="flex items-center gap-2 font-bold text-[#12211F] text-xs sm:text-sm mb-1.5">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                <span>Tương Tác Với Thức Ăn, Nước Uống</span>
              </div>
              <p className="text-[11.5px] text-[#63706D] leading-relaxed">
                Các loại thực phẩm quen thuộc (sữa, chè, bưởi chùm, rượu bia...) cần tránh dùng kèm khi đang uống thuốc.
              </p>
            </div>

          </div>

          <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E8E4DA] flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-[#3D4745] font-semibold text-center sm:text-left">
              Bạn muốn đối chiếu và kiểm tra độ an toàn của đơn thuốc mình đang dùng?
            </span>
            <a
              href={CONSULT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#1F5C55] hover:bg-[#16443F] text-white font-bold text-xs transition-colors shrink-0 shadow-2xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-200" />
              <span>Hỏi Trợ lý AI kiểm tra ngay</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
