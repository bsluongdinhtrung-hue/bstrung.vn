'use client';

import React from 'react';
import Image from 'next/image';
import { Baby, Sparkles, ExternalLink, AlertOctagon, Heart, ShieldCheck, ArrowRight } from 'lucide-react';

export default function SectionPediatrics() {
  const NOTEBOOK_URL = 'https://notebooklm.google.com/notebook/daa19f87-43df-43d6-8c9d-6e541691a4cb';

  return (
    <section id="nhi-khoa" className="py-16 bg-slate-50/70 border-b border-slate-200/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-200 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold mb-3">
              <Baby className="w-3.5 h-3.5 text-rose-600" />
              <span>Chuyên Mục Trọng Tâm Số 6 • Nhi Khoa</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
              Chẩn Đoán & Điều Trị Bệnh Lý Trẻ Em
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-1 max-w-2xl">
              Trợ lý thực hành lâm sàng nhi khoa hỗ trợ chẩn đoán sớm, tính liều thuốc chính xác theo cân nặng (kg) 
              và nhận diện các dấu hiệu nguy hiểm cảnh báo chuyển viện.
            </p>
          </div>

          <a
            href={NOTEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-semibold text-sm shadow-md shadow-rose-600/20 transition-all shrink-0"
          >
            <Sparkles className="w-4 h-4 text-rose-200" />
            <span>Mở Trợ Lý Nhi Khoa AI</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Content Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white group">
              <Image
                src="/images/HD_Nhi-300x300.png"
                alt="Chẩn đoán điều trị Nhi khoa"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-sm bg-rose-600 text-white mb-1 inline-block">
                  Hướng Dẫn Điều Trị Nhi
                </span>
                <p className="text-xs font-medium text-slate-200">
                  BSCKI. Lương Đình Trung
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="flex items-center gap-2 font-bold text-slate-800 text-sm mb-1.5">
                  <Heart className="w-4 h-4 text-rose-500" />
                  <span>Liều Dùng Chính Xác Theo Cân Nặng</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Công thức tính liều hạ sốt (Paracetamol 10-15mg/kg, Ibuprofen), kháng sinh thông thường và bù nước điện giải Oresol chuẩn IMCI.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="flex items-center gap-2 font-bold text-slate-800 text-sm mb-1.5">
                  <AlertOctagon className="w-4 h-4 text-amber-500" />
                  <span>Dấu Hiệu Cảnh Báo Nguy Hiểm</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Nhận biết sớm dấu hiệu thở nhanh, co rút lồng ngực, li bì, nôn trớ liên tục, sốt cao co giật để xử trí kịp thời.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="flex items-center gap-2 font-bold text-slate-800 text-sm mb-1.5">
                  <Baby className="w-4 h-4 text-sky-500" />
                  <span>Bệnh Lý Nhi Hô Hấp & Tiêu Hóa</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Phác đồ điều trị viêm tiểu phế quản, viêm tai giữa, tiêu chảy cấp, rotavirus và dị ứng đạm sữa bò ở trẻ sơ sinh và nhũ nhi.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="flex items-center gap-2 font-bold text-slate-800 text-sm mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Tư Vấn Dinh Dưỡng & Ăn Dặm</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Lịch bổ sung Vitamin D3, K2, kẽm, sắt sinh học và cách chế biến bữa ăn đảm bảo hấp thu vi chất cho trẻ biếng ăn, suy dinh dưỡng.
                </p>
              </div>

            </div>

            <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-rose-900 font-medium text-center sm:text-left">
                Bạn cần tra cứu phác đồ điều trị nhi khoa cho một ca bệnh cụ thể?
              </span>
              <a
                href={NOTEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs transition-colors shrink-0 shadow-xs"
              >
                <span>Mở Trợ Lý Nhi Khoa</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
