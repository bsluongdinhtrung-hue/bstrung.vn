'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useZaloConsult } from './ZaloConsultContext';

export default function FloatingZalo() {
  const { openZaloModal } = useZaloConsult();

  return (
    <aside aria-label="Kênh hỗ trợ trực tuyến" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip hint on desktop */}
      <button
        onClick={openZaloModal}
        className="hidden md:flex items-center gap-2 px-3.5 py-2 rounded-full bg-white text-[#12211F] text-xs font-bold border border-[#DDE3E0] shadow-md hover:border-[#1F5C55] transition-all group cursor-pointer"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        <span className="group-hover:text-[#1F5C55]">Tư vấn Zalo cùng Bác sĩ</span>
      </button>

      {/* Floating Action Button */}
      <button
        onClick={openZaloModal}
        className="floating-zalo flex items-center justify-center w-14 h-14 rounded-full bg-[#1F5C55] hover:bg-[#16443F] text-white shadow-xl transition-transform hover:scale-110 focus:outline-hidden cursor-pointer"
        title="Nhắn tin Zalo trực tiếp với BS. Trung"
      >
        <MessageCircle className="w-7 h-7 text-white fill-white/20" />
      </button>
    </aside>
  );
}
