'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingZalo() {
  return (
    <aside aria-label="Kênh hỗ trợ trực tuyến" className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip hint on desktop */}
      <a
        href="https://zalo.me/0559148032"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex items-center gap-2 px-3.5 py-2 rounded-full bg-white text-[#12211F] text-xs font-bold border border-[#DDE3E0] shadow-md hover:border-[#1F5C55] transition-all group"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        <span className="group-hover:text-[#1F5C55]">Tư vấn Zalo cùng Bác sĩ</span>
      </a>

      {/* Floating Action Button */}
      <a
        href="https://zalo.me/0559148032"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-zalo flex items-center justify-center w-14 h-14 rounded-full bg-[#1F5C55] hover:bg-[#16443F] text-white shadow-xl transition-transform hover:scale-110 focus:outline-hidden"
        title="Nhắn tin Zalo trực tiếp với BS. Trung"
      >
        <MessageCircle className="w-7 h-7 text-white fill-white/20" />
      </a>
    </aside>
  );
}
