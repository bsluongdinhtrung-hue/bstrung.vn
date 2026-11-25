'use client';

import React from 'react';
import Image from 'next/image';
import { Baby, AlertOctagon, ShieldCheck, ArrowRight, Thermometer, Sparkles, Flame } from 'lucide-react';
import { useAnalytics } from './AnalyticsContext';

export default function SectionPediatrics() {
  const { incrementCounter, getDisplayCount, isCountPublic } = useAnalytics();
  const CONSULT_URL = 'https://notebooklm.google.com/notebook/daa19f87-43df-43d6-8c9d-6e541691a4cb';

  return (
    <section id="nhi-khoa" className="bg-white rounded-3xl border border-[#E8E4DA] shadow-xs hover:shadow-md transition-all duration-300 p-6 sm:p-10 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-5 border-b border-[#E8E4DA] gap-4">
        <div>
          <div className="flex items-center gap-2 flex-wrap mb-2.5 empty:hidden">
            {isCountPublic('cham-soc-nhi-khoa') && (<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-semibold">
              <Flame className="w-3 h-3 text-cyan-600" />
              <span>{getDisplayCount('cham-soc-nhi-khoa', 0)} lượt phụ huynh tra cứu</span>
            </span>)}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#12211F] tracking-tight">
            Chăm sóc bé khi ốm
          </h2>
          <p className="text-[#63706D] text-sm sm:text-base mt-1 max-w-2xl leading-relaxed">
            Liều hạ sốt theo cân nặng, chăm sóc khi bé ốm và dấu hiệu cần đưa con đi khám ngay.
          </p>
        </div>
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
              <p className="text-sm text-slate-100">
                Biên soạn bởi BSCKI. Lương Đình Trung
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            
            <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E8E4DA]">
              <div className="flex items-center gap-2 font-bold text-[#12211F] text-sm sm:text-base mb-1.5">
                <Thermometer className="w-4 h-4 text-rose-600" />
                <span>Tính Liều Hạ Sốt Chuẩn Theo Cân Nặng (kg)</span>
              </div>
              <p className="text-sm text-[#63706D] leading-relaxed">
                Công thức tính liều Paracetamol (10 - 15mg/kg/lần, cách 4-6 giờ) an toàn, tránh quá liều gây ngộ độc gan cho trẻ.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E8E4DA]">
              <div className="flex items-center gap-2 font-bold text-[#12211F] text-sm sm:text-base mb-1.5">
                <AlertOctagon className="w-4 h-4 text-amber-600" />
                <span>Dấu Hiệu Cảnh Báo Cần Cho Trẻ Đi Viện</span>
              </div>
              <p className="text-sm text-[#63706D] leading-relaxed">
                Nhận biết ngay thở nhanh, rút lõm lồng ngực, li bì khó đánh thức, nôn liên tục hoặc sốt cao co giật.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E8E4DA]">
              <div className="flex items-center gap-2 font-bold text-[#12211F] text-sm sm:text-base mb-1.5">
                <Baby className="w-4 h-4 text-[#1F5C55]" />
                <span>Xử Trí Viêm Hô Hấp & Tiêu Hóa Ban Đầu</span>
              </div>
              <p className="text-sm text-[#63706D] leading-relaxed">
                Cách vệ sinh mũi họng đúng cách, bù nước điện giải Oresol khi trẻ tiêu chảy và lưu ý không lạm dụng kháng sinh.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E8E4DA]">
              <div className="flex items-center gap-2 font-bold text-[#12211F] text-sm sm:text-base mb-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Dinh Dưỡng Giúp Bé Sớm Phục Hồi</span>
              </div>
              <p className="text-sm text-[#63706D] leading-relaxed">
                Cách nấu cháo súp dễ tiêu giàu đạm, bổ sung kẽm và men vi sinh giúp hệ tiêu hóa bé phục hồi sau đợt ốm sốt.
              </p>
            </div>

          </div>

          <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E8E4DA] flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-sm text-[#3D4745] font-semibold text-center sm:text-left">
              Bé nhà bạn đang có dấu hiệu bất thường cần giải đáp ngay?
            </span>
            <a
              href={CONSULT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => incrementCounter('cham-soc-nhi-khoa', 'Sổ Tay Chăm Sóc Cho Bé', 'pediatrics')}
              className="inline-flex items-center gap-1.5 min-h-11 px-4 py-2 rounded-xl bg-[#1F5C55] hover:bg-[#16443F] text-white font-bold text-sm transition-colors shrink-0 shadow-2xs"
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
