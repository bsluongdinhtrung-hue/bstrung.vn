'use client';

import React from 'react';
import Image from 'next/image';
import { Stethoscope, ExternalLink, ShieldCheck, Mail, Sparkles, BookOpen, AlertCircle } from 'lucide-react';

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
    <section id="noi-khoa" className="py-16 bg-slate-50/70 border-b border-slate-200/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-200 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold mb-3">
              <Stethoscope className="w-3.5 h-3.5 text-sky-600" />
              <span>Chuyên Mục Trọng Tâm Số 2</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
              Sổ Tay Nội Khoa (Hỗ Trợ Thực Hành Lâm Sàng)
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-1 max-w-3xl">
              Hệ thống 6 phân hệ chuyên môn số hóa giúp bác sĩ và nhân viên y tế tra cứu phác đồ, 
              chỉ số xét nghiệm, thang điểm và tương tác dược lý tức thì.
            </p>
          </div>

          <a
            href="mailto:bsluongdinhtrung@gmail.com?subject=Yêu%20cầu%20kích%20hoạt%20Sổ%20tay%20Nội%20khoa"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs border border-slate-300 shadow-2xs transition-all shrink-0"
          >
            <Mail className="w-4 h-4 text-sky-600" />
            <span>Liên hệ phân quyền truy cập</span>
          </a>
        </div>

        {/* Clinical Note Callout */}
        <div className="mb-8 p-4 rounded-xl bg-blue-50 border border-blue-200/80 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-blue-900 leading-relaxed">
            <span className="font-bold">Hướng dẫn sử dụng hiệu quả:</span>
            <ul className="list-disc list-inside mt-1 space-y-0.5 text-blue-800">
              <li>Nếu cần tra cứu chức năng riêng lẻ, hãy chọn từng chuyên khoa bên dưới (AI phản hồi trong 10-20s).</li>
              <li>Nếu cần hội chẩn cho bệnh lý phức tạp hoặc đa bệnh lý, chọn <strong>&ldquo;Sổ Tay Nội Khoa Toàn Diện&rdquo;</strong> để AI tổng hợp liên chuyên khoa.</li>
              <li>Phân hệ <strong>Dinh dưỡng</strong> hiện được mở miễn phí; các phân hệ còn lại dành riêng cho đội ngũ lâm sàng nội bộ.</li>
            </ul>
          </div>
        </div>

        {/* 6 Bento Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODULES.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-lg hover:border-sky-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Preview Container */}
                <div className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden border-b border-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold shadow-xs ${
                        item.isFree
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-900/80 text-white backdrop-blur-xs'
                      }`}
                    >
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-slate-900 text-base group-hover:text-sky-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
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
                  className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-xs transition-colors ${
                    item.isFree
                      ? 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200'
                      : 'bg-slate-50 hover:bg-sky-50 text-slate-700 hover:text-sky-700 border border-slate-200 hover:border-sky-200'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{item.isFree ? 'Mở AI Miễn Phí' : 'Truy cập Notebook AI'}</span>
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
