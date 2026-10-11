'use client';

import React, { useState } from 'react';
import {
  Stethoscope,
  ExternalLink,
  FlaskConical,
  Gauge,
  Pill,
  Apple,
  Scale,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface MedicineApp {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  link: string;
  badge: string;
  colorClass: string;
  bgLightClass: string;
  icon: React.ComponentType<{ className?: string }>;
}

const PRIMARY_APPS: MedicineApp[] = [
  {
    id: 'so-tay-full',
    code: 'MOD-01 • CLINICAL',
    title: 'Phác Đồ Nội Khoa Toàn Diện',
    subtitle: '12+ Chuyên khoa, chẩn đoán phân biệt & phác đồ điều trị chuẩn Bộ Y tế',
    link: 'https://notebooklm.google.com/notebook/a9ba76b2-c822-48d0-8fbd-f305a03cad29',
    badge: 'AI NotebookLM',
    colorClass: 'text-cyan-700 border-cyan-200/70',
    bgLightClass: 'bg-cyan-50',
    icon: Stethoscope,
  },
  {
    id: 'tuong-tac-thuoc',
    code: 'MOD-04 • PHARMA',
    title: 'Dược Lý & Tương Tác Thuốc',
    subtitle: 'Phát hiện tương tác nguy hiểm, thời điểm uống & chỉnh liều suy thận',
    link: 'https://notebooklm.google.com/notebook/5fd2fede-0ef7-4699-b3c6-680c4bc84618',
    badge: 'AI NotebookLM',
    colorClass: 'text-emerald-700 border-emerald-200/70',
    bgLightClass: 'bg-emerald-50',
    icon: Pill,
  },
  {
    id: 'xet-nghiem',
    code: 'MOD-02 • LAB',
    title: 'Xét Nghiệm & Trị Số SI',
    subtitle: 'Chỉ số sinh hóa, huyết học, miễn dịch, marker sinh học & biện luận',
    link: 'https://notebooklm.google.com/notebook/3dbcddca-26c7-477a-a299-c3f482f85277',
    badge: 'AI NotebookLM',
    colorClass: 'text-purple-700 border-purple-200/70',
    bgLightClass: 'bg-purple-50',
    icon: FlaskConical,
  },
  {
    id: 'thang-diem',
    code: 'MOD-03 • SCORES',
    title: 'Thang Điểm & Tiên Lượng',
    subtitle: 'HEART Score, CURB-65, Child-Pugh, CKD-EPI & phân tầng nguy cơ',
    link: 'https://notebooklm.google.com/notebook/863d113d-3014-46ae-a171-8253e3a75eee',
    badge: 'Web App + AI',
    colorClass: 'text-amber-700 border-amber-200/70',
    bgLightClass: 'bg-amber-50',
    icon: Gauge,
  },
];

const SECONDARY_APPS: MedicineApp[] = [
  {
    id: 'dinh-duong-benh-ly',
    code: 'MOD-05 • DIET',
    title: 'Dinh Dưỡng Bệnh Lý Mạn Tính',
    subtitle: 'Khẩu phần ăn cân đối cho bệnh tim mạch, đái tháo đường & suy thận',
    link: 'https://notebooklm.google.com/notebook/45e0dc30-6972-46ce-b55d-88a02d013776',
    badge: 'AI NotebookLM',
    colorClass: 'text-rose-700 border-rose-200/70',
    bgLightClass: 'bg-rose-50',
    icon: Apple,
  },
  {
    id: 'chinh-sach-bhyt',
    code: 'MOD-06 • POLICY',
    title: 'Quản Trị Dược & Định Mức BHYT',
    subtitle: 'Sổ tay định mức danh mục kỹ thuật y tế và tỷ lệ quỹ BHYT thanh toán',
    link: 'https://notebooklm.google.com/notebook/cee0719a-ca48-401b-85a6-abea4bb4f20d',
    badge: 'Tra cứu phác đồ',
    colorClass: 'text-stone-700 border-stone-200/70',
    bgLightClass: 'bg-stone-50',
    icon: Scale,
  },
];

export default function SectionInternalMedicine() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="tien-ich" className="scroll-mt-24 space-y-6">
      {/* Anchor for old links */}
      <div id="noi-khoa" className="scroll-mt-24" />

      {/* Main Bento Container */}
      <div className="bg-white rounded-3xl p-5 sm:p-8 md:p-10 border border-[#E8E4DA] shadow-xs">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#E8E4DA] mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E2EBE8] border border-[#BDD3CC] text-[#1F5C55] text-xs font-bold mb-2.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Cổng Tiện Ích Bác Sĩ & Trợ Lý Y Khoa AI</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#12211F] tracking-tight">
              Sổ Tay Lâm Sàng & Bộ Công Cụ Y Sinh
            </h2>
            <p className="text-[#63706D] text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
              Trích xuất dữ liệu phác đồ chuẩn hóa, dược lý và cận lâm sàng được biên soạn bởi BSCKI. Lương Đình Trung.
              Tra cứu và trò chuyện trực tiếp cùng Trợ lý AI (Google NotebookLM) hoàn toàn miễn phí.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[11px] font-semibold text-[#1F5C55] bg-[#E2EBE8] px-3 py-1 rounded-full border border-[#BDD3CC]">
              ⚡ Phản hồi AI tức thì 24/7
            </span>
          </div>
        </div>

        {/* 4 Primary Clinical Apps (2 cols on mobile, 4 cols on desktop - as requested in proposal) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {PRIMARY_APPS.map((app) => {
            const IconComp = app.icon;
            return (
              <div
                key={app.id}
                className="group bg-[#FAF9F5] hover:bg-white rounded-2xl p-4 sm:p-5 border border-[#E8E4DA] hover:border-[#1F5C55]/50 transition-all duration-200 flex flex-col justify-between hover:shadow-md"
              >
                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl ${app.bgLightClass} ${app.colorClass} border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[9.5px] sm:text-[10px] font-bold px-2 py-0.5 rounded-md bg-white border border-[#CBD5CF] text-[#1F5C55] shrink-0">
                      {app.badge}
                    </span>
                  </div>

                  {/* Title & One-line summary */}
                  <h3 className="font-bold text-sm sm:text-base text-[#12211F] group-hover:text-[#1F5C55] transition-colors leading-snug">
                    {app.title}
                  </h3>
                  <p className="text-[11.5px] sm:text-xs text-[#63706D] mt-1.5 leading-relaxed line-clamp-3">
                    {app.subtitle}
                  </p>
                </div>

                {/* Direct Action Link to NotebookLM */}
                <div className="pt-4 mt-2 border-t border-[#E8E4DA]/60">
                  <a
                    href={app.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white group-hover:bg-[#1F5C55] text-[#1F5C55] group-hover:text-white border border-[#CBD5CF] group-hover:border-[#1F5C55] font-bold text-xs transition-colors shadow-2xs"
                  >
                    <span>Hỏi AI tra cứu</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expandable Section for Secondary Apps */}
        {showMore && (
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-5 mt-4 pt-4 border-t border-[#E8E4DA] animate-fadeIn">
            {SECONDARY_APPS.map((app) => {
              const IconComp = app.icon;
              return (
                <div
                  key={app.id}
                  className="group bg-[#FAF9F5] hover:bg-white rounded-2xl p-4 sm:p-5 border border-[#E8E4DA] hover:border-[#1F5C55]/50 transition-all duration-200 flex flex-col justify-between hover:shadow-md"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div
                        className={`w-10 h-10 rounded-xl ${app.bgLightClass} ${app.colorClass} border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}
                      >
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white border border-[#CBD5CF] text-[#1F5C55] shrink-0">
                        {app.badge}
                      </span>
                    </div>

                    <h3 className="font-bold text-sm sm:text-base text-[#12211F] group-hover:text-[#1F5C55] transition-colors leading-snug">
                      {app.title}
                    </h3>
                    <p className="text-xs text-[#63706D] mt-1.5 leading-relaxed">
                      {app.subtitle}
                    </p>
                  </div>

                  <div className="pt-4 mt-2 border-t border-[#E8E4DA]/60">
                    <a
                      href={app.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white group-hover:bg-[#1F5C55] text-[#1F5C55] group-hover:text-white border border-[#CBD5CF] group-hover:border-[#1F5C55] font-bold text-xs transition-colors shadow-2xs"
                    >
                      <span>Mở chuyên mục tra cứu</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Toggle secondary apps button */}
        <div className="mt-5 text-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FAF9F5] hover:bg-[#EFECE5] border border-[#E8E4DA] text-xs font-semibold text-[#63706D] hover:text-[#1F5C55] transition-colors cursor-pointer"
          >
            <span>{showMore ? 'Thu gọn bớt chuyên mục phụ' : 'Xem thêm: Dinh dưỡng bệnh lý & Quản lý BHYT'}</span>
            {showMore ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

      </div>
    </section>
  );
}
