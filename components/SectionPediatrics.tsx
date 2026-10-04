'use client';

import React from 'react';
import Image from 'next/image';
import { Baby, ExternalLink, AlertOctagon, Heart, ShieldCheck, ArrowRight, Activity, Thermometer } from 'lucide-react';

export default function SectionPediatrics() {
  const CONSULT_URL = 'https://notebooklm.google.com/notebook/daa19f87-43df-43d6-8c9d-6e541691a4cb';

  return (
    <section id="nhi-khoa" className="bg-white rounded-3xl border border-[#CCD9D5] shadow-sm hover:shadow-md transition-all duration-300 p-6 sm:p-10 md:p-12 scroll-mt-24">
      {/* Section Index Stepper */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-5 border-b border-[#CCD9D5]">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#1F5C55] text-white text-xs font-black tracking-wider uppercase shadow-2xs">
          <Baby className="w-3.5 h-3.5" />
          <span>PHÂN VÙNG 05 / 05</span>
        </div>
        <span className="text-xs font-bold text-[#1F5C55] tracking-wide uppercase">
          Chăm Sóc & Điều Trị Nhi Khoa Gia Đình
        </span>
      </div>

      <div>
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#DDE3E0] gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E3EFEC] border border-[#B8D5CE] text-[#1F5C55] text-xs font-bold mb-3">
              <Baby className="w-3.5 h-3.5 text-[#1F5C55]" />
              <span>Chuyên Mục Trọng Tâm Số 5 • Nhi Khoa Gia Đình</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#12211F] tracking-tight">
              Sổ Tay Chăm Sóc & Điều Trị Bệnh Cho Bé
            </h2>
            <p className="text-[#5C6B68] text-sm sm:text-base mt-1.5 max-w-3xl leading-relaxed">
              Bé bị sốt cao, ho có đờm, khò khè hay rối loạn tiêu hóa? Hướng dẫn cách tính liều thuốc hạ sốt chuẩn theo cân nặng (kg), 
              chăm sóc dinh dưỡng khi bé ốm và nhận biết thời điểm vàng cần đưa con đi khám bác sĩ.
            </p>
          </div>

          <a
            href={CONSULT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#1F5C55] hover:bg-[#16443F] text-white font-bold text-sm shadow-sm transition-all shrink-0"
          >
            <span>Nhận hướng dẫn chăm bé</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Content Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-[#DDE3E0] shadow-sm bg-[#F7F8F6] group">
              <Image
                src="/images/HD_Nhi-300x300.png"
                alt="Chăm sóc và điều trị bệnh ở trẻ em"
                fill
                className="object-cover group-hover:scale-104 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12211F]/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-bold px-2 py-0.5 rounded-sm bg-[#1F5C55] text-white mb-1 inline-block">
                  Y học Nhi khoa
                </span>
                <p className="text-xs text-slate-200">
                  BSCKI. Lương Đình Trung
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-4.5 rounded-xl bg-[#F7F8F6] border border-[#DDE3E0]">
                <div className="flex items-center gap-2 font-bold text-[#12211F] text-sm mb-1.5">
                  <Thermometer className="w-4 h-4 text-rose-600" />
                  <span>Tính Liều Hạ Sốt Chuẩn Theo Cân Nặng (kg)</span>
                </div>
                <p className="text-xs text-[#5C6B68] leading-relaxed">
                  Công thức tính liều Paracetamol (10 - 15mg/kg/lần, cách 4-6 giờ) và Ibuprofen an toàn, tránh quá liều gây ngộ độc gan cho trẻ.
                </p>
              </div>

              <div className="p-4.5 rounded-xl bg-[#F7F8F6] border border-[#DDE3E0]">
                <div className="flex items-center gap-2 font-bold text-[#12211F] text-sm mb-1.5">
                  <AlertOctagon className="w-4 h-4 text-amber-600" />
                  <span>Dấu Hiệu Cảnh Báo Nguy Hiểm Cần Đi Viện</span>
                </div>
                <p className="text-xs text-[#5C6B68] leading-relaxed">
                  Nhận biết ngay tình trạng thở nhanh, rút lõm lồng ngực, li bì khó đánh thức, nôn mửa liên tục hoặc sốt cao không hạ kèm co giật.
                </p>
              </div>

              <div className="p-4.5 rounded-xl bg-[#F7F8F6] border border-[#DDE3E0]">
                <div className="flex items-center gap-2 font-bold text-[#12211F] text-sm mb-1.5">
                  <Baby className="w-4 h-4 text-[#1F5C55]" />
                  <span>Xử Trí Viêm Đường Hô Hấp & Tiêu Hóa</span>
                </div>
                <p className="text-xs text-[#5C6B68] leading-relaxed">
                  Cách vệ sinh mũi họng đúng cách, bù nước điện giải Oresol khi trẻ tiêu chảy và lưu ý không tự ý lạm dụng kháng sinh cho trẻ nhỏ.
                </p>
              </div>

              <div className="p-4.5 rounded-xl bg-[#F7F8F6] border border-[#DDE3E0]">
                <div className="flex items-center gap-2 font-bold text-[#12211F] text-sm mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Chế Độ Dinh Dưỡng Giúp Bé Phục Hồi</span>
                </div>
                <p className="text-xs text-[#5C6B68] leading-relaxed">
                  Cách nấu cháo, súp dễ tiêu giàu đạm, bổ sung kẽm và men vi sinh giúp hệ tiêu hóa của bé sớm hồi phục sau các đợt ốm sốt.
                </p>
              </div>

            </div>

            <div className="p-4.5 rounded-xl bg-[#E3EFEC] border border-[#B8D5CE] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-[#16443F] font-semibold text-center sm:text-left">
                Bé nhà bạn đang có triệu chứng cần bác sĩ giải đáp ngay?
              </span>
              <a
                href={CONSULT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#1F5C55] hover:bg-[#16443F] text-white font-bold text-xs transition-colors shrink-0 shadow-2xs"
              >
                <span>Hỏi cách chăm sóc con</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
