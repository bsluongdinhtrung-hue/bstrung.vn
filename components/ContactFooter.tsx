'use client';

import React from 'react';
import Image from 'next/image';
import { Mail, MessageCircle, Phone, MapPin, ShieldAlert, Heart, ArrowUp } from 'lucide-react';

export default function ContactFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="lien-he" className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Bio & Brand */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-sky-400/40">
                <Image
                  src="/images/cropped-logo-moi-1.png"
                  alt="Logo BS. Trung"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">BSCKI. Lương Đình Trung</h3>
                <p className="text-xs text-sky-400 font-semibold">Chuyên Khoa I • Thực Hành Y Khoa & AI</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Trang thông tin y khoa, sổ tay thực hành lâm sàng, dinh dưỡng cá nhân hóa, 
              quản lý đái tháo đường và công cụ đo lường y học phục vụ bác sĩ và cộng đồng người bệnh.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://zalo.me/0983898830"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Nhắn tin qua Zalo</span>
              </a>

              <a
                href="mailto:bsluongdinhtrung@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>Gửi Thư Điện Tử</span>
              </a>
            </div>
          </div>

          {/* Col 2: Direct Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Kênh Trao Đổi Chuyên Môn
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-sky-400 shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase">Email chính thức:</span>
                  <a href="mailto:bsluongdinhtrung@gmail.com" className="text-slate-200 hover:text-sky-400 transition-colors font-medium">
                    bsluongdinhtrung@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageCircle className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase">Hỗ trợ Zalo:</span>
                  <a href="https://zalo.me/0983898830" target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-emerald-400 transition-colors font-medium">
                    0983 898 830 (BS. Trung)
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-amber-400 shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase">Địa điểm:</span>
                  <span className="text-slate-300">Hà Nội, Việt Nam</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation shortcuts */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Liên Kết Nhanh
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><a href="#dinh-duong" className="hover:text-sky-400 transition-colors">🌟 Sổ tay Dinh dưỡng</a></li>
              <li><a href="#noi-khoa" className="hover:text-sky-400 transition-colors">🩺 Sổ tay Nội khoa</a></li>
              <li><a href="#hba1c" className="hover:text-sky-400 transition-colors">🩸 Bảng Quản lý HbA1c</a></li>
              <li><a href="#thuoc" className="hover:text-sky-400 transition-colors">💊 Hướng dẫn thuốc & Tương tác</a></li>
              <li><a href="#tinh-toan" className="hover:text-sky-400 transition-colors">🧮 Công cụ tính toán Y học</a></li>
              <li><a href="#nhi-khoa" className="hover:text-sky-400 transition-colors">👶 Bệnh lý Trẻ em</a></li>
              <li><a href="#bao-cao" className="hover:text-sky-400 transition-colors">📊 Báo cáo KBTYC</a></li>
            </ul>
          </div>

        </div>

        {/* Medical Disclaimer */}
        <div className="py-6 border-b border-slate-800 text-[11px] text-slate-500 flex items-start gap-3">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Miễn trừ trách nhiệm y khoa:</strong> Các thông tin, thang điểm và gợi ý từ trợ lý AI trên website 
            được thiết kế cho mục đích tham khảo thực hành lâm sàng và học tập chuyên môn. Bệnh nhân không được tự ý chẩn đoán 
            hoặc thay đổi phác đồ điều trị nếu chưa có chỉ định trực tiếp từ bác sĩ chuyên khoa thăm khám.
          </p>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} <strong>BSCKI. Lương Đình Trung</strong> • Bản quyền thuộc về bstrung.vn.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            <span>Về đầu trang</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
