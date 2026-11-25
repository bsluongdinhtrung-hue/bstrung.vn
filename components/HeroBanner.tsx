'use client';

import React from 'react';
import {
  Stethoscope,
  ArrowRight,
  Sparkles,
  MessageCircle,
  Pill,
  Apple,
  Gauge,
  Baby,
  ChevronRight,
  BookOpenCheck,
  Clock,
  UserRound,
} from 'lucide-react';
import { useZaloConsult } from './ZaloConsultContext';
import { useAnalytics } from './AnalyticsContext';

const TOPICS = [
  { href: '#noi-khoa', title: 'Nội khoa & cấp cứu', note: 'Phác đồ, xét nghiệm, thang điểm', icon: Stethoscope },
  { href: '#dinh-duong', title: 'Dinh dưỡng & thực đơn', note: 'Đái tháo đường, mỡ máu, gout, mẹ bầu', icon: Apple },
  { href: '#thuoc', title: 'Thuốc & tương tác', note: 'Uống lúc nào, thuốc nào không đi cùng nhau', icon: Pill },
  { href: '#tinh-toan', title: 'Tính BMI & chức năng thận', note: 'Nhập số đo, có kết quả ngay', icon: Gauge },
  { href: '#nhi-khoa', title: 'Chăm sóc bé ốm', note: 'Liều hạ sốt theo cân nặng, dấu hiệu đi viện', icon: Baby },
];

const FACTS = [
  { icon: BookOpenCheck, text: 'Nội dung biên soạn theo phác đồ Bộ Y tế' },
  { icon: Clock, text: 'Trợ lý AI trả lời 24/7, không mất phí' },
  { icon: UserRound, text: 'Tư vấn 1-1: bác sĩ xem bệnh án, trả lời qua Zalo' },
];

export default function HeroBanner() {
  const { openZaloModal } = useZaloConsult();
  const { incrementCounter } = useAnalytics();

  return (
    <section className="pt-8 pb-4 md:pt-14 md:pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

        {/* Lời hứa + hai việc chính */}
        <div className="lg:col-span-7">
          <h1 className="text-3xl/[1.25] sm:text-4xl/[1.25] md:text-5xl/[1.2] font-bold font-serif text-[#12211F] tracking-tight text-balance">
            Sổ tay y khoa cho gia đình, do bác sĩ Lương Đình Trung biên soạn
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#3D4745] leading-relaxed max-w-2xl">
            Tra cứu phác đồ nội khoa, tương tác thuốc, dinh dưỡng bệnh lý và cách chăm sóc trẻ ốm cùng Trợ lý AI, miễn phí.
            Cần ý kiến riêng cho trường hợp của mình thì đặt tư vấn 1-1 với BSCKI. Lương Đình Trung qua Zalo.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a
              href="#tien-ich"
              onClick={() => incrementCounter('ai-assistant-hero', 'Trợ Lý AI NotebookLM (Hero)', 'ai')}
              className="w-full sm:w-auto min-h-14 inline-flex items-center justify-center gap-2 px-6 rounded-2xl bg-[#1F5C55] hover:bg-[#16443F] text-white font-bold text-base shadow-sm transition-colors"
            >
              <Sparkles className="w-5 h-5" aria-hidden="true" />
              <span>Tra cứu miễn phí với Trợ lý AI</span>
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => {
                incrementCounter('zalo-consult', 'Tư Vấn Zalo 1-1 (Hero)', 'consultation');
                openZaloModal();
              }}
              className="w-full sm:w-auto min-h-14 inline-flex items-center justify-center gap-2 px-6 rounded-2xl bg-white hover:bg-[#EAF0ED] text-[#1F5C55] font-bold text-base border border-[#CBD5CF] transition-colors cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              <span>Đặt tư vấn 1-1 qua Zalo · 299.000đ</span>
            </button>
          </div>

          <ul className="mt-7 grid gap-2.5 text-sm text-[#3D4745]">
            {FACTS.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2.5">
                <Icon className="w-4 h-4 text-[#1F5C55] shrink-0" aria-hidden="true" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mục lục chuyên mục: đi thẳng tới phần cần đọc */}
        <nav aria-label="Chuyên mục" className="lg:col-span-5 bg-white rounded-3xl border border-[#E8E4DA] p-2 sm:p-3">
          <p className="px-3 pt-2 pb-1 text-sm font-bold text-[#12211F]">Bạn đang cần tra cứu gì?</p>
          <ul>
            {TOPICS.map(({ href, title, note, icon: Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  className="group flex items-center gap-3 rounded-2xl px-3 py-3 min-h-14 hover:bg-[#F5F2EB] transition-colors"
                >
                  <span className="w-10 h-10 rounded-xl bg-[#E2EBE8] text-[#1F5C55] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-base font-bold text-[#12211F] group-hover:text-[#1F5C55]">{title}</span>
                    <span className="block text-sm text-[#63706D]">{note}</span>
                  </span>
                  <ChevronRight className="w-5 h-5 text-[#63706D] group-hover:text-[#1F5C55] shrink-0" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
