'use client';

import React from 'react';
import Image from 'next/image';
import { MessageCircle, Mail, AlertTriangle } from 'lucide-react';
import { useZaloConsult } from './ZaloConsultContext';
import { useAnalytics } from './AnalyticsContext';
import { CONSULT_FEE_LABEL } from '@/lib/consult';

const FOCUS_AREAS = ['Cơ xương khớp', 'Hen phế quản', 'Bệnh phổi tắc nghẽn mạn tính (COPD)'];

const STEPS = [
  { title: `Chuyển khoản ${CONSULT_FEE_LABEL}`, note: 'Quét mã VietQR, số tiền và nội dung đã điền sẵn.' },
  { title: 'Gửi ảnh biên lai', note: 'Ghi họ tên, số Zalo. Bấm xác nhận là mở được Zalo của bác sĩ.' },
  { title: 'Gửi bệnh án qua Zalo', note: 'Đơn thuốc, kết quả xét nghiệm, phim chụp. Bác sĩ đọc và trả lời trực tiếp.' },
];

export default function SectionConsult() {
  const { openZaloModal } = useZaloConsult();
  const { incrementCounter } = useAnalytics();

  return (
    <section id="tu-van" className="scroll-mt-24 bg-white rounded-3xl border border-[#E8E4DA] p-6 sm:p-10">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

        {/* Về bác sĩ */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-[#CBD5CF] bg-white shrink-0">
              <Image src="/images/cropped-logo-moi-1.png" alt="" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#12211F] tracking-tight">
                BSCKI. Lương Đình Trung
              </h2>
              <p className="text-sm text-[#63706D] mt-1">Bác sĩ Chuyên khoa I · 12 năm kinh nghiệm Nội khoa</p>
            </div>
          </div>

          <p className="mt-5 text-base text-[#3D4745] leading-relaxed">
            Chuyên sâu điều trị và theo dõi lâu dài các bệnh:
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {FOCUS_AREAS.map((area) => (
              <li key={area} className="px-3 py-1.5 rounded-full bg-[#E2EBE8] text-[#16443F] text-sm font-semibold">
                {area}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-[#63706D] leading-relaxed">
            Toàn bộ sổ tay và Trợ lý AI trên trang do bác sĩ biên soạn, dựa trên phác đồ của Bộ Y tế.
          </p>
        </div>

        {/* Tư vấn 1-1 */}
        <div className="lg:col-span-7 rounded-2xl bg-[#FAF9F5] border border-[#E8E4DA] p-5 sm:p-7">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="text-xl font-bold font-serif text-[#12211F]">Tư vấn 1-1 qua Zalo</h3>
            <p className="text-2xl font-bold text-[#1F5C55] whitespace-nowrap">
              {CONSULT_FEE_LABEL}<span className="text-sm font-semibold text-[#63706D]"> / lượt</span>
            </p>
          </div>
          <p className="mt-2 text-base text-[#3D4745] leading-relaxed">
            Bác sĩ trực tiếp đọc bệnh án, đơn thuốc và xét nghiệm của bạn, rồi trả lời riêng qua Zalo.
            Phù hợp khi bạn cần ý kiến thứ hai, muốn hiểu kết quả xét nghiệm hoặc điều chỉnh việc dùng thuốc.
          </p>

          <ol className="mt-6 space-y-4">
            {STEPS.map((step, i) => (
              <li key={step.title} className="flex gap-3">
                <span className="w-8 h-8 rounded-full bg-[#1F5C55] text-white text-sm font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <div>
                  <p className="text-base font-bold text-[#12211F]">{step.title}</p>
                  <p className="text-sm text-[#63706D] leading-relaxed">{step.note}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => {
                incrementCounter('zalo-consult', 'Tư Vấn Zalo 1-1 (Khối Tư Vấn)', 'consultation');
                openZaloModal();
              }}
              className="w-full sm:w-auto min-h-14 inline-flex items-center justify-center gap-2 px-6 rounded-2xl bg-[#1F5C55] hover:bg-[#16443F] text-white font-bold text-base transition-colors cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              <span>Đặt tư vấn · {CONSULT_FEE_LABEL}</span>
            </button>
            <a
              href="mailto:bsluongdinhtrung@gmail.com?subject=H%E1%BB%8Fi%20tr%C6%B0%E1%BB%9Bc%20khi%20%C4%91%E1%BA%B7t%20t%C6%B0%20v%E1%BA%A5n"
              className="w-full sm:w-auto min-h-14 inline-flex items-center justify-center gap-2 px-6 rounded-2xl bg-white hover:bg-[#EAF0ED] text-[#1F5C55] font-bold text-base border border-[#CBD5CF] transition-colors"
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
              <span>Hỏi trước qua email</span>
            </a>
          </div>

          <p className="mt-5 flex items-start gap-2 text-sm text-[#63706D] leading-relaxed">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
            <span>Khó thở, đau ngực, sốt cao co giật hay triệu chứng cấp cứu: đến ngay cơ sở y tế gần nhất, đừng chờ tư vấn qua Zalo.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
