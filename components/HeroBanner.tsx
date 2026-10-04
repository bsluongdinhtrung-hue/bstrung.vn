'use client';

import React from 'react';
import Image from 'next/image';
import { Apple, Stethoscope, ArrowRight, ShieldCheck, HeartPulse, UserCheck, Pill } from 'lucide-react';
import { useZaloConsult } from './ZaloConsultContext';

export default function HeroBanner() {
  const { openZaloModal } = useZaloConsult();
  return (
    <section className="relative overflow-hidden pt-8 pb-14 md:pt-14 md:pb-20 bg-gradient-to-b from-[#E3EFEC]/50 via-[#F7F8F6] to-[#F7F8F6] border-b border-[#DDE3E0]">
      
      {/* Decorative backdrop elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1F5C55]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-[#1F5C55]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Info */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E3EFEC] border border-[#B8D5CE] text-[#1F5C55] text-xs font-bold">
              <HeartPulse className="w-4 h-4 text-[#1F5C55]" />
              <span>Cổng Thông Tin Sức Khỏe & Phòng Khám Gia Đình</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#12211F] tracking-tight leading-tight">
              BSCKI. Lương Đình Trung
              <span className="block text-xl sm:text-2xl md:text-3xl font-bold text-[#1F5C55] mt-2">
                Đồng Hành Chăm Sóc Sức Khỏe & Thực Hành Lâm Sàng
              </span>
            </h1>

            <p className="text-[#5C6B68] text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Nơi chia sẻ các hướng dẫn y khoa chuẩn mực, thực đơn dinh dưỡng cá nhân hóa 
              và sổ tay tra cứu phác đồ điều trị bệnh lý mạn tính. Thiết thực cho người bệnh, tiện ích cho đồng nghiệp.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#dinh-duong"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#1F5C55] hover:bg-[#16443F] text-white font-bold text-sm shadow-sm transition-all"
              >
                <Apple className="w-4 h-4 text-[#C7DFD9]" />
                <span>Sổ tay Dinh dưỡng & Thực đơn</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#noi-khoa"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-[#E3EFEC]/50 text-[#12211F] font-bold text-sm border border-[#DDE3E0] shadow-xs transition-all"
              >
                <Stethoscope className="w-4 h-4 text-[#1F5C55]" />
                <span>Tra cứu Nội khoa</span>
              </a>

              <button
                onClick={openZaloModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#E3EFEC] hover:bg-[#D4E8E3] text-[#1F5C55] font-bold text-sm border border-[#B8D5CE] transition-all cursor-pointer"
              >
                <UserCheck className="w-4 h-4" />
                <span>Tư vấn trực tiếp</span>
              </button>
            </div>

            {/* Key Values */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#5C6B68] font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#1F5C55]" />
                <span>Kiến thức Y khoa chuẩn mực</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#1F5C55]" />
                <span>Thực đơn theo thể trạng từng người</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#1F5C55]" />
                <span>Tra cứu an toàn & miễn phí</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Card / Bento Feature */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-2xl bg-white p-6 shadow-md border border-[#DDE3E0] overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E3EFEC]/60 rounded-bl-full pointer-events-none" />
                
                <div className="flex items-center gap-4 pb-4 border-b border-[#DDE3E0]">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden shadow-xs border border-[#C7DFD9] shrink-0">
                    <Image
                      src="/images/cropped-logo-moi-1.png"
                      alt="Avatar BS. Trung"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#12211F] text-base">BSCKI. Lương Đình Trung</h3>
                    <p className="text-xs text-[#1F5C55] font-bold">Bác sĩ Chuyên khoa I</p>
                    <p className="text-xs text-[#5C6B68]">Tư vấn sức khỏe & Thực hành lâm sàng</p>
                  </div>
                </div>

                <div className="py-4 space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F7F8F6] border border-[#DDE3E0]">
                    <div className="p-2 rounded-lg bg-[#E3EFEC] text-[#1F5C55] shrink-0">
                      <Apple className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#12211F]">Dinh Dưỡng & Thực Đơn Khoa Học</h4>
                      <p className="text-[11px] text-[#5C6B68] mt-0.5">Xây dựng khẩu phần ăn theo từng bệnh nền, lứa tuổi và sở thích.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F7F8F6] border border-[#DDE3E0]">
                    <div className="p-2 rounded-lg bg-[#E3EFEC] text-[#1F5C55] shrink-0">
                      <Pill className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#12211F]">Hướng Dẫn Dùng Thuốc An Toàn</h4>
                      <p className="text-[11px] text-[#5C6B68] mt-0.5">Kiểm tra thời điểm uống thuốc, phòng ngừa tương tác nguy hiểm.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F7F8F6] border border-[#DDE3E0]">
                    <div className="p-2 rounded-lg bg-[#E3EFEC] text-[#1F5C55] shrink-0">
                      <Stethoscope className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#12211F]">Sổ Tay Lâm Sàng Nội Khoa</h4>
                      <p className="text-[11px] text-[#5C6B68] mt-0.5">Phác đồ chuẩn, giải thích chỉ số xét nghiệm và chăm sóc bệnh mạn tính.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={openZaloModal}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#1F5C55] hover:bg-[#16443F] text-white font-bold text-xs transition-colors shadow-2xs cursor-pointer"
                  >
                    <span>Nhắn tin tư vấn trực tiếp qua Zalo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
