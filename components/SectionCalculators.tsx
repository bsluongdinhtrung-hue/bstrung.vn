'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Calculator, Sparkles, ExternalLink, ArrowRight, Gauge, Check } from 'lucide-react';

export default function SectionCalculators() {
  const NOTEBOOK_URL = 'https://notebooklm.google.com/notebook/863d113d-3014-46ae-a171-8253e3a75eee';

  // Quick Calculator (BMI & eGFR Cockcroft-Gault)
  const [weight, setWeight] = useState<number>(65);
  const [height, setHeight] = useState<number>(165);
  const [age, setAge] = useState<number>(55);
  const [isFemale, setIsFemale] = useState<boolean>(false);
  const [creatinine, setCreatinine] = useState<number>(85); // µmol/L

  // BMI Calculation
  const bmi = weight / Math.pow(height / 100, 2);
  const getBmiStatus = (val: number) => {
    if (val < 18.5) return { text: 'Thiếu cân', color: 'text-amber-600', bg: 'bg-amber-50' };
    if (val < 23) return { text: 'Bình thường (Châu Á)', color: 'text-emerald-600', bg: 'bg-emerald-50' };
    if (val < 25) return { text: 'Tiền béo phì', color: 'text-orange-600', bg: 'bg-orange-50' };
    return { text: 'Béo phì', color: 'text-red-600', bg: 'bg-red-50' };
  };

  // eGFR (Cockcroft-Gault: ClCr = ((140 - Age) * Weight) / (72 * (Creatinine_mgdl)))
  // Creatinine in mg/dL = creatinine_umol / 88.4
  const crMgDl = creatinine / 88.4;
  const rawClcr = ((140 - age) * weight) / (72 * crMgDl);
  const finalClcr = isFemale ? rawClcr * 0.85 : rawClcr;

  return (
    <section id="tinh-toan" className="py-16 bg-white border-b border-slate-200/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-100 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold mb-3">
              <Calculator className="w-3.5 h-3.5 text-cyan-600" />
              <span>Chuyên Mục Trọng Tâm Số 5 • Đo Lường Lâm Sàng</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
              Các Công Cụ Tính Toán & Đo Lường Y Học
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-1 max-w-2xl">
              Hệ thống trợ lý tính toán thang điểm lâm sàng (CURB-65, CHA2DS2-VASc, Child-Pugh, Glasgow) 
              và bộ công cụ tính nhanh chỉ số sinh trắc học trực tiếp trên web.
            </p>
          </div>

          <a
            href={NOTEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-semibold text-sm shadow-md shadow-cyan-600/20 transition-all shrink-0"
          >
            <Sparkles className="w-4 h-4 text-cyan-200" />
            <span>Mở Trợ Lý Thang Điểm AI</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Interactive Live Mini-Calculator */}
          <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-5">
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-cyan-600" />
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  Công Cụ Tính Nhanh Chỉ Số Sinh Trắc (Trực Tuyến)
                </h3>
              </div>
              <span className="text-[11px] px-2 py-0.5 rounded-md font-bold bg-cyan-100 text-cyan-800">
                Tính Tức Thì
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-slate-600 font-semibold mb-1">Cân nặng (kg):</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 font-bold text-slate-900 text-sm"
                />
              </div>

              <div>
                <label className="block text-slate-600 font-semibold mb-1">Chiều cao (cm):</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 font-bold text-slate-900 text-sm"
                />
              </div>

              <div>
                <label className="block text-slate-600 font-semibold mb-1">Tuổi:</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 font-bold text-slate-900 text-sm"
                />
              </div>

              <div>
                <label className="block text-slate-600 font-semibold mb-1">Giới tính:</label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setIsFemale(false)}
                    className={`flex-1 py-2 rounded-lg font-bold text-xs border ${!isFemale ? 'bg-cyan-600 text-white border-cyan-600' : 'bg-white text-slate-600 border-slate-200'}`}
                  >
                    Nam
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsFemale(true)}
                    className={`flex-1 py-2 rounded-lg font-bold text-xs border ${isFemale ? 'bg-cyan-600 text-white border-cyan-600' : 'bg-white text-slate-600 border-slate-200'}`}
                  >
                    Nữ
                  </button>
                </div>
              </div>

              <div className="col-span-2">
                <label className="block text-slate-600 font-semibold mb-1">Creatinine máu (µmol/L):</label>
                <input
                  type="number"
                  value={creatinine}
                  onChange={(e) => setCreatinine(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 font-bold text-slate-900 text-sm"
                />
              </div>
            </div>

            {/* Results Output */}
            <div className="mt-5 pt-4 border-t border-slate-200 grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="text-[11px] font-semibold text-slate-500 uppercase">Chỉ số BMI</div>
                <div className="text-xl font-black text-slate-900 mt-1">{bmi.toFixed(1)} kg/m²</div>
                <div className={`text-[11px] font-bold mt-1 ${getBmiStatus(bmi).color}`}>
                  {getBmiStatus(bmi).text}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="text-[11px] font-semibold text-slate-500 uppercase">Thanh thải ClCr (CG)</div>
                <div className="text-xl font-black text-slate-900 mt-1">{finalClcr.toFixed(1)} ml/phút</div>
                <div className="text-[11px] font-bold text-slate-500 mt-1">
                  {finalClcr >= 90 ? 'Chức năng thận BT' : finalClcr >= 60 ? 'Giảm nhẹ (G2)' : 'Giảm vừa-nặng'}
                </div>
              </div>
            </div>

          </div>

          {/* AI Clinical Scores List */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-bold text-slate-900 text-base">
              Hệ Thống Thang Điểm Lâm Sàng Phức Tạp (Qua AI)
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Các thang điểm cần đối chiếu nhiều tiêu chuẩn triệu chứng và biến số phức tạp, 
              được hỗ trợ tính toán và phân tầng nguy cơ tự động qua Google NotebookLM:
            </p>

            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-slate-800 text-xs sm:text-sm">CURB-65 & PSI</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Đánh giá mức độ nặng và chỉ định nhập viện viêm phổi cộng đồng</p>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-sm bg-sky-100 text-sky-700 shrink-0">Hô hấp</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-slate-800 text-xs sm:text-sm">CHA2DS2-VASc & HAS-BLED</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Nguy cơ đột quỵ tắc mạch và nguy cơ xuất huyết ở bệnh nhân rung nhĩ</p>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-sm bg-red-100 text-red-700 shrink-0">Tim mạch</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-slate-800 text-xs sm:text-sm">Child-Pugh & MELD Score</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Đánh giá mức độ suy gan và tiên lượng bệnh gan giai đoạn cuối</p>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-sm bg-amber-100 text-amber-700 shrink-0">Tiêu hóa</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-slate-800 text-xs sm:text-sm">Glasgow Coma Scale (GCS)</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Đánh giá mức độ tri giác và hôn mê trong cấp cứu thần kinh</p>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-sm bg-purple-100 text-purple-700 shrink-0">Thần kinh</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={NOTEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-cyan-50 hover:bg-cyan-100 text-cyan-700 font-semibold text-xs border border-cyan-200 transition-colors"
              >
                <span>Hỏi đáp và tính điểm tự động bằng AI</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
