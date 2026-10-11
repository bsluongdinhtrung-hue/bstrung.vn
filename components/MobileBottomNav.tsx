'use client';

import React from 'react';
import { Home, Sparkles, Apple, Pill, MessageCircle } from 'lucide-react';
import { useZaloConsult } from './ZaloConsultContext';

export default function MobileBottomNav() {
  const { openZaloModal } = useZaloConsult();

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#F5F2EB]/95 backdrop-blur-md border-t border-[#E8E4DA] px-2 py-1.5 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]"
    >
      <div className="max-w-md mx-auto grid grid-cols-5 gap-1">
        
        {/* Item 1: Trang chủ */}
        <a
          href="#"
          className="flex flex-col items-center justify-center py-1 rounded-xl text-[#63706D] hover:text-[#1F5C55] transition-colors"
        >
          <Home className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-semibold">Trang chủ</span>
        </a>

        {/* Item 2: Tiện ích AI */}
        <a
          href="#tien-ich"
          className="flex flex-col items-center justify-center py-1 rounded-xl text-[#63706D] hover:text-[#1F5C55] transition-colors"
        >
          <Sparkles className="w-5 h-5 mb-0.5 text-cyan-700" />
          <span className="text-[10px] font-semibold">Tiện ích AI</span>
        </a>

        {/* Item 3: Dinh dưỡng */}
        <a
          href="#dinh-duong"
          className="flex flex-col items-center justify-center py-1 rounded-xl text-[#63706D] hover:text-[#1F5C55] transition-colors"
        >
          <Apple className="w-5 h-5 mb-0.5 text-amber-700" />
          <span className="text-[10px] font-semibold">Dinh dưỡng</span>
        </a>

        {/* Item 4: Thuốc */}
        <a
          href="#thuoc"
          className="flex flex-col items-center justify-center py-1 rounded-xl text-[#63706D] hover:text-[#1F5C55] transition-colors"
        >
          <Pill className="w-5 h-5 mb-0.5 text-emerald-700" />
          <span className="text-[10px] font-semibold">Tra thuốc</span>
        </a>

        {/* Item 5: Zalo 1-1 Bác sĩ */}
        <button
          onClick={openZaloModal}
          className="flex flex-col items-center justify-center py-1 rounded-xl text-[#1F5C55] font-bold transition-transform active:scale-95 cursor-pointer"
        >
          <div className="w-6 h-6 rounded-full bg-[#1F5C55] text-white flex items-center justify-center mb-0.5 shadow-2xs">
            <MessageCircle className="w-3.5 h-3.5" />
          </div>
          <span className="text-[10px] font-bold text-[#1F5C55]">Zalo 1-1</span>
        </button>

      </div>
    </nav>
  );
}
