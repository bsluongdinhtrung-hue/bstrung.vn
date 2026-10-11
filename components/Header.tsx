'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X, Mail, MessageCircle } from 'lucide-react';
import { useZaloConsult } from './ZaloConsultContext';

const NAV_ITEMS = [
  { label: 'Tiện ích Lâm sàng & AI', href: '#tien-ich', badge: 'Hot' },
  { label: 'Sổ tay Dinh dưỡng', href: '#dinh-duong', badge: 'Thực đơn' },
  { label: 'Thuốc & Tương tác', href: '#thuoc' },
  { label: 'Chăm sóc bé', href: '#nhi-khoa' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openZaloModal } = useZaloConsult();

  return (
    <header className="sticky top-0 z-50 bg-[#F5F2EB]/95 backdrop-blur-md border-b border-[#E8E4DA] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo & Doctor Title */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 md:w-12 md:h-12 rounded-2xl overflow-hidden shadow-xs border border-[#CBD5CF] group-hover:border-[#1F5C55] transition-colors bg-white">
              <Image
                src="/images/cropped-logo-moi-1.png"
                alt="Logo BSCKI. Lương Đình Trung"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base md:text-lg font-bold font-serif text-[#12211F] group-hover:text-[#1F5C55] transition-colors tracking-tight">
                  BSCKI. Lương Đình Trung
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10.5px] font-bold bg-[#E2EBE8] text-[#1F5C55] border border-[#BDD3CC]">
                  Bác sĩ Chuyên khoa I
                </span>
              </div>
              <p className="text-xs text-[#63706D] font-medium hidden md:block">
                Cổng Y Khoa & Sổ Tay Lâm Sàng Gia Đình
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-2 text-xs md:text-sm font-semibold text-[#3D4745] hover:text-[#1F5C55] rounded-xl hover:bg-white/80 transition-all flex items-center gap-1.5"
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded-md font-bold bg-[#E2EBE8] text-[#1F5C55] border border-[#BDD3CC]">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Quick Actions (Zalo 1-1 & Mail) */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={openZaloModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-xl bg-white text-[#1F5C55] border border-[#CBD5CF] hover:bg-[#EAF0ED] transition-colors shadow-2xs cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#1F5C55]" />
              <span>Tư vấn trực tiếp 1-1</span>
            </button>
            <a
              href="mailto:bsluongdinhtrung@gmail.com"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-xl bg-[#1F5C55] hover:bg-[#16443F] text-white transition-colors shadow-2xs"
            >
              <Mail className="w-4 h-4" />
              <span>Liên hệ Bác sĩ</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#12211F] bg-white border border-[#E8E4DA] hover:bg-[#EAF0ED] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E8E4DA] bg-[#F5F2EB] px-4 pt-3 pb-6 space-y-1.5 shadow-lg">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white text-sm font-semibold text-[#12211F] border border-[#E8E4DA] hover:bg-[#EAF0ED] hover:text-[#1F5C55] transition-colors"
            >
              <span>{item.label}</span>
              {item.badge && (
                <span className="text-[10px] px-2 py-0.5 rounded-md font-bold bg-[#E2EBE8] text-[#1F5C55] border border-[#BDD3CC]">
                  {item.badge}
                </span>
              )}
            </a>
          ))}
          <div className="pt-3 border-t border-[#E8E4DA] flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openZaloModal();
              }}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-bold rounded-xl bg-white text-[#1F5C55] border border-[#CBD5CF] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Tư vấn 1-1 (Zalo)</span>
            </button>
            <a
              href="mailto:bsluongdinhtrung@gmail.com"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-bold rounded-xl bg-[#1F5C55] text-white"
            >
              <Mail className="w-4 h-4" />
              <span>Gửi Email</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
