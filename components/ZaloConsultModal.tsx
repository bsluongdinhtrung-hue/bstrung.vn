'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Check, Copy, MessageCircle, QrCode, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';

interface ZaloConsultModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ZaloConsultModal({ isOpen, onClose }: ZaloConsultModalProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  if (!isOpen) return null;

  const BANK_INFO = {
    bankName: 'VietinBank (Ngân hàng TMCP Công thương Việt Nam)',
    accountNumber: '108005198338',
    accountName: 'LUONG DINH TRUNG',
    amount: '50.000',
    content: 'Tu van Zalo BS Trung',
  };

  const QR_URL = `https://img.vietqr.io/image/vietinbank-108005198338-compact2.png?amount=50000&addInfo=Tu%20van%20Zalo%20BS%20Trung&accountName=LUONG%20DINH%20TRUNG`;
  const ZALO_LINK = 'https://zalo.me/0559148032';

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#12211F]/70 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl border border-[#CCD9D5] shadow-2xl overflow-hidden z-10 my-6">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#16443F] to-[#1F5C55] text-white p-5 sm:p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Đóng cửa sổ"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/15 text-emerald-200 text-xs font-bold mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Kênh Tư Vấn Trực Tiếp 1-1</span>
          </div>

          <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
            Tư Vấn Chuyên Môn Cùng BSCKI. Lương Đình Trung
          </h3>
          <p className="text-xs text-[#E3EFEC] mt-1 leading-relaxed">
            Kênh trao đổi y khoa trực tiếp qua Zalo cùng BSCKI. Lương Đình Trung.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-5">
          
          {/* Fee Notice */}
          <div className="p-3.5 rounded-2xl bg-[#E3EFEC] border border-[#B8D5CE] flex items-center justify-between gap-3">
            <div>
              <span className="text-[11px] font-bold text-[#16443F] uppercase block tracking-wider">Phí tư vấn chuyên môn:</span>
              <span className="text-xs text-[#5C6B68]">Hỗ trợ duy trì cổng thông tin & Bác sĩ phản hồi riêng</span>
            </div>
            <div className="text-right shrink-0">
              <span className="text-lg font-black text-[#1F5C55]">50.000 đ</span>
              <span className="text-[10px] text-[#5C6B68] block">/ lượt tư vấn</span>
            </div>
          </div>

          {/* VietQR Display (100% Direct, No Ads) */}
          <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-[#F7F8F6] border border-[#CCD9D5]">
            <div className="flex items-center gap-2 text-xs font-bold text-[#1F5C55] mb-3">
              <QrCode className="w-4 h-4" />
              <span>Quét mã VietQR bằng App Ngân Hàng bất kỳ</span>
            </div>

            {/* Direct Official VietQR Image */}
            <div className="relative w-56 sm:w-64 aspect-square bg-white p-2 rounded-xl border border-[#CCD9D5] shadow-xs">
              <Image
                src={QR_URL}
                alt="Mã VietQR chuyển phí tư vấn Bác sĩ Lương Đình Trung"
                fill
                className="object-contain"
                unoptimized
              />
            </div>

            <p className="text-[11px] text-[#5C6B68] mt-2 text-center">
              Mã chuẩn Napas 24/7 • Tiền vào trực tiếp tài khoản Bác sĩ trong 2 giây • Không có quảng cáo
            </p>
          </div>

          {/* Fallback Text Information */}
          <div className="space-y-2 text-xs text-[#12211F] bg-white rounded-xl p-3 border border-[#CCD9D5]">
            <div className="flex items-center justify-between py-1 border-b border-[#E3EFEC]">
              <span className="text-[#5C6B68]">Ngân hàng:</span>
              <span className="font-bold text-[#1F5C55]">VietinBank</span>
            </div>
            
            <div className="flex items-center justify-between py-1 border-b border-[#E3EFEC]">
              <span className="text-[#5C6B68]">Số tài khoản:</span>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-sm text-[#12211F]">{BANK_INFO.accountNumber}</span>
                <button
                  onClick={() => copyToClipboard(BANK_INFO.accountNumber, 'acc')}
                  className="px-2 py-0.5 rounded bg-[#E3EFEC] text-[#1F5C55] hover:bg-[#D4E8E3] text-[10px] font-bold inline-flex items-center gap-1 transition-colors"
                >
                  {copiedField === 'acc' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedField === 'acc' ? 'Đã chép' : 'Sao chép'}</span>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between py-1 border-b border-[#E3EFEC]">
              <span className="text-[#5C6B68]">Chủ tài khoản:</span>
              <span className="font-bold text-[#12211F]">{BANK_INFO.accountName}</span>
            </div>

            <div className="flex items-center justify-between py-1">
              <span className="text-[#5C6B68]">Nội dung CK:</span>
              <div className="flex items-center gap-2">
                <span className="font-medium text-[#12211F]">{BANK_INFO.content}</span>
                <button
                  onClick={() => copyToClipboard(BANK_INFO.content, 'content')}
                  className="px-2 py-0.5 rounded bg-[#E3EFEC] text-[#1F5C55] hover:bg-[#D4E8E3] text-[10px] font-bold inline-flex items-center gap-1 transition-colors"
                >
                  {copiedField === 'content' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedField === 'content' ? 'Đã chép' : 'Sao chép'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* 2-Step Instructions */}
          <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 space-y-1">
            <span className="font-bold block text-amber-900">Quy trình kết nối tư vấn:</span>
            <p>1. Quét mã QR chuyển khoản <strong>50.000đ</strong> bằng ứng dụng ngân hàng.</p>
            <p>2. Bấm nút bên dưới để mở Zalo, gửi <strong>ảnh chụp màn hình chuyển khoản + câu hỏi</strong> cho Bác sĩ.</p>
          </div>

          {/* Primary Action Button */}
          <a
            href={ZALO_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-2xl bg-[#1F5C55] hover:bg-[#16443F] text-white font-bold text-sm shadow-md transition-all group"
          >
            <MessageCircle className="w-4 h-4 text-emerald-200" />
            <span>Tôi đã chuyển khoản — Mở Zalo nhắn tin với Bác sĩ</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <p className="text-[11px] text-[#5C6B68] text-center leading-relaxed">
            Bác sĩ sẽ ưu tiên phản hồi chu đáo ngay khi hoàn thành ca trực / ca khám. Xin cảm ơn sự đồng hành của bạn!
          </p>

        </div>

      </div>
    </div>
  );
}
