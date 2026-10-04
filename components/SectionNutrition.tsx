'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Apple, ExternalLink, Check, Copy, HelpCircle, Utensils, HeartPulse, Sparkles, MessageCircle } from 'lucide-react';

const SAMPLE_QUESTIONS = [
  'Tôi bị đái tháo đường và tăng huyết áp, Bác sĩ gợi ý giúp tôi thực đơn 7 ngày dễ nấu cho người miền Bắc?',
  'Phụ nữ mang thai 3 tháng giữa cần chú trọng bổ sung các nhóm thực phẩm nào để mẹ khỏe bé phát triển tốt?',
  'Chỉ số axit uric máu hơi cao, tôi nên hạn chế những món nào và nên ưu tiên các loại rau củ nào?',
  'Bác sĩ hướng dẫn giúp tôi chế độ ăn giảm mỡ máu, cải thiện chỉ số men gan an toàn tại nhà?',
];

export default function SectionNutrition() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  const CONSULT_URL = 'https://notebooklm.google.com/notebook/45e0dc30-6972-46ce-b55d-88a02d013776';

  return (
    <section id="dinh-duong" className="py-16 bg-[#FFFFFF] border-b border-[#DDE3E0] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#DDE3E0] gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E3EFEC] border border-[#B8D5CE] text-[#1F5C55] text-xs font-bold mb-3">
              <Apple className="w-3.5 h-3.5 text-[#1F5C55]" />
              <span>Chuyên Mục Trọng Tâm Số 1 • Dinh Dưỡng Khoa Học</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#12211F] tracking-tight">
              Sổ Tay Dinh Dưỡng & Thực Đơn Hằng Ngày
            </h2>
            <p className="text-[#5C6B68] text-sm sm:text-base mt-1.5 max-w-3xl leading-relaxed">
              Mỗi thể trạng và bệnh nền đều cần một chế độ dinh dưỡng riêng. Bạn chỉ cần chia sẻ độ tuổi, sở thích ăn uống 
              và bệnh lý hiện tại — Bác sĩ sẽ gợi ý thực đơn khoa học, dễ nấu và tốt nhất cho bạn.
            </p>
          </div>

          <a
            href={CONSULT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#1F5C55] hover:bg-[#16443F] text-white font-bold text-sm shadow-sm transition-all shrink-0"
          >
            <span>Nhận tư vấn thực đơn riêng</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Bento Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Visual Book Cover & Quick Guide */}
          <div className="lg:col-span-5 space-y-5">
            <div className="group relative rounded-2xl overflow-hidden border border-[#DDE3E0] shadow-sm bg-[#F7F8F6] hover:shadow-md transition-all duration-300">
              <a href={CONSULT_URL} target="_blank" rel="noopener noreferrer" className="block relative aspect-square w-full">
                <Image
                  src="/images/vietnamese-healthy-meal.jpg"
                  alt="Mâm cơm dinh dưỡng chuẩn Y khoa phong cách Việt"
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12211F]/85 via-black/20 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-[#1F5C55] text-white text-xs font-bold">
                      Thực đơn chuẩn Y khoa
                    </span>
                    <span className="inline-block px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-xs text-white text-[11px] font-medium">
                      Ẩm thực gia đình Việt
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-white drop-shadow-xs">
                    Cơm gạo lứt, cá hấp gừng, rau củ ngũ sắc & bưởi hồng thanh đạm
                  </p>
                  <p className="text-xs text-[#E3EFEC] mt-1">
                    Bấm vào ảnh để Bác sĩ tư vấn thực đơn cá nhân hóa cho bạn →
                  </p>
                </div>
              </a>
            </div>

            {/* Practical Note */}
            <div className="p-4 rounded-xl bg-[#E3EFEC] border border-[#B8D5CE] flex items-start gap-3">
              <MessageCircle className="w-5 h-5 text-[#1F5C55] shrink-0 mt-0.5" />
              <div className="text-xs text-[#16443F] leading-relaxed">
                <span className="font-bold">Cách nhận thực đơn nhanh nhất:</span> Hãy nhắn kèm theo chiều cao, cân nặng, thói quen ăn uống hằng ngày và các xét nghiệm gần nhất (nếu có) để nhận được thực đơn sát với thực tế nhất.
              </div>
            </div>
          </div>

          {/* Right Column: Capabilities & Interactive Prompts */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4.5 rounded-xl bg-[#F7F8F6] border border-[#DDE3E0] flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-[#E3EFEC] text-[#1F5C55] shrink-0">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#12211F]">Thực đơn cho người bệnh mạn tính</h4>
                  <p className="text-xs text-[#5C6B68] mt-1 leading-relaxed">
                    Đái tháo đường, tăng huyết áp, rối loạn mỡ máu, suy giảm chức năng thận, Gout và bệnh lý dạ dày.
                  </p>
                </div>
              </div>

              <div className="p-4.5 rounded-xl bg-[#F7F8F6] border border-[#DDE3E0] flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-[#E3EFEC] text-[#1F5C55] shrink-0">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#12211F]">Dinh dưỡng theo từng giai đoạn</h4>
                  <p className="text-xs text-[#5C6B68] mt-1 leading-relaxed">
                    Chăm sóc mẹ bầu, phụ nữ sau sinh, chế độ ăn dặm cho trẻ và thực đơn dễ tiêu hóa cho người lớn tuổi.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Question Prompts */}
            <div className="p-6 rounded-2xl bg-[#F7F8F6] border border-[#DDE3E0]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#1F5C55]" />
                  <h3 className="text-sm font-bold text-[#12211F]">
                    Một số câu hỏi thường gặp (Bấm vào để sao chép nhanh):
                  </h3>
                </div>
                <span className="text-[11px] text-[#5C6B68] font-medium hidden sm:inline">Sao chép 1 chạm</span>
              </div>

              <div className="space-y-2.5">
                {SAMPLE_QUESTIONS.map((question, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleCopy(question, idx)}
                    className="group flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#DDE3E0] hover:border-[#1F5C55] cursor-pointer transition-all shadow-2xs"
                  >
                    <span className="text-xs sm:text-sm text-[#12211F] leading-relaxed pr-3">
                      &ldquo;{question}&rdquo;
                    </span>
                    <button
                      type="button"
                      className="shrink-0 p-1.5 rounded-lg bg-[#F7F8F6] group-hover:bg-[#E3EFEC] text-[#5C6B68] group-hover:text-[#1F5C55] transition-colors"
                      title="Sao chép câu hỏi"
                    >
                      {copiedIndex === idx ? (
                        <Check className="w-4 h-4 text-[#1F5C55]" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Open CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-[#1F5C55] text-white shadow-sm">
              <div>
                <h4 className="font-bold text-sm">Cần gợi ý thực đơn cho bữa ăn hôm nay?</h4>
                <p className="text-xs text-[#C7DFD9] mt-0.5">Trò chuyện và nhận bảng thực đơn chi tiết dành riêng cho bạn</p>
              </div>
              <a
                href={CONSULT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#1F5C55] font-bold text-xs hover:bg-[#F7F8F6] transition-colors shrink-0 shadow-2xs"
              >
                <span>Nhận tư vấn ngay</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
