'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X, Mail, MessageCircle, ExternalLink } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Sổ tay Dinh dưỡng', href: '#dinh-duong', badge: 'Top 1' },
  { label: 'Sổ tay Nội khoa', href: '#noi-khoa', badge: 'Lâm sàng' },
  { label: 'Quản lý HbA1c', href: '#hba1c', badge: 'Công cụ' },
  { label: 'Thuốc & Tương tác', href: '#thuoc' },
  { label: 'Công cụ tính toán', href: '#tinh-toan' },
  { label: 'Nhi khoa', href: '#nhi-khoa' },
  { label: 'Báo cáo KBTYC', href: '#bao-cao' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo & Doctor Title */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-xl overflow-hidden shadow-xs border border-sky-100 group-hover:scale-105 transition-transform duration-200">
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
                <span className="text-base md:text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  BSCKI. Lương Đình Trung
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-sky-50 text-sky-700 border border-sky-200">
                  Y học Lâm sàng & AI
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium hidden md:block">
                Cổng thông tin & Trợ lý thực hành y khoa
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-3 py-2 text-sm font-medium text-slate-700 hover:text-sky-600 rounded-lg hover:bg-slate-50 transition-all flex items-center gap-1.5"
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full font-bold bg-amber-50 text-amber-700 border border-amber-200">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Quick Actions (Zalo & Mail) */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="https://zalo.me/0983898830"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-sky-50 text-sky-700 border border-sky-200 hover:bg-sky-100 transition-colors shadow-2xs"
            >
              <MessageCircle className="w-4 h-4 text-sky-600" />
              <span>Zalo</span>
            </a>
            <a
              href="mailto:bsluongdinhtrung@gmail.com"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-sky-600 text-white hover:bg-sky-700 transition-colors shadow-2xs shadow-sky-600/20"
            >
              <Mail className="w-4 h-4" />
              <span>Liên hệ Bác sĩ</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md px-4 pt-3 pb-6 space-y-1 shadow-lg animate-fade-in">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-800 hover:bg-sky-50 hover:text-sky-600 transition-colors"
            >
              <span>{item.label}</span>
              {item.badge && (
                <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-amber-50 text-amber-700 border border-amber-200">
                  {item.badge}
                </span>
              )}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-100 flex gap-2">
            <a
              href="https://zalo.me/0983898830"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-semibold rounded-lg bg-sky-50 text-sky-700 border border-sky-200"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Nhắn Zalo</span>
            </a>
            <a
              href="mailto:bsluongdinhtrung@gmail.com"
              className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-semibold rounded-lg bg-sky-600 text-white"
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
