'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Apple, Sparkles, ExternalLink, Clock, Check, Copy, HelpCircle, Utensils, HeartPulse } from 'lucide-react';

const SAMPLE_QUESTIONS = [
  'Tôi bị đái tháo đường type 2 kèm tăng huyết áp, hãy gợi ý thực đơn 7 ngày phù hợp với người miền Bắc?',
  'Chế độ ăn cho phụ nữ mang thai 3 tháng giữa cần bổ sung những vi chất nào quan trọng nhất?',
  'Tra cứu hàm lượng purin trong 100g thịt bò và các loại hải sản để phòng ngừa cơn Gout cấp?',
  'Xây dựng khẩu phần ăn giảm cân an toàn cho người 70kg, cao 1m60 có mức độ vận động trung bình?',
];

export default function SectionNutrition() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  const NOTEBOOK_URL = 'https://notebooklm.google.com/notebook/45e0dc30-6972-46ce-b55d-88a02d013776';

  return (
    <section id="dinh-duong" className="py-16 bg-white border-b border-slate-200/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-100 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-3">
              <Apple className="w-3.5 h-3.5 text-emerald-600" />
              <span>Chuyên Mục Trọng Tâm Số 1</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
              Sổ Tay Dinh Dưỡng Thông Minh (AI)
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-1 max-w-2xl">
              Hệ thống trợ lý AI Dinh dưỡng được biên soạn dựa trên phác đồ và tài liệu chuyên môn, 
              hỗ trợ thiết lập thực đơn cá nhân hóa, tra cứu thành phần vi chất và chế độ ăn bệnh lý.
            </p>
          </div>

          <a
            href={NOTEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md shadow-emerald-600/20 transition-all shrink-0"
          >
            <Sparkles className="w-4 h-4 text-emerald-200" />
            <span>Mở Trợ Lý AI Dinh Dưỡng</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Bento Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Visual Book Cover & Quick Guide */}
          <div className="lg:col-span-5 space-y-6">
            <div className="group relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-50 hover:shadow-xl transition-all duration-300">
              <a href={NOTEBOOK_URL} target="_blank" rel="noopener noreferrer" className="block relative aspect-square w-full">
                <Image
                  src="/images/so-tay-dinh-duong-3.jpg"
                  alt="Sổ tay dinh dưỡng"
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-500/90 text-white text-xs font-bold mb-1">
                    Google NotebookLM AI
                  </span>
                  <p className="text-sm font-semibold text-white drop-shadow-xs">
                    Chạm vào ảnh để mở không gian hỏi đáp AI trực tiếp
                  </p>
                </div>
              </a>
            </div>

            {/* Waiting Time Notice */}
            <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 flex items-start gap-3">
              <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-900 leading-relaxed">
                <span className="font-bold">Lưu ý khi tra cứu:</span> Vì AI phân tích và đối chiếu tài liệu lâm sàng chuyên sâu, 
                hãy kiên nhẫn đợi trợ lý phản hồi khoảng <strong className="text-amber-800 underline">15 – 20 giây</strong> để nhận được câu trả lời chính xác và đầy đủ nhất.
              </div>
            </div>
          </div>

          {/* Right Column: Capabilities & Interactive Prompts */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 shrink-0">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Thực đơn theo bệnh lý</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Đái tháo đường, tim mạch, tăng huyết áp, suy thận mạn, Gout, rối loạn lipid máu.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-sky-100 text-sky-700 shrink-0">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Giai đoạn sinh lý đặc biệt</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Phụ nữ mang thai, cho con bú, trẻ nhỏ độ tuổi ăn dặm và người cao tuổi.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Question Prompts */}
            <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-emerald-600" />
                  <h3 className="text-sm font-bold text-slate-800">
                    Câu hỏi mẫu gợi ý (Sao chép và dán vào AI):
                  </h3>
                </div>
                <span className="text-[11px] text-slate-400 font-medium">Bấm để sao chép nhanh</span>
              </div>

              <div className="space-y-2.5">
                {SAMPLE_QUESTIONS.map((question, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleCopy(question, idx)}
                    className="group flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200/80 hover:border-emerald-300 hover:bg-emerald-50/30 cursor-pointer transition-all shadow-2xs"
                  >
                    <span className="text-xs sm:text-sm text-slate-700 group-hover:text-slate-900 leading-normal pr-3">
                      &ldquo;{question}&rdquo;
                    </span>
                    <button
                      type="button"
                      className="shrink-0 p-1.5 rounded-lg bg-slate-100 group-hover:bg-emerald-100 text-slate-500 group-hover:text-emerald-700 transition-colors"
                      title="Sao chép câu hỏi"
                    >
                      {copiedIndex === idx ? (
                        <Check className="w-4 h-4 text-emerald-600 animate-scale-in" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Open CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md">
              <div>
                <h4 className="font-bold text-sm">Bắt đầu tra cứu dinh dưỡng ngay</h4>
                <p className="text-xs text-emerald-100">Miễn phí hoàn toàn qua nền tảng Google NotebookLM</p>
              </div>
              <a
                href={NOTEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white text-emerald-800 font-bold text-xs hover:bg-emerald-50 transition-colors shrink-0 shadow-xs"
              >
                <span>Mở trong tab mới</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
