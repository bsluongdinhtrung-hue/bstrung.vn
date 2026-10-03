'use client';

import React from 'react';
import Image from 'next/image';
import { Stethoscope, ExternalLink, Mail, ArrowRight, BookOpen } from 'lucide-react';

interface MedicineModule {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
  tag: string;
  isFree: boolean;
}

const MODULES: MedicineModule[] = [
  {
    id: 'so-tay-full',
    title: 'Sổ Tay Nội Khoa Toàn Diện',
    subtitle: 'Tổng hợp phác đồ điều trị, chẩn đoán phân biệt & bệnh học phức tạp',
    image: '/images/so-tay-full.png',
    link: 'https://notebooklm.google.com/notebook/a9ba76b2-c822-48d0-8fbd-f305a03cad29',
    tag: 'Chuyên khoa sâu',
    isFree: false,
  },
  {
    id: 'xet-nghiem',
    title: 'Xét Nghiệm Thường Dùng',
    subtitle: 'Chỉ số sinh hóa, huyết học, miễn dịch và ý nghĩa lâm sàng',
    image: '/images/Xet-nghiem-thuong-dung-nen.png',
    link: 'https://notebooklm.google.com/notebook/3dbcddca-26c7-477a-a299-c3f482f85277',
    tag: 'Cận lâm sàng',
    isFree: false,
  },
  {
    id: 'thang-diem',
    title: 'Công Thức & Thang Điểm',
    subtitle: 'Thang điểm tiên lượng CURB-65, Glasgow, Child-Pugh, Creatinine Cl...',
    image: '/images/Cong-thuc-va-thang-diem-thuong-dung-nen.png',
    link: 'https://notebooklm.google.com/notebook/863d113d-3014-46ae-a171-8253e3a75eee',
    tag: 'Đo lường Y học',
    isFree: false,
  },
  {
    id: 'thuoc-tuong-tac',
    title: 'Thuốc & Tương Tác Thuốc',
    subtitle: 'Tra cứu dược lý học, chống chỉ định và tương tác phối hợp thuốc',
    image: '/images/thuoc-va-tuong-tac-thuoc-nen.png',
    link: 'https://notebooklm.google.com/notebook/5fd2fede-0ef7-4699-b3c6-680c4bc84618',
    tag: 'Dược lý lâm sàng',
    isFree: false,
  },
  {
    id: 'dinh-duong-mod',
    title: 'Sổ Tay Dinh Dưỡng',
    subtitle: 'Thực đơn mẫu, khẩu phần ăn bệnh lý và tra cứu vi chất',
    image: '/images/so-tay-dinh-duong-3.jpg',
    link: 'https://notebooklm.google.com/notebook/45e0dc30-6972-46ce-b55d-88a02d013776',
    tag: 'Cung cấp miễn phí',
    isFree: true,
  },
  {
    id: 'gia-dau-thau',
    title: 'Giá & Đấu Thầu Y Tế',
    subtitle: 'Tham khảo danh mục kỹ thuật, định mức và quy định đấu thầu',
    image: '/images/gia-va-dau-thau-nen-1024x1008.png',
    link: 'https://notebooklm.google.com/notebook/cee0719a-ca48-401b-85a6-abea4bb4f20d',
    tag: 'Quản lý Dược - VT',
    isFree: false,
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

        {/* 6 Bento Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODULES.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl border border-[#DDE3E0] overflow-hidden shadow-xs hover:shadow-md hover:border-[#1F5C55] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-4/3 w-full bg-[#F7F8F6] overflow-hidden border-b border-[#DDE3E0]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold shadow-xs ${
                        item.isFree
                          ? 'bg-[#1F5C55] text-white'
                          : 'bg-[#12211F]/85 text-white backdrop-blur-xs'
                      }`}
                    >
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-[#12211F] text-base group-hover:text-[#1F5C55] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5C6B68] mt-2 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-5 pb-5 pt-0">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs transition-colors ${
                    item.isFree
                      ? 'bg-[#E3EFEC] hover:bg-[#D4E8E3] text-[#1F5C55] border border-[#B8D5CE]'
                      : 'bg-[#F7F8F6] hover:bg-[#E3EFEC] text-[#12211F] hover:text-[#1F5C55] border border-[#DDE3E0]'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{item.isFree ? 'Xem tài liệu miễn phí' : 'Mở sổ tay tra cứu'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
