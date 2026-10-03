'use client';

import React, { useState } from 'react';
import { Calculator, ExternalLink, ArrowRight, Gauge, Check } from 'lucide-react';

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
    <section id="tinh-toan" className="py-16 bg-[#F7F8F6] border-b border-[#DDE3E0] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#DDE3E0] gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E3EFEC] border border-[#B8D5CE] text-[#1F5C55] text-xs font-bold mb-3">
              <Calculator className="w-3.5 h-3.5 text-[#1F5C55]" />
              <span>Chuyên Mục Trọng Tâm Số 4 • Đo Lường Lâm Sàng</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#12211F] tracking-tight">
              Tính Nhanh Chỉ Số Thể Trạng & Thang Điểm Y Học
            </h2>
            <p className="text-[#5C6B68] text-sm sm:text-base mt-1.5 max-w-3xl leading-relaxed">
              Kiểm tra nhanh chỉ số khối cơ thể (BMI) và chức năng lọc cầu thận chỉ trong 3 giây trực tiếp trên web, 
              đồng thời tra cứu các thang điểm phân tầng nguy cơ lâm sàng chuẩn mực.
            </p>
          </div>

          <a
            href={CONSULT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#1F5C55] hover:bg-[#16443F] text-white font-bold text-sm shadow-sm transition-all shrink-0"
          >
            <span>Tra cứu thang điểm nâng cao</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Interactive Live Mini-Calculator */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 border border-[#DDE3E0] shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-[#DDE3E0] mb-5">
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-[#1F5C55]" />
                <h3 className="font-bold text-[#12211F] text-sm sm:text-base">
                  Công Cụ Tính Nhanh Thể Trạng & Mức Lọc Thận
                </h3>
              </div>
              <span className="text-[11px] px-2.5 py-0.5 rounded-md font-bold bg-[#E3EFEC] text-[#1F5C55] border border-[#B8D5CE]">
                Có kết quả ngay
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-[#5C6B68] font-bold mb-1">Cân nặng (kg):</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-lg bg-[#F7F8F6] border border-[#DDE3E0] font-bold text-[#12211F] text-sm focus:outline-hidden focus:border-[#1F5C55]"
                />
              </div>

              <div>
                <label className="block text-[#5C6B68] font-bold mb-1">Chiều cao (cm):</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-lg bg-[#F7F8F6] border border-[#DDE3E0] font-bold text-[#12211F] text-sm focus:outline-hidden focus:border-[#1F5C55]"
                />
              </div>

              <div>
                <label className="block text-[#5C6B68] font-bold mb-1">Tuổi:</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-lg bg-[#F7F8F6] border border-[#DDE3E0] font-bold text-[#12211F] text-sm focus:outline-hidden focus:border-[#1F5C55]"
                />
              </div>

              <div>
                <label className="block text-[#5C6B68] font-bold mb-1">Giới tính:</label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setIsFemale(false)}
                    className={`flex-1 py-2 rounded-lg font-bold text-xs border ${!isFemale ? 'bg-[#1F5C55] text-white border-[#1F5C55]' : 'bg-[#F7F8F6] text-[#5C6B68] border-[#DDE3E0]'}`}
                  >
                    Nam
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsFemale(true)}
                    className={`flex-1 py-2 rounded-lg font-bold text-xs border ${isFemale ? 'bg-[#1F5C55] text-white border-[#1F5C55]' : 'bg-[#F7F8F6] text-[#5C6B68] border-[#DDE3E0]'}`}
                  >
                    Nữ
                  </button>
                </div>
              </div>

              <div className="col-span-2">
                <label className="block text-[#5C6B68] font-bold mb-1">Creatinine máu (µmol/L):</label>
                <input
                  type="number"
                  value={creatinine}
                  onChange={(e) => setCreatinine(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-lg bg-[#F7F8F6] border border-[#DDE3E0] font-bold text-[#12211F] text-sm focus:outline-hidden focus:border-[#1F5C55]"
                />
              </div>
            </div>

            {/* Results Output */}
            <div className="mt-5 pt-4 border-t border-[#DDE3E0] grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-[#F7F8F6] border border-[#DDE3E0]">
                <div className="text-[11px] font-bold text-[#5C6B68] uppercase">Chỉ số BMI</div>
                <div className="text-xl font-black text-[#12211F] mt-1">{bmi.toFixed(1)} kg/m²</div>
                <div className={`text-[11px] font-bold mt-1 ${getBmiStatus(bmi).color}`}>
                  {getBmiStatus(bmi).text}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F7F8F6] border border-[#DDE3E0]">
                <div className="text-[11px] font-bold text-[#5C6B68] uppercase">Thanh thải ClCr (CG)</div>
                <div className="text-xl font-black text-[#12211F] mt-1">{finalClcr.toFixed(1)} ml/phút</div>
                <div className="text-[11px] font-bold text-[#5C6B68] mt-1">
                  {finalClcr >= 90 ? 'Chức năng thận tốt' : finalClcr >= 60 ? 'Giảm nhẹ (G2)' : 'Cần chú ý giảm liều thuốc'}
                </div>
              </div>
            </div>

          </div>

          {/* Clinical Scores List */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-bold text-[#12211F] text-base">
              Hệ Thống Thang Điểm Lâm Sàng Nâng Cao
            </h3>
            <p className="text-xs text-[#5C6B68] leading-relaxed">
              Các thang điểm đối chiếu nhiều triệu chứng lâm sàng và xét nghiệm chuyên sâu, 
              hỗ trợ phân tầng nguy cơ và định hướng xử trí:
            </p>

            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-white border border-[#DDE3E0] flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-[#12211F] text-xs sm:text-sm">Thang Điểm CURB-65</h4>
                  <p className="text-[11px] text-[#5C6B68] mt-0.5">Đánh giá mức độ nặng viêm phổi cộng đồng và chỉ định theo dõi ngoại trú/nhập viện</p>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#E3EFEC] text-[#1F5C55] shrink-0">Hô hấp</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#DDE3E0] flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-[#12211F] text-xs sm:text-sm">CHA2DS2-VASc & HAS-BLED</h4>
                  <p className="text-[11px] text-[#5C6B68] mt-0.5">Đánh giá nguy cơ tắc mạch và nguy cơ xuất huyết ở bệnh nhân rung nhĩ</p>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-rose-50 text-rose-700 border border-rose-200 shrink-0">Tim mạch</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#DDE3E0] flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-[#12211F] text-xs sm:text-sm">Child-Pugh & MELD Score</h4>
                  <p className="text-[11px] text-[#5C6B68] mt-0.5">Phân độ giai đoạn xơ gan và tiên lượng bệnh lý gan mật mạn tính</p>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200 shrink-0">Tiêu hóa</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#DDE3E0] flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-[#12211F] text-xs sm:text-sm">Glasgow Coma Scale (GCS)</h4>
                  <p className="text-[11px] text-[#5C6B68] mt-0.5">Thang điểm tri giác thần kinh và đánh giá hôn mê chuẩn quốc tế</p>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#E3EFEC] text-[#1F5C55] shrink-0">Thần kinh</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={CONSULT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#E3EFEC] hover:bg-[#D4E8E3] text-[#1F5C55] font-bold text-xs border border-[#B8D5CE] transition-colors"
              >
                <span>Mở bảng tra cứu thang điểm chi tiết</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
