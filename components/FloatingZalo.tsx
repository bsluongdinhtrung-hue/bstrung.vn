'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useZaloConsult } from './ZaloConsultContext';
import { trackClick } from '@/lib/tracker';

export default function FloatingZalo() {
  const { openZaloModal } = useZaloConsult();

  const handleOpenZalo = () => {
    trackClick('zalo-consult', 'Tư Vấn Zalo 1-1 (Nút Nổi)', 'consultation');
    openZaloModal();
  };

  return (
    <aside aria-label="Kênh hỗ trợ trực tuyến" className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-3">
      {/* Tooltip hint on desktop */}
      <button
        onClick={handleOpenZalo}
        className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-[#12211F] text-sm font-bold border border-[#E8E4DA] shadow-md hover:border-[#1F5C55] transition-all group cursor-pointer"
      >
        <span className="group-hover:text-[#1F5C55]">Tư vấn 1-1 riêng cùng Bác sĩ</span>
      </button>

      {/* Floating Action Button */}
      <button
        onClick={handleOpenZalo}
        className="floating-zalo flex items-center justify-center w-14 h-14 rounded-full bg-[#1F5C55] hover:bg-[#16443F] text-white shadow-xl transition-transform hover:scale-110 focus:outline-hidden cursor-pointer"
        title="Nhắn tin Zalo trực tiếp với BS. Trung"
        aria-label="Đặt tư vấn 1-1 qua Zalo với BS. Trung"
      >
        <MessageCircle className="w-7 h-7 text-white fill-white/20" />
      </button>
    </aside>
  );
}
