'use client';

import React from 'react';
import Image from 'next/image';
import { Baby, ExternalLink, AlertOctagon, ShieldCheck, ArrowRight, Thermometer, Sparkles } from 'lucide-react';

export default function SectionPediatrics() {
  const CONSULT_URL = 'https://notebooklm.google.com/notebook/daa19f87-43df-43d6-8c9d-6e541691a4cb';

  return (
    <section id="nhi-khoa" className="bg-white rounded-3xl border border-[#E8E4DA] shadow-xs hover:shadow-md transition-all duration-300 p-6 sm:p-10 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-5 border-b border-[#E8E4DA] gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E2EBE8] border border-[#BDD3CC] text-[#1F5C55] text-xs font-bold mb-2.5">
            <Baby className="w-3.5 h-3.5 text-[#1F5C55]" />
            <span>Nhi Khoa Gia Đình • Chăm Sóc Bé Khoa Học</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#12211F] tracking-tight">
            Sổ Tay Chăm Sóc & Điều Trị Bệnh Cho Bé
          </h2>
          <p className="text-[#63706D] text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
            Bé bị sốt, ho, khò khè hay rối loạn tiêu hóa? Hướng dẫn cách tính liều thuốc hạ sốt chuẩn theo cân nặng (kg),
            chăm sóc dinh dưỡng khi bé ốm và nhận biết thời điểm vàng cần đưa con đi khám.
          </p>
        </div>

        <a
          href={CONSULT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#1F5C55] hover:bg-[#16443F] text-white font-bold text-xs sm:text-sm shadow-2xs transition-all shrink-0"
        >
          <Sparkles className="w-4 h-4 text-emerald-200" />
          <span>Hỏi AI hướng dẫn chăm bé</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Content Bento */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
        
        <div className="lg:col-span-4">
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-[#E8E4DA] shadow-xs bg-[#FAF9F5] group">
            <Image
              src="/images/HD_Nhi-300x300.png"
              alt="Chăm sóc và điều trị bệnh ở trẻ em"
              fill
              className="object-cover group-hover:scale-104 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12211F]/75 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-[#1F5C55] text-white mb-1 inline-block">
                Y học Nhi khoa
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
                <Thermometer className="w-4 h-4 text-rose-600" />
                <span>Tính Liều Hạ Sốt Chuẩn Theo Cân Nặng (kg)</span>
              </div>
              <p className="text-[11.5px] text-[#63706D] leading-relaxed">
                Công thức tính liều Paracetamol (10 - 15mg/kg/lần, cách 4-6 giờ) an toàn, tránh quá liều gây ngộ độc gan cho trẻ.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E8E4DA]">
              <div className="flex items-center gap-2 font-bold text-[#12211F] text-xs sm:text-sm mb-1.5">
                <AlertOctagon className="w-4 h-4 text-amber-600" />
                <span>Dấu Hiệu Cảnh Báo Cần Cho Trẻ Đi Viện</span>
              </div>
              <p className="text-[11.5px] text-[#63706D] leading-relaxed">
                Nhận biết ngay thở nhanh, rút lõm lồng ngực, li bì khó đánh thức, nôn liên tục hoặc sốt cao co giật.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E8E4DA]">
              <div className="flex items-center gap-2 font-bold text-[#12211F] text-xs sm:text-sm mb-1.5">
                <Baby className="w-4 h-4 text-[#1F5C55]" />
                <span>Xử Trí Viêm Hô Hấp & Tiêu Hóa Ban Đầu</span>
              </div>
              <p className="text-[11.5px] text-[#63706D] leading-relaxed">
                Cách vệ sinh mũi họng đúng cách, bù nước điện giải Oresol khi trẻ tiêu chảy và lưu ý không lạm dụng kháng sinh.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E8E4DA]">
              <div className="flex items-center gap-2 font-bold text-[#12211F] text-xs sm:text-sm mb-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Dinh Dưỡng Giúp Bé Sớm Phục Hồi</span>
              </div>
              <p className="text-[11.5px] text-[#63706D] leading-relaxed">
                Cách nấu cháo súp dễ tiêu giàu đạm, bổ sung kẽm và men vi sinh giúp hệ tiêu hóa bé phục hồi sau đợt ốm sốt.
              </p>
            </div>

          </div>

          <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E8E4DA] flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-[#3D4745] font-semibold text-center sm:text-left">
              Bé nhà bạn đang có dấu hiệu bất thường cần giải đáp ngay?
            </span>
            <a
              href={CONSULT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#1F5C55] hover:bg-[#16443F] text-white font-bold text-xs transition-colors shrink-0 shadow-2xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-200" />
              <span>Hỏi Trợ lý AI xử trí triệu chứng</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
