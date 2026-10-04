'use client';

import React from 'react';
import {
  Stethoscope,
  ExternalLink,
  Mail,
  ArrowRight,
  BookOpen,
  FlaskConical,
  Gauge,
  Pill,
  Apple,
  Scale,
  Activity,
  AlertTriangle,
  CheckCircle2,
} from 'lucide-react';

interface MedicineModule {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  link: string;
  tag: string;
  isFree: boolean;
  icon: React.ComponentType<{ className?: string }>;
  highlights: string[];
  renderPreview: () => React.ReactNode;
}

const MODULES: MedicineModule[] = [
  {
    id: 'so-tay-full',
    code: 'MOD-01 • CLINICAL',
    title: 'Sổ Tay Nội Khoa Toàn Diện',
    subtitle: 'Tổng hợp phác đồ điều trị, chẩn đoán phân biệt & bệnh học phức tạp đa chuyên khoa',
    link: 'https://notebooklm.google.com/notebook/a9ba76b2-c822-48d0-8fbd-f305a03cad29',
    tag: 'Phác đồ BYT & Quốc tế',
    isFree: false,
    icon: Stethoscope,
    highlights: ['12+ Chuyên khoa', 'Chẩn đoán phân biệt', 'Phác đồ chuẩn hóa'],
    renderPreview: () => (
      <div className="space-y-2">
        <div className="flex items-center justify-between text-[11px] font-bold text-[#16443F] pb-1.5 border-b border-[#CCD9D5]">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            PHÁC ĐỒ CHUẨN ĐOÁN & ĐIỀU TRỊ
          </span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#16443F] text-white font-semibold">12+ KHOA</span>
        </div>
        <div className="space-y-1.5 pt-0.5 text-[11px]">
          <div className="flex items-center gap-2 bg-white/80 px-2.5 py-1.5 rounded-lg border border-[#CCD9D5]/60 shadow-2xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="font-medium text-[#12211F]">Tiêu chuẩn vàng chẩn đoán (Gold Standard)</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 px-2.5 py-1.5 rounded-lg border border-[#CCD9D5]/60 shadow-2xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="font-medium text-[#12211F]">Chẩn đoán phân biệt đa bệnh mạn tính</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 px-2.5 py-1.5 rounded-lg border border-[#CCD9D5]/60 shadow-2xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="font-medium text-[#12211F]">Chiến lược điều trị bậc thang & biến chứng</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'xet-nghiem',
    code: 'MOD-02 • LAB',
    title: 'Xét Nghiệm Thường Dùng',
    subtitle: 'Chỉ số sinh hóa, huyết học, miễn dịch, marker sinh học và biện luận ý nghĩa lâm sàng',
    link: 'https://notebooklm.google.com/notebook/3dbcddca-26c7-477a-a299-c3f482f85277',
    tag: 'Cận lâm sàng & Trị số SI',
    isFree: false,
    icon: FlaskConical,
    highlights: ['Sinh hóa & Huyết học', 'Trị số tham chiếu SI', 'Biện luận kết quả'],
    renderPreview: () => (
      <div className="space-y-2">
        <div className="flex items-center justify-between text-[11px] font-bold text-[#1F5C55] pb-1.5 border-b border-[#CCD9D5]">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#1F5C55]" />
            PHIẾU XÉT NGHIỆM THAM CHIẾU
          </span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#1F5C55] text-white font-semibold">CHUẨN SI</span>
        </div>
        <div className="space-y-1.5 pt-0.5 text-[11px]">
          <div className="flex items-center justify-between bg-white/80 px-2.5 py-1.5 rounded-lg border border-[#CCD9D5]/60 shadow-2xs">
            <span className="font-medium text-[#16443F]">Glucose máu đói</span>
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#12211F]">5.2 mmol/L</span>
              <span className="text-[9.5px] px-1.5 py-0.5 bg-emerald-100 text-emerald-800 rounded font-bold">4.1 - 5.9</span>
            </div>
          </div>
          <div className="flex items-center justify-between bg-white/80 px-2.5 py-1.5 rounded-lg border border-[#CCD9D5]/60 shadow-2xs">
            <span className="font-medium text-[#16443F]">HbA1c máu</span>
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#12211F]">6.8 %</span>
              <span className="text-[9.5px] px-1.5 py-0.5 bg-amber-100 text-amber-800 rounded font-bold">&lt; 7.0%</span>
            </div>
          </div>
          <div className="flex items-center justify-between bg-white/80 px-2.5 py-1.5 rounded-lg border border-[#CCD9D5]/60 shadow-2xs">
            <span className="font-medium text-[#16443F]">Creatinine huyết thanh</span>
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#12211F]">88 µmol/L</span>
              <span className="text-[9.5px] px-1.5 py-0.5 bg-emerald-100 text-emerald-800 rounded font-bold">eGFR 82</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'thang-diem',
    code: 'MOD-03 • SCORES',
    title: 'Công Thức & Thang Điểm',
    subtitle: 'Thang điểm tiên lượng CURB-65, Glasgow, Child-Pugh, Creatinine Cl, CHA2DS2-VASc...',
    link: 'https://notebooklm.google.com/notebook/863d113d-3014-46ae-a171-8253e3a75eee',
    tag: 'Đo lường & Phân tầng',
    isFree: false,
    icon: Gauge,
    highlights: ['CURB-65 • Glasgow', 'Child-Pugh • eGFR', 'Phân tầng nguy cơ'],
    renderPreview: () => (
      <div className="space-y-2">
        <div className="flex items-center justify-between text-[11px] font-bold text-[#0F4C47] pb-1.5 border-b border-[#CCD9D5]">
          <span className="flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-[#0F4C47]" />
            THƯỚC ĐO TIÊN LƯỢNG LÂM SÀNG
          </span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#0F4C47] text-white font-semibold">SCORES</span>
        </div>
        <div className="space-y-1.5 pt-0.5 text-[11px]">
          <div className="flex items-center justify-between bg-white/80 px-2.5 py-1.5 rounded-lg border border-[#CCD9D5]/60 shadow-2xs">
            <span className="font-medium text-[#16443F]">CURB-65 (Viêm phổi)</span>
            <span className="font-bold text-[#0F4C47] bg-[#E3EFEC] px-2 py-0.5 rounded text-[10px]">0 - 5 điểm</span>
          </div>
          <div className="flex items-center justify-between bg-white/80 px-2.5 py-1.5 rounded-lg border border-[#CCD9D5]/60 shadow-2xs">
            <span className="font-medium text-[#16443F]">Child-Pugh (Xơ gan)</span>
            <span className="font-bold text-[#0F4C47] bg-[#E3EFEC] px-2 py-0.5 rounded text-[10px]">Class A/B/C</span>
          </div>
          <div className="flex items-center justify-between bg-white/80 px-2.5 py-1.5 rounded-lg border border-[#CCD9D5]/60 shadow-2xs">
            <span className="font-medium text-[#16443F]">Lọc cầu thận CKD-EPI</span>
            <span className="font-bold text-[#0F4C47] bg-[#E3EFEC] px-2 py-0.5 rounded text-[10px]">Giai đoạn 1 - 5</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'thuoc-tuong-tac',
    code: 'MOD-04 • PHARMA',
    title: 'Thuốc & Tương Tác Thuốc',
    subtitle: 'Tra cứu dược lý lâm sàng, chỉnh liều theo chức năng gan/thận và phòng tránh tương tác',
    link: 'https://notebooklm.google.com/notebook/5fd2fede-0ef7-4699-b3c6-680c4bc84618',
    tag: 'Dược lý lâm sàng',
    isFree: false,
    icon: Pill,
    highlights: ['Cảnh báo tương tác', 'Chỉnh liều suy thận', 'Chống chỉ định'],
    renderPreview: () => (
      <div className="space-y-2">
        <div className="flex items-center justify-between text-[11px] font-bold text-[#12211F] pb-1.5 border-b border-[#CCD9D5]">
          <span className="flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
            MA TRẬN DƯỢC LÝ & AN TOÀN
          </span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500 text-white font-semibold">CẢNH BÁO</span>
        </div>
        <div className="space-y-1.5 pt-0.5 text-[11px]">
          <div className="flex items-center justify-between bg-amber-50/90 border border-amber-200 px-2.5 py-1.5 rounded-lg shadow-2xs">
            <span className="font-semibold text-amber-950">Phối hợp 2+ nhóm thuốc</span>
            <span className="font-bold text-amber-800 text-[10px]">Cảnh báo mức 2</span>
          </div>
          <div className="flex items-center justify-between bg-white/80 px-2.5 py-1.5 rounded-lg border border-[#CCD9D5]/60 shadow-2xs">
            <span className="font-medium text-[#16443F]">Chỉnh liều suy giảm chức năng thận</span>
            <span className="font-bold text-[#12211F] text-[10px]">eGFR &lt; 30 ml/p</span>
          </div>
          <div className="flex items-center justify-between bg-white/80 px-2.5 py-1.5 rounded-lg border border-[#CCD9D5]/60 shadow-2xs">
            <span className="font-medium text-[#16443F]">Thời điểm uống thuốc tối ưu</span>
            <span className="font-bold text-[#1F5C55] text-[10px]">Trước/Sau bữa ăn</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'dinh-duong-mod',
    code: 'MOD-05 • DIET',
    title: 'Sổ Tay Dinh Dưỡng',
    subtitle: 'Thực đơn mẫu cho người bệnh mạn tính, khẩu phần ăn bệnh lý và tra cứu vi chất',
    link: 'https://notebooklm.google.com/notebook/45e0dc30-6972-46ce-b55d-88a02d013776',
    tag: 'Liệu pháp Dinh dưỡng',
    isFree: true,
    icon: Apple,
    highlights: ['Thực đơn ĐTĐ & THA', 'Mâm cơm chuẩn Việt', 'Cá nhân hóa'],
    renderPreview: () => (
      <div className="space-y-2">
        <div className="flex items-center justify-between text-[11px] font-bold text-[#1B6B5D] pb-1.5 border-b border-[#CCD9D5]">
          <span className="flex items-center gap-1.5">
            <Apple className="w-3.5 h-3.5 text-[#1B6B5D]" />
            CÂN ĐỐI DƯỠNG CHẤT KHẨU PHẦN
          </span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-600 text-white font-semibold">MIỄN PHÍ</span>
        </div>
        <div className="space-y-1.5 pt-0.5 text-[11px]">
          <div className="flex items-center justify-between bg-white/80 px-2.5 py-1.5 rounded-lg border border-[#CCD9D5]/60 shadow-2xs">
            <span className="font-medium text-[#16443F]">Tinh bột chậm (Gạo lứt/Yến mạch)</span>
            <span className="font-bold text-[#12211F] text-[10px]">50 - 55% calo</span>
          </div>
          <div className="flex items-center justify-between bg-white/80 px-2.5 py-1.5 rounded-lg border border-[#CCD9D5]/60 shadow-2xs">
            <span className="font-medium text-[#16443F]">Đạm lành mạnh (Cá hấp / Thịt nạc)</span>
            <span className="font-bold text-[#12211F] text-[10px]">1.0 - 1.2 g/kg</span>
          </div>
          <div className="flex items-center justify-between bg-white/80 px-2.5 py-1.5 rounded-lg border border-[#CCD9D5]/60 shadow-2xs">
            <span className="font-medium text-[#16443F]">Giảm Natri (Muối ăn hàng ngày)</span>
            <span className="font-bold text-[#1F5C55] text-[10px]">&lt; 5g/ngày</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'gia-dau-thau',
    code: 'MOD-06 • POLICY',
    title: 'Giá & Đấu Thầu Y Tế',
    subtitle: 'Tham khảo danh mục kỹ thuật, định mức kinh tế kỹ thuật và quy định đấu thầu y tế',
    link: 'https://notebooklm.google.com/notebook/cee0719a-ca48-401b-85a6-abea4bb4f20d',
    tag: 'Quản lý Dược & BHYT',
    isFree: false,
    icon: Scale,
    highlights: ['Thông tư & Định mức', 'Danh mục kỹ thuật', 'Quy chế thầu BHYT'],
    renderPreview: () => (
      <div className="space-y-2">
        <div className="flex items-center justify-between text-[11px] font-bold text-[#1F3E3B] pb-1.5 border-b border-[#CCD9D5]">
          <span className="flex items-center gap-1.5">
            <Scale className="w-3.5 h-3.5 text-[#1F3E3B]" />
            QUẢN TRỊ DANH MỤC & ĐỊNH MỨC
          </span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-700 text-white font-semibold">BHYT</span>
        </div>
        <div className="space-y-1.5 pt-0.5 text-[11px]">
          <div className="flex items-center justify-between bg-white/80 px-2.5 py-1.5 rounded-lg border border-[#CCD9D5]/60 shadow-2xs">
            <span className="font-medium text-[#16443F]">Thông tư 22/2023/TT-BYT</span>
            <span className="font-bold text-[#12211F] text-[10px]">Giá KCB</span>
          </div>
          <div className="flex items-center justify-between bg-white/80 px-2.5 py-1.5 rounded-lg border border-[#CCD9D5]/60 shadow-2xs">
            <span className="font-medium text-[#16443F]">Định mức kinh tế - kỹ thuật</span>
            <span className="font-bold text-[#12211F] text-[10px]">Vật tư tiêu hao</span>
          </div>
          <div className="flex items-center justify-between bg-white/80 px-2.5 py-1.5 rounded-lg border border-[#CCD9D5]/60 shadow-2xs">
            <span className="font-medium text-[#16443F]">Danh mục thanh toán BHYT</span>
            <span className="font-bold text-[#1F5C55] text-[10px]">Tỷ lệ chuẩn 100%</span>
          </div>
        </div>
      </div>
    ),
  },
];

export default function SectionInternalMedicine() {
  return (
    <section id="noi-khoa" className="bg-white rounded-3xl border border-[#CCD9D5] shadow-sm hover:shadow-md transition-all duration-300 p-6 sm:p-10 md:p-12 scroll-mt-24">
      {/* Section Index Stepper */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-5 border-b border-[#D6E8E3]">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#16443F] text-white text-xs font-black tracking-wider uppercase shadow-2xs">
          <Stethoscope className="w-3.5 h-3.5" />
          <span>PHÂN VÙNG 02 / 05</span>
        </div>
        <span className="text-xs font-bold text-[#16443F] tracking-wide uppercase">
          Sổ Tay Thực Hành Lâm Sàng & Phác Đồ Bệnh Học
        </span>
      </div>

      <div>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#DDE3E0] gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E3EFEC] border border-[#B8D5CE] text-[#1F5C55] text-xs font-bold mb-3">
              <Stethoscope className="w-3.5 h-3.5 text-[#1F5C55]" />
              <span>Chuyên Mục Trọng Tâm Số 2 • Thực Hành Lâm Sàng</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#12211F] tracking-tight">
              Sổ Tay Nội Khoa Lâm Sàng
            </h2>
            <p className="text-[#5C6B68] text-sm sm:text-base mt-1.5 max-w-3xl leading-relaxed">
              Hệ thống tra cứu chuyên môn dành cho đồng nghiệp y khoa và người bệnh muốn tìm hiểu sâu về phác đồ 
              chẩn đoán, ý nghĩa các chỉ số xét nghiệm và quản lý các bệnh mạn tính phức tạp.
            </p>
          </div>

          <a
            href="mailto:bsluongdinhtrung@gmail.com?subject=Trao%20đổi%20chuyên%20môn%20Sổ%20tay%20Nội%20khoa"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#F7F8F6] hover:bg-[#E3EFEC] text-[#12211F] font-bold text-xs border border-[#CCD9D5] shadow-2xs transition-all shrink-0"
          >
            <Mail className="w-4 h-4 text-[#1F5C55]" />
            <span>Liên hệ trao đổi chuyên môn</span>
          </a>
        </div>

        {/* 6 Rich Clinical Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODULES.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                className="group bg-[#FCFDFD] rounded-2xl border border-[#CCD9D5] overflow-hidden shadow-xs hover:shadow-lg hover:border-[#1F5C55] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Rich Clinical Micro-UI Preview Banner */}
                  <div className="p-4 bg-gradient-to-br from-[#EAF2EF] via-[#F4F8F6] to-[#EAEFEB] border-b border-[#CCD9D5]">
                    {/* Top row: Code + Icon + Tag */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-white border border-[#B8D5CE] shadow-2xs flex items-center justify-center text-[#1F5C55] group-hover:scale-105 transition-transform">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#5C6B68]">
                          {item.code}
                        </span>
                      </div>
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold ${
                          item.isFree
                            ? 'bg-[#1F5C55] text-white'
                            : 'bg-white border border-[#B8D5CE] text-[#1F5C55]'
                        }`}
                      >
                        {item.tag}
                      </span>
                    </div>

                    {/* Interactive Clinical Preview Box */}
                    <div className="bg-white/90 rounded-xl p-3 border border-[#CCD9D5] shadow-2xs">
                      {item.renderPreview()}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <h3 className="font-bold text-[#12211F] text-base group-hover:text-[#1F5C55] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#5C6B68] mt-2 leading-relaxed">
                      {item.subtitle}
                    </p>

                    {/* Highlight Pills */}
                    <div className="flex flex-wrap gap-1.5 mt-3.5">
                      {item.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="inline-block px-2 py-0.5 rounded-md bg-[#F0F4F2] border border-[#CCD9D5] text-[10.5px] font-medium text-[#5C6B68]"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Footer */}
                <div className="px-5 pb-5 pt-0">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs transition-colors shadow-2xs ${
                      item.isFree
                        ? 'bg-[#1F5C55] hover:bg-[#16443F] text-white'
                        : 'bg-[#E3EFEC] hover:bg-[#D4E8E3] text-[#1F5C55] border border-[#B8D5CE]'
                    }`}
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{item.isFree ? 'Xem tài liệu miễn phí' : 'Mở sổ tay tra cứu'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
