'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X, Mail, MessageCircle } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Sổ tay Dinh dưỡng', href: '#dinh-duong', badge: 'Thực đơn' },
  { label: 'Sổ tay Nội khoa', href: '#noi-khoa', badge: 'Lâm sàng' },
  { label: 'Thuốc & Tương tác', href: '#thuoc' },
  { label: 'Công cụ tính toán', href: '#tinh-toan' },
  { label: 'Chăm sóc bé', href: '#nhi-khoa' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#DDE3E0] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo & Doctor Title */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative w-11 h-11 md:w-12 md:h-12 rounded-xl overflow-hidden shadow-xs border border-[#C7DFD9] group-hover:border-[#1F5C55] transition-colors">
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
                <span className="text-base md:text-lg font-bold text-[#12211F] group-hover:text-[#1F5C55] transition-colors tracking-tight">
                  BSCKI. Lương Đình Trung
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold bg-[#E3EFEC] text-[#1F5C55] border border-[#B8D5CE]">
                  Bác sĩ Chuyên khoa I
                </span>
              </div>
              <p className="text-xs text-[#5C6B68] font-medium hidden md:block">
                Cổng thông tin sức khỏe & Sổ tay thực hành lâm sàng
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-2 text-sm font-medium text-[#12211F] hover:text-[#1F5C55] rounded-lg hover:bg-[#E3EFEC]/60 transition-all flex items-center gap-1.5"
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="text-[10px] px-1.5 py-0.2 rounded-md font-bold bg-[#E3EFEC] text-[#1F5C55] border border-[#B8D5CE]">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Quick Actions (Zalo & Mail) */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="https://zalo.me/0559148032"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-lg bg-[#E3EFEC] text-[#1F5C55] border border-[#B8D5CE] hover:bg-[#D4E8E3] transition-colors shadow-2xs"
            >
              <MessageCircle className="w-4 h-4 text-[#1F5C55]" />
              <span>Nhắn tin Zalo</span>
            </a>
            <a
              href="mailto:bsluongdinhtrung@gmail.com"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg bg-[#1F5C55] hover:bg-[#16443F] text-white transition-colors shadow-2xs"
            >
              <Mail className="w-4 h-4" />
              <span>Liên hệ Bác sĩ</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#12211F] hover:bg-[#E3EFEC] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#DDE3E0] bg-white px-4 pt-3 pb-6 space-y-1 shadow-lg">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-[#12211F] hover:bg-[#E3EFEC] hover:text-[#1F5C55] transition-colors"
            >
              <span>{item.label}</span>
              {item.badge && (
                <span className="text-[10px] px-2 py-0.5 rounded-md font-bold bg-[#E3EFEC] text-[#1F5C55] border border-[#B8D5CE]">
                  {item.badge}
                </span>
              )}
            </a>
          ))}
          <div className="pt-4 border-t border-[#DDE3E0] flex gap-2">
            <a
              href="https://zalo.me/0559148032"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-bold rounded-lg bg-[#E3EFEC] text-[#1F5C55] border border-[#B8D5CE]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Nhắn Zalo</span>
            </a>
            <a
              href="mailto:bsluongdinhtrung@gmail.com"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-bold rounded-lg bg-[#1F5C55] text-white"
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
