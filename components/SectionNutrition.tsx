'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Apple, ExternalLink, Check, Copy, HelpCircle, Utensils, HeartPulse, Sparkles, MessageCircle } from 'lucide-react';

const SAMPLE_QUESTIONS = [
  'Tôi bị đái tháo đường và tăng huyết áp, gợi ý giúp tôi thực đơn 7 ngày dễ nấu cho người miền Bắc?',
  'Phụ nữ mang thai 3 tháng giữa cần chú trọng bổ sung các nhóm thực phẩm nào để mẹ khỏe bé phát triển tốt?',
  'Chỉ số axit uric máu hơi cao, tôi nên hạn chế những món nào và nên ưu tiên các loại rau củ nào?',
  'Hướng dẫn giúp tôi chế độ ăn giảm mỡ máu, cải thiện men gan an toàn theo mâm cơm gia đình?',
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
    <section id="dinh-duong" className="bg-white rounded-3xl border border-[#E8E4DA] shadow-xs hover:shadow-md transition-all duration-300 p-6 sm:p-10 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-5 border-b border-[#E8E4DA] gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E2EBE8] border border-[#BDD3CC] text-[#1F5C55] text-xs font-bold mb-2.5">
            <Apple className="w-3.5 h-3.5 text-[#1F5C55]" />
            <span>Chuyên Mục Dinh Dưỡng • Ẩm Thực Chuẩn Y Khoa</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#12211F] tracking-tight">
            Sổ Tay Dinh Dưỡng & Thực Đơn Cá Nhân Hóa
          </h2>
          <p className="text-[#63706D] text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
            Mỗi thể trạng và bệnh nền đều cần một chế độ dinh dưỡng riêng. Bạn chỉ cần nhập độ tuổi, sở thích ăn uống 
            và bệnh lý hiện tại — Trợ lý AI sẽ gợi ý thực đơn khoa học, dễ nấu và tốt nhất cho bạn.
          </p>
        </div>

        <a
          href={CONSULT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#1F5C55] hover:bg-[#16443F] text-white font-bold text-xs sm:text-sm shadow-2xs transition-all shrink-0"
        >
          <Sparkles className="w-4 h-4 text-emerald-200" />
          <span>Hỏi AI gợi ý thực đơn riêng</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Bento Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        
        {/* Left Column: Visual Book Cover & Quick Guide */}
        <div className="lg:col-span-5 space-y-4">
          <div className="group relative rounded-2xl overflow-hidden border border-[#E8E4DA] shadow-xs bg-[#FAF9F5] hover:shadow-md transition-all duration-300">
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
                <p className="text-xs text-[#E2EBE8] mt-1 font-medium">
                  Bấm vào ảnh để hỏi Trợ lý AI thực đơn cá nhân hóa cho bạn →
                </p>
              </div>
            </a>
          </div>

          {/* Practical Note */}
          <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E8E4DA] flex items-start gap-3">
            <MessageCircle className="w-4 h-4 text-[#1F5C55] shrink-0 mt-0.5" />
            <div className="text-xs text-[#3D4745] leading-relaxed">
              <span className="font-bold text-[#1F5C55]">Mẹo nhận thực đơn nhanh:</span> Hãy gửi kèm chiều cao, cân nặng, thói quen ăn uống và bệnh nền để Trợ lý AI phân tích và đưa ra khẩu phần chuẩn xác nhất.
            </div>
          </div>
        </div>

        {/* Right Column: Capabilities & Interactive Prompts */}
        <div className="lg:col-span-7 space-y-5">
          
          {/* Feature Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E8E4DA] flex items-start gap-3">
              <div className="p-2 rounded-xl bg-white text-[#1F5C55] border border-[#CBD5CF] shrink-0">
                <Utensils className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#12211F]">Thực đơn bệnh lý mạn tính</h4>
                <p className="text-[11.5px] text-[#63706D] mt-1 leading-relaxed">
                  Đái tháo đường, tăng huyết áp, rối loạn mỡ máu, suy thận mạn, Gout và bệnh dạ dày.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E8E4DA] flex items-start gap-3">
              <div className="p-2 rounded-xl bg-white text-[#1F5C55] border border-[#CBD5CF] shrink-0">
                <HeartPulse className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#12211F]">Dinh dưỡng theo chu kỳ đời</h4>
                <p className="text-[11.5px] text-[#63706D] mt-1 leading-relaxed">
                  Chăm sóc mẹ bầu, phụ nữ sau sinh, ăn dặm cho trẻ và thực đơn dễ nuốt cho người cao tuổi.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Question Prompts */}
          <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-[#E8E4DA]">
            <div className="flex items-center justify-between mb-3.5">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#1F5C55]" />
                <h3 className="text-xs sm:text-sm font-bold text-[#12211F]">
                  Một số câu hỏi mẫu (Bấm để sao chép vào NotebookLM):
                </h3>
              </div>
              <span className="text-[10.5px] text-[#63706D] font-medium hidden sm:inline">Sao chép 1 chạm</span>
            </div>

            <div className="space-y-2">
              {SAMPLE_QUESTIONS.map((question, idx) => (
                <div
                  key={idx}
                  onClick={() => handleCopy(question, idx)}
                  className="group flex items-center justify-between p-3 rounded-xl bg-white border border-[#E8E4DA] hover:border-[#1F5C55] cursor-pointer transition-all shadow-2xs"
                >
                  <span className="text-xs text-[#12211F] leading-relaxed pr-3 font-medium">
                    &ldquo;{question}&rdquo;
                  </span>
                  <button
                    type="button"
                    className="shrink-0 p-1.5 rounded-lg bg-[#FAF9F5] group-hover:bg-[#E2EBE8] text-[#63706D] group-hover:text-[#1F5C55] transition-colors"
                    title="Sao chép câu hỏi"
                  >
                    {copiedIndex === idx ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Open CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-[#1F5C55] text-white shadow-sm">
            <div>
              <h4 className="font-bold text-sm font-serif">Cần thực đơn cho bữa ăn hôm nay?</h4>
              <p className="text-xs text-emerald-100 mt-0.5">
                Trò chuyện cùng Trợ lý AI NotebookLM được xây dựng từ dữ liệu của BS. Trung
              </p>
            </div>
            <a
              href={CONSULT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#1F5C55] font-bold text-xs hover:bg-[#FAF9F5] transition-colors shrink-0 shadow-2xs"
            >
              <span>Mở Trợ lý AI ngay</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
