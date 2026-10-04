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
  Sparkles,
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
  },
];

export default function SectionInternalMedicine() {
  return (
    <section id="noi-khoa" className="py-16 bg-[#F7F8F6] border-b border-[#DDE3E0] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-[#E3EFEC]/60 text-[#12211F] font-bold text-xs border border-[#DDE3E0] shadow-2xs transition-all shrink-0"
          >
            <Mail className="w-4 h-4 text-[#1F5C55]" />
            <span>Liên hệ trao đổi chuyên môn</span>
          </a>
        </div>

        {/* 6 Bento Grid Cards (Option 1: Modern 3D/Isometric Bento Icons) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODULES.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                className="group bg-white rounded-2xl border border-[#DDE3E0] overflow-hidden shadow-xs hover:shadow-lg hover:border-[#1F5C55] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Clean 3D Bento Header Banner */}
                  <div className="relative h-44 w-full bg-gradient-to-br from-[#E3EFEC] via-[#F4F8F7] to-[#F7F8F6] p-5 flex flex-col justify-between overflow-hidden border-b border-[#DDE3E0]">
                    {/* Decorative subtle ambient glows */}
                    <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-[#1F5C55]/10 blur-xl pointer-events-none group-hover:bg-[#1F5C55]/15 transition-colors" />
                    <div className="absolute -left-6 -bottom-6 w-20 h-20 rounded-full bg-[#1F5C55]/10 blur-lg pointer-events-none" />

                    {/* Top Row: Tag & Badge */}
                    <div className="relative z-10 flex items-center justify-between gap-2">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold shadow-2xs ${
                          item.isFree
                            ? 'bg-[#1F5C55] text-white'
                            : 'bg-white border border-[#B8D5CE] text-[#1F5C55]'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        {item.tag}
                      </span>
                      {item.isFree && (
                        <span className="px-2 py-0.5 rounded-full bg-[#E3EFEC] text-[#1F5C55] text-[10px] font-bold border border-[#B8D5CE]">
                          Miễn phí
                        </span>
                      )}
                    </div>

                    {/* Center 3D Icon Container */}
                    <div className="relative z-10 flex items-center justify-center my-auto">
                      <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-white/95 border border-[#B8D5CE] shadow-sm group-hover:shadow-md group-hover:scale-110 group-hover:border-[#1F5C55] transition-all duration-300">
                        <div className="text-[#1F5C55] group-hover:text-[#16443F] transition-colors">
                          <IconComp className="w-8 h-8" />
                        </div>
                      </div>
                    </div>

                    {/* Bottom Row: Module Code Tag */}
                    <div className="relative z-10 flex items-center justify-center">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#5C6B68]/80">
                        {item.code}
                      </span>
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
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {item.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="inline-block px-2 py-0.5 rounded-md bg-[#F7F8F6] border border-[#DDE3E0] text-[10.5px] font-medium text-[#5C6B68]"
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
