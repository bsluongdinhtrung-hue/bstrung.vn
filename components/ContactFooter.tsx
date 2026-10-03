'use client';

import React from 'react';
import Image from 'next/image';
import { Mail, MessageCircle, MapPin, ShieldAlert, ArrowUp } from 'lucide-react';

export default function ContactFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="lien-he" className="bg-[#12211F] text-[#DDE3E0] pt-16 pb-12 border-t border-[#1F5C55]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Bio & Brand */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-[#C7DFD9]/40">
                <Image
                  src="/images/cropped-logo-moi-1.png"
                  alt="Logo BS. Trung"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">BSCKI. Lương Đình Trung</h3>
                <p className="text-xs text-[#9BC4BA] font-semibold">Chuyên Khoa I • Sức Khỏe Gia Đình & Lâm Sàng</p>
              </div>
            </div>

            <p className="text-xs text-[#9BC4BA] leading-relaxed max-w-sm">
              Cổng thông tin y khoa cá nhân, sổ tay hướng dẫn dinh dưỡng theo thể trạng, 
              sử dụng thuốc an toàn và chăm sóc sức khỏe ban đầu cho cộng đồng.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://zalo.me/0559148032"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1F5C55] hover:bg-[#16443F] text-white font-bold text-xs transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Nhắn tin Zalo: 0559 148 032</span>
              </a>

              <a
                href="mailto:bsluongdinhtrung@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/15 transition-colors"
              >
                <Mail className="w-4 h-4 text-[#9BC4BA]" />
                <span>Gửi Email</span>
              </a>
            </div>
          </div>

          {/* Col 2: Direct Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Kênh Tư Vấn & Trao Đổi
            </h4>
            <div className="space-y-3 text-xs text-[#DDE3E0]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#9BC4BA] shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#9BC4BA] block uppercase font-bold">Số điện thoại Zalo:</span>
                  <a href="https://zalo.me/0559148032" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#9BC4BA] transition-colors font-bold text-sm">
                    0559 148 032 (BS. Trung)
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#9BC4BA] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#9BC4BA] block uppercase font-bold">Email chính thức:</span>
                  <a href="mailto:bsluongdinhtrung@gmail.com" className="text-white hover:text-[#9BC4BA] transition-colors font-medium">
                    bsluongdinhtrung@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#9BC4BA] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#9BC4BA] block uppercase font-bold">Địa bàn:</span>
                  <span className="text-white">Hà Nội, Việt Nam</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation shortcuts */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Chuyên Mục Sức Khỏe
            </h4>
            <ul className="space-y-2 text-xs text-[#9BC4BA]">
              <li><a href="#dinh-duong" className="hover:text-white transition-colors">🌟 Sổ tay Dinh dưỡng & Thực đơn</a></li>
              <li><a href="#noi-khoa" className="hover:text-white transition-colors">🩺 Sổ tay Lâm sàng Nội khoa</a></li>
              <li><a href="#thuoc" className="hover:text-white transition-colors">💊 Hướng dẫn Dùng thuốc An toàn</a></li>
              <li><a href="#tinh-toan" className="hover:text-white transition-colors">🧮 Tính nhanh Chỉ số Sức khỏe</a></li>
              <li><a href="#nhi-khoa" className="hover:text-white transition-colors">👶 Sổ tay Chăm sóc Bé</a></li>
            </ul>
          </div>

        </div>

        {/* Medical Disclaimer */}
        <div className="py-6 border-b border-white/10 text-[11px] text-[#9BC4BA]/80 flex items-start gap-3">
          <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Lưu ý y khoa:</strong> Các thông tin, công thức và gợi ý thực đơn trên website được xây dựng nhằm mục đích cung cấp kiến thức chăm sóc sức khỏe khoa học và tham khảo chuyên môn. Trong các trường hợp bệnh lý cấp tính hoặc khi có triệu chứng bất thường, người bệnh cần đến cơ sở y tế để được bác sĩ thăm khám và chỉ định điều trị trực tiếp.
          </p>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9BC4BA]">
          <div>
            &copy; {new Date().getFullYear()} <strong>BSCKI. Lương Đình Trung</strong> • Trang thông tin y khoa & sức khỏe gia đình.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white transition-colors"
          >
            <span>Về đầu trang</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
