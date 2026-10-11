'use client';

import React, { useState } from 'react';
import { Calculator, ExternalLink, ArrowRight, Gauge, Sparkles } from 'lucide-react';

export default function SectionCalculators() {
  const CONSULT_URL = 'https://notebooklm.google.com/notebook/863d113d-3014-46ae-a171-8253e3a75eee';

  // Quick Calculator (BMI & eGFR Cockcroft-Gault)
  const [weight, setWeight] = useState<number>(65);
  const [height, setHeight] = useState<number>(165);
  const [age, setAge] = useState<number>(55);
  const [isFemale, setIsFemale] = useState<boolean>(false);
  const [creatinine, setCreatinine] = useState<number>(85); // µmol/L

  // BMI Calculation
  const bmi = weight / Math.pow(height / 100, 2);
  const getBmiStatus = (val: number) => {
    if (val < 18.5) return { text: 'Thiếu cân', color: 'text-amber-700', bg: 'bg-amber-50' };
    if (val < 23) return { text: 'Thể trạng cân đối (Châu Á)', color: 'text-emerald-700', bg: 'bg-emerald-50' };
    if (val < 25) return { text: 'Tiền béo phì (Thừa cân)', color: 'text-orange-700', bg: 'bg-orange-50' };
    return { text: 'Béo phì độ I', color: 'text-rose-700', bg: 'bg-rose-50' };
  };

  // eGFR (Cockcroft-Gault: ClCr = ((140 - Age) * Weight) / (72 * (Creatinine_mgdl)))
  const crMgDl = creatinine / 88.4;
  const rawClcr = ((140 - age) * weight) / (72 * crMgDl);
  const finalClcr = isFemale ? rawClcr * 0.85 : rawClcr;

  return (
    <section id="tinh-toan" className="bg-white rounded-3xl border border-[#E8E4DA] shadow-xs hover:shadow-md transition-all duration-300 p-6 sm:p-10 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-5 border-b border-[#E8E4DA] gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E2EBE8] border border-[#BDD3CC] text-[#1F5C55] text-xs font-bold mb-2.5">
            <Calculator className="w-3.5 h-3.5 text-[#1F5C55]" />
            <span>Công Cụ Đo Lường • Tính Nhanh Thể Trạng Lâm Sàng</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#12211F] tracking-tight">
            Tính Nhanh Chỉ Số Thể Trạng & Thang Điểm Y Học
          </h2>
          <p className="text-[#63706D] text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
            Kiểm tra ngay chỉ số khối cơ thể (BMI) và chức năng lọc cầu thận (eGFR) trực tiếp trên trang,
            đồng thời tra cứu các thang điểm tiên lượng lâm sàng chuyên sâu.
          </p>
        </div>

        <a
          href={CONSULT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#1F5C55] hover:bg-[#16443F] text-white font-bold text-xs sm:text-sm shadow-2xs transition-all shrink-0"
        >
          <Sparkles className="w-4 h-4 text-emerald-200" />
          <span>Hỏi AI tra cứu thang điểm nâng cao</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        
        {/* Interactive Live Mini-Calculator */}
        <div className="lg:col-span-6 bg-[#FAF9F5] rounded-2xl p-5 sm:p-6 border border-[#E8E4DA]">
          <div className="flex items-center justify-between pb-3.5 border-b border-[#E8E4DA] mb-4">
            <div className="flex items-center gap-2">
              <Gauge className="w-4 h-4 text-[#1F5C55]" />
              <h3 className="font-bold text-[#12211F] text-sm sm:text-base">
                Công Cụ Tính Nhanh Thể Trạng & Mức Lọc Thận
              </h3>
            </div>
            <span className="text-[10.5px] px-2.5 py-0.5 rounded-md font-bold bg-white text-[#1F5C55] border border-[#CBD5CF]">
              Kết quả tức thì
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3.5 text-xs">
            <div>
              <label className="block text-[#63706D] font-bold mb-1">Cân nặng (kg):</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl bg-white border border-[#CBD5CF] font-bold text-[#12211F] text-sm focus:outline-hidden focus:border-[#1F5C55]"
              />
            </div>

            <div>
              <label className="block text-[#63706D] font-bold mb-1">Chiều cao (cm):</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl bg-white border border-[#CBD5CF] font-bold text-[#12211F] text-sm focus:outline-hidden focus:border-[#1F5C55]"
              />
            </div>

            <div>
              <label className="block text-[#63706D] font-bold mb-1">Tuổi (năm):</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl bg-white border border-[#CBD5CF] font-bold text-[#12211F] text-sm focus:outline-hidden focus:border-[#1F5C55]"
              />
            </div>

            <div>
              <label className="block text-[#63706D] font-bold mb-1">Creatinine máu (µmol/L):</label>
              <input
                type="number"
                value={creatinine}
                onChange={(e) => setCreatinine(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl bg-white border border-[#CBD5CF] font-bold text-[#12211F] text-sm focus:outline-hidden focus:border-[#1F5C55]"
              />
            </div>

            <div className="col-span-2 flex items-center gap-3 pt-1">
              <span className="text-[#63706D] font-bold">Giới tính:</span>
              <button
                type="button"
                onClick={() => setIsFemale(false)}
                className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-colors ${
                  !isFemale ? 'bg-[#1F5C55] text-white' : 'bg-white text-[#63706D] border border-[#CBD5CF]'
                }`}
              >
                Nam
              </button>
              <button
                type="button"
                onClick={() => setIsFemale(true)}
                className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-colors ${
                  isFemale ? 'bg-[#1F5C55] text-white' : 'bg-white text-[#63706D] border border-[#CBD5CF]'
                }`}
              >
                Nữ
              </button>
            </div>
          </div>

          {/* Results Output */}
          <div className="mt-4 pt-4 border-t border-[#E8E4DA] grid grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-white border border-[#E8E4DA]">
              <div className="text-[10.5px] font-bold text-[#63706D] uppercase">Chỉ số BMI</div>
              <div className="text-xl font-bold font-serif text-[#12211F] mt-1">{bmi.toFixed(1)} kg/m²</div>
              <div className={`text-[11px] font-bold mt-1 ${getBmiStatus(bmi).color}`}>
                {getBmiStatus(bmi).text}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-[#E8E4DA]">
              <div className="text-[10.5px] font-bold text-[#63706D] uppercase">Thanh thải ClCr (CG)</div>
              <div className="text-xl font-bold font-serif text-[#12211F] mt-1">{finalClcr.toFixed(1)} ml/phút</div>
              <div className="text-[11px] font-bold text-[#63706D] mt-1">
                {finalClcr >= 90 ? 'Chức năng thận tốt' : finalClcr >= 60 ? 'Giảm nhẹ (G2)' : 'Cần chú ý giảm liều thuốc'}
              </div>
            </div>
          </div>

        </div>

        {/* Clinical Scores List */}
        <div className="lg:col-span-6 space-y-3.5">
          <h3 className="font-bold text-[#12211F] text-base">
            Hệ Thống Thang Điểm Tiên Lượng Lâm Sàng Thường Dùng
          </h3>
          <p className="text-xs text-[#63706D] leading-relaxed">
            Các thang điểm đối chiếu triệu chứng lâm sàng và xét nghiệm chuyên sâu, hỗ trợ phân tầng nguy cơ và quyết định hướng điều trị:
          </p>

          <div className="space-y-2.5">
            <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#E8E4DA] flex items-start justify-between gap-3">
              <div>
                <h4 className="font-bold text-[#12211F] text-xs sm:text-sm">Thang Điểm CURB-65 (Hô hấp)</h4>
                <p className="text-[11px] text-[#63706D] mt-0.5">Đánh giá mức độ nặng viêm phổi cộng đồng và chỉ định điều trị ngoại trú/nhập viện</p>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white text-[#1F5C55] border border-[#CBD5CF] shrink-0">Hô hấp</span>
            </div>

            <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#E8E4DA] flex items-start justify-between gap-3">
              <div>
                <h4 className="font-bold text-[#12211F] text-xs sm:text-sm">CHA2DS2-VASc & HAS-BLED (Tim mạch)</h4>
                <p className="text-[11px] text-[#63706D] mt-0.5">Đánh giá nguy cơ tắc mạch và xuất huyết khi dùng chống đông ở bệnh nhân rung nhĩ</p>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-rose-50 text-rose-700 border border-rose-200 shrink-0">Tim mạch</span>
            </div>

            <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#E8E4DA] flex items-start justify-between gap-3">
              <div>
                <h4 className="font-bold text-[#12211F] text-xs sm:text-sm">Child-Pugh & MELD Score (Tiêu hóa)</h4>
                <p className="text-[11px] text-[#63706D] mt-0.5">Phân độ xơ gan, đánh giá chức năng gan mạn tính và tiên lượng sinh tồn</p>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200 shrink-0">Tiêu hóa</span>
            </div>

            <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#E8E4DA] flex items-start justify-between gap-3">
              <div>
                <h4 className="font-bold text-[#12211F] text-xs sm:text-sm">Glasgow Coma Scale (GCS - Thần kinh)</h4>
                <p className="text-[11px] text-[#63706D] mt-0.5">Thang điểm tri giác thần kinh và đánh giá mức độ hôn mê chuẩn mực</p>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-200 shrink-0">Thần kinh</span>
            </div>
          </div>

          <div className="pt-1">
            <a
              href={CONSULT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#FAF9F5] hover:bg-[#EFECE5] text-[#1F5C55] font-bold text-xs border border-[#CBD5CF] transition-colors"
            >
              <span>Hỏi Trợ lý AI chi tiết cách tính các thang điểm</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
