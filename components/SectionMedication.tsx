'use client';

import React from 'react';
import Image from 'next/image';
import { Pill, ExternalLink, ShieldAlert, CheckCircle2, ArrowRight, Clock, AlertTriangle } from 'lucide-react';

export default function SectionMedication() {
  const CONSULT_URL = 'https://notebooklm.google.com/notebook/5fd2fede-0ef7-4699-b3c6-680c4bc84618';

  return (
    <section id="thuoc" className="bg-white rounded-3xl border border-[#CCD9D5] shadow-sm hover:shadow-md transition-all duration-300 p-6 sm:p-10 md:p-12 scroll-mt-24">
      {/* Section Index Stepper */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-5 border-b border-[#CCD9D5]">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#12211F] text-white text-xs font-black tracking-wider uppercase shadow-2xs">
          <Pill className="w-3.5 h-3.5 text-amber-400" />
          <span>PHÂN VÙNG 03 / 05</span>
        </div>
        <span className="text-xs font-bold text-[#12211F] tracking-wide uppercase">
          Dược Lý Lâm Sàng & An Toàn Kê Đơn Thuốc
        </span>
      </div>

      <div>
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#DDE3E0] gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E3EFEC] border border-[#B8D5CE] text-[#1F5C55] text-xs font-bold mb-3">
              <Pill className="w-3.5 h-3.5 text-[#1F5C55]" />
              <span>Chuyên Mục Trọng Tâm Số 3 • Dược Lý Lâm Sàng</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#12211F] tracking-tight">
              Hướng Dẫn Dùng Thuốc An Toàn & Tránh Tương Tác
            </h2>
            <p className="text-[#5C6B68] text-sm sm:text-base mt-1.5 max-w-3xl leading-relaxed">
              Bạn đang dùng nhiều loại thuốc cùng lúc? Thuốc nào nên uống trước bữa ăn, thuốc nào cần uống sau ăn? 
              Tra cứu nhanh để đảm bảo hiệu quả điều trị tối ưu và phòng ngừa các tương tác bất lợi.
            </p>
          </div>

          <a
            href={CONSULT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#1F5C55] hover:bg-[#16443F] text-white font-bold text-sm shadow-sm transition-all shrink-0"
          >
            <span>Kiểm tra đơn thuốc của bạn</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Content Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-[#DDE3E0] shadow-sm bg-[#F7F8F6] group">
              <Image
                src="/images/thuoc-va-tuong-tac-thuoc-nen.png"
                alt="Hướng dẫn dùng thuốc an toàn"
                fill
                className="object-cover group-hover:scale-104 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12211F]/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-bold px-2 py-0.5 rounded-sm bg-[#1F5C55] text-white mb-1 inline-block">
                  Dược học an toàn
                </span>
                <p className="text-xs text-slate-200">
                  Biên soạn bởi BSCKI. Lương Đình Trung
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-4.5 rounded-xl bg-[#F7F8F6] border border-[#DDE3E0]">
                <div className="flex items-center gap-2 font-bold text-[#12211F] text-sm mb-1.5">
                  <ShieldAlert className="w-4 h-4 text-amber-600" />
                  <span>Cảnh Báo Tương Tác Giữa Các Thuốc</span>
                </div>
                <p className="text-xs text-[#5C6B68] leading-relaxed">
                  Nhận biết ngay những cặp thuốc không nên uống chung một lúc để tránh làm giảm tác dụng điều trị hoặc gia tăng độc tính.
                </p>
              </div>

              <div className="p-4.5 rounded-xl bg-[#F7F8F6] border border-[#DDE3E0]">
                <div className="flex items-center gap-2 font-bold text-[#12211F] text-sm mb-1.5">
                  <Clock className="w-4 h-4 text-[#1F5C55]" />
                  <span>Thời Điểm Uống Thuốc Chuẩn</span>
                </div>
                <p className="text-xs text-[#5C6B68] leading-relaxed">
                  Hướng dẫn cụ thể loại thuốc nào cần uống lúc đói, thuốc nào uống ngay sau ăn no và khoảng cách giãn cữ giữa các lần uống.
                </p>
              </div>

              <div className="p-4.5 rounded-xl bg-[#F7F8F6] border border-[#DDE3E0]">
                <div className="flex items-center gap-2 font-bold text-[#12211F] text-sm mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Lưu Ý Cho Người Cao Tuổi & Chức Năng Thận</span>
                </div>
                <p className="text-xs text-[#5C6B68] leading-relaxed">
                  Hiệu chỉnh liều phù hợp với mức lọc cầu thận (eGFR) nhằm bảo vệ gan thận khi phải điều trị thuốc kéo dài.
                </p>
              </div>

              <div className="p-4.5 rounded-xl bg-[#F7F8F6] border border-[#DDE3E0]">
                <div className="flex items-center gap-2 font-bold text-[#12211F] text-sm mb-1.5">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  <span>Tương Tác Thuốc Với Thức Ăn, Nước Uống</span>
                </div>
                <p className="text-xs text-[#5C6B68] leading-relaxed">
                  Những loại thực phẩm quen thuộc (sữa, nước chè, nước bưởi chùm, rượu bia...) cần tránh dùng kèm khi đang uống thuốc.
                </p>
              </div>

            </div>

            <div className="p-4.5 rounded-xl bg-[#E3EFEC] border border-[#B8D5CE] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-[#16443F] font-semibold text-center sm:text-left">
                Bạn muốn đối chiếu và kiểm tra độ an toàn của đơn thuốc mình đang dùng?
              </span>
              <a
                href={CONSULT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#1F5C55] hover:bg-[#16443F] text-white font-bold text-xs transition-colors shrink-0 shadow-2xs"
              >
                <span>Kiểm tra đơn thuốc ngay</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
