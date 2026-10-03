'use client';

import React from 'react';
import Image from 'next/image';
import { Pill, Sparkles, ExternalLink, ShieldAlert, CheckCircle2, ArrowRight } from 'lucide-react';

export default function SectionMedication() {
  const NOTEBOOK_URL = 'https://notebooklm.google.com/notebook/5fd2fede-0ef7-4699-b3c6-680c4bc84618';

  return (
    <section id="thuoc" className="py-16 bg-slate-50/70 border-b border-slate-200/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-200 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold mb-3">
              <Pill className="w-3.5 h-3.5 text-indigo-600" />
              <span>Chuyên Mục Trọng Tâm Số 4 • Dược Lâm Sàng</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
              Hướng Dẫn Sử Dụng Thuốc & Tương Tác Thuốc
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-1 max-w-2xl">
              Hệ thống trợ lý AI hỗ trợ kê đơn, cảnh báo tương tác thuốc nghiêm trọng, 
              hiệu chỉnh liều theo mức lọc cầu thận và khuyến cáo sử dụng an toàn.
            </p>
          </div>

          <a
            href={NOTEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md shadow-indigo-600/20 transition-all shrink-0"
          >
            <Sparkles className="w-4 h-4 text-indigo-200" />
            <span>Mở Trợ Lý Kê Đơn AI</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Content Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white group">
              <Image
                src="/images/thuoc-va-tuong-tac-thuoc-nen.png"
                alt="Thuốc và tương tác thuốc"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-sm bg-indigo-600 text-white mb-1 inline-block">
                  Dược lý thực hành
                </span>
                <p className="text-xs font-medium text-slate-200">
                  Phát triển bởi BS. Lương Đình Trung
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="flex items-center gap-2 font-bold text-slate-800 text-sm mb-1.5">
                  <ShieldAlert className="w-4 h-4 text-amber-500" />
                  <span>Cảnh Báo Tương Tác Nghiêm Trọng</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Phát hiện ngay các cặp tương tác chống chỉ định (ví dụ Macrolide + Statin, ACEI + Spironolactone...) có nguy cơ gây biến cố bất lợi.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="flex items-center gap-2 font-bold text-slate-800 text-sm mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Hiệu Chỉnh Liều Suy Thận (eGFR)</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Tra cứu mức giảm liều kháng sinh, thuốc hạ đường huyết và thuốc tim mạch dựa trên chỉ số thanh thải Creatinine hoặc eGFR.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="flex items-center gap-2 font-bold text-slate-800 text-sm mb-1.5">
                  <Pill className="w-4 h-4 text-sky-500" />
                  <span>Thời Điểm Uống & Tương Tác Thức Ăn</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Hướng dẫn bệnh nhân uống thuốc trước hay sau ăn, các thức uống cần tránh (nước bưởi, sữa, rượu bia) khi dùng thuốc.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="flex items-center gap-2 font-bold text-slate-800 text-sm mb-1.5">
                  <Sparkles className="w-4 h-4 text-indigo-500" />
                  <span>Hội Chẩn Phối Hợp Thuốc Bằng AI</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Nhập danh sách đơn thuốc gồm 5-10 loại thuốc để AI rà soát tổng thể độ an toàn và đưa ra khuyến nghị lâm sàng tối ưu.
                </p>
              </div>

            </div>

            <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-indigo-900 font-medium text-center sm:text-left">
                Bạn muốn kiểm tra tương tác cho một đơn thuốc cụ thể?
              </span>
              <a
                href={NOTEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-colors shrink-0 shadow-xs"
              >
                <span>Mở Trợ Lý Tra Cứu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
