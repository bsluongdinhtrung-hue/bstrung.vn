'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import {
  X,
  Check,
  Copy,
  MessageCircle,
  QrCode,
  ShieldCheck,
  ArrowRight,
  Upload,
  Camera,
  Trash2,
  AlertCircle,
  Loader2,
  Phone,
  User,
  FileText,
} from 'lucide-react';

interface ZaloConsultModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ZaloConsultModal({ isOpen, onClose }: ZaloConsultModalProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Form states
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [note, setNote] = useState('');
  const [billImage, setBillImage] = useState<string | null>(null);
  const [imageFileName, setImageFileName] = useState<string>('');
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successRedirectUrl, setSuccessRedirectUrl] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const BANK_INFO = {
    bankName: 'VietinBank (Ngân hàng TMCP Công thương Việt Nam)',
    accountNumber: '108005198338',
    accountName: 'LUONG DINH TRUNG',
    amount: '299.000',
    content: 'Tu van Zalo BS Trung',
  };

  const QR_URL = `https://img.vietqr.io/image/vietinbank-108005198338-compact2.png?amount=299000&addInfo=Tu%20van%20Zalo%20BS%20Trung&accountName=LUONG%20DINH%20TRUNG`;

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // Client-side image resize & compression via HTML5 canvas (keeps payload ~40-60KB)
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrorMsg('Vui lòng chọn tệp hình ảnh hợp lệ (PNG, JPG, HEIC...)');
      return;
    }

    setErrorMsg(null);
    setImageFileName(file.name);

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new window.Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 800;
        const MAX_HEIGHT = 800;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.75);
          setBillImage(compressedDataUrl);
        }
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setBillImage(null);
    setImageFileName('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const cleanName = patientName.trim();
    const cleanPhone = patientPhone.trim().replace(/\s+/g, '');

    if (!cleanName) {
      setErrorMsg('Vui lòng nhập Họ và tên của bạn.');
      return;
    }

    if (!cleanPhone || !/^(0|\+84)[3|5|7|8|9][0-9]{8}$/.test(cleanPhone)) {
      setErrorMsg('Vui lòng nhập số điện thoại Zalo hợp lệ (10 chữ số).');
      return;
    }

    if (!billImage) {
      setErrorMsg('Vui lòng tải lên ảnh chụp màn hình hóa đơn chuyển khoản 299.000đ.');
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch('/api/consultation/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          patientName: cleanName,
          patientPhone: cleanPhone,
          billImage,
          note: note.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Có lỗi xảy ra khi lưu thông tin');
      }

      const zaloUrl = data.zaloUrl || 'https://zalo.me/0383745415';
      setSuccessRedirectUrl(zaloUrl);

      // Try automatic open after 800ms
      setTimeout(() => {
        window.open(zaloUrl, '_blank', 'noopener,noreferrer');
      }, 800);
    } catch (err: any) {
      setErrorMsg(err.message || 'Không thể gửi xác nhận. Vui lòng thử lại.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#12211F]/70 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Card */}
      <div className="relative w-full max-w-xl bg-white rounded-3xl border border-[#CCD9D5] shadow-2xl overflow-hidden z-10 my-6 max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#16443F] to-[#1F5C55] text-white p-5 sm:p-6 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
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
            Kênh tiếp nhận bệnh án & tư vấn phác đồ chuyên khoa trực tiếp qua Zalo.
          </p>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-5 sm:p-6 space-y-6 overflow-y-auto">

          {/* Success Screen */}
          {successRedirectUrl ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-fadeIn">
              <div className="w-14 h-14 rounded-full bg-emerald-600 text-white mx-auto flex items-center justify-center shadow-md">
                <Check className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-emerald-900">
                  Đã Tiếp Nhận Xác Nhận Chuyển Khoản!
                </h4>
                <p className="text-xs text-emerald-800 mt-1 max-w-md mx-auto leading-relaxed">
                  Thông tin và ảnh hóa đơn 299.000đ của <strong>{patientName}</strong> đã được ghi nhận. Bác sĩ Trung sẽ ưu tiên xem bệnh án và phản hồi qua Zalo.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={successRedirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#1F5C55] hover:bg-[#16443F] text-white font-bold text-sm shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-200" />
                  <span>Bấm vào đây để mở Zalo nhắn tin với Bác sĩ</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <p className="text-xs text-[#63706D]">
                (Nếu Zalo không tự mở, vui lòng bấm vào nút màu xanh ở trên)
              </p>
            </div>
          ) : (
            <>
              {/* Fee Notice */}
              <div className="p-3.5 rounded-2xl bg-[#E3EFEC] border border-[#B8D5CE] flex items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-bold text-[#16443F] uppercase block tracking-wider">Phí tư vấn chuyên môn 1-1:</span>
                  <span className="text-xs text-[#5C6B68]">BSCKI trực tiếp phân tích bệnh án, đơn thuốc & xét nghiệm</span>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-lg font-black text-[#1F5C55]">299.000 đ</span>
                  <span className="text-xs text-[#5C6B68] block">/ lượt tư vấn</span>
                </div>
              </div>

              {/* BƯỚC 1: Quét mã VietQR */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#1F5C55] text-white text-xs font-bold flex items-center justify-center">1</span>
                  <h4 className="font-bold text-sm text-[#12211F]">
                    Quét mã VietQR chuyển khoản 299.000đ
                  </h4>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-2xl bg-[#F7F8F6] border border-[#CCD9D5]">
                  {/* QR Image */}
                  <div className="relative w-44 sm:w-48 aspect-square bg-white p-2 rounded-xl border border-[#CCD9D5] shadow-xs shrink-0">
                    <Image
                      src={QR_URL}
                      alt="Mã VietQR chuyển phí tư vấn Bác sĩ Lương Đình Trung"
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>

                  {/* Account Text */}
                  <div className="space-y-1.5 text-xs text-[#12211F] w-full">
                    <div className="flex items-center justify-between py-1 border-b border-[#E3EFEC]">
                      <span className="text-[#5C6B68]">Ngân hàng:</span>
                      <span className="font-bold text-[#1F5C55]">VietinBank</span>
                    </div>

                    <div className="flex items-center justify-between py-1 border-b border-[#E3EFEC]">
                      <span className="text-[#5C6B68]">Số tài khoản:</span>
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono font-bold text-sm text-[#12211F]">{BANK_INFO.accountNumber}</span>
                        <button
                          type="button"
                          onClick={() => copyToClipboard(BANK_INFO.accountNumber, 'acc')}
                          className="min-h-9 px-2.5 py-1 rounded-md bg-[#E3EFEC] text-[#1F5C55] hover:bg-[#D4E8E3] text-xs font-bold inline-flex items-center gap-1 transition-colors cursor-pointer"
                        >
                          {copiedField === 'acc' ? <Check className="w-2.5 h-2.5 text-emerald-600" /> : <Copy className="w-2.5 h-2.5" />}
                          <span>{copiedField === 'acc' ? 'Đã chép' : 'Chép'}</span>
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between py-1 border-b border-[#E3EFEC]">
                      <span className="text-[#5C6B68]">Chủ TK:</span>
                      <span className="font-bold text-[#12211F]">{BANK_INFO.accountName}</span>
                    </div>

                    <div className="flex items-center justify-between py-1 border-b border-[#E3EFEC]">
                      <span className="text-[#5C6B68]">Số tiền:</span>
                      <span className="font-black text-[#1F5C55]">{BANK_INFO.amount} đ</span>
                    </div>

                    <div className="flex items-center justify-between py-1">
                      <span className="text-[#5C6B68]">Nội dung:</span>
                      <div className="flex items-center gap-1.5">
                        <span className="font-medium text-[#12211F]">{BANK_INFO.content}</span>
                        <button
                          type="button"
                          onClick={() => copyToClipboard(BANK_INFO.content, 'content')}
                          className="min-h-9 px-2.5 py-1 rounded-md bg-[#E3EFEC] text-[#1F5C55] hover:bg-[#D4E8E3] text-xs font-bold inline-flex items-center gap-1 transition-colors cursor-pointer"
                        >
                          {copiedField === 'content' ? <Check className="w-2.5 h-2.5 text-emerald-600" /> : <Copy className="w-2.5 h-2.5" />}
                          <span>{copiedField === 'content' ? 'Đã chép' : 'Chép'}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* BƯỚC 2: Form xác nhận & Đính kèm ảnh bill */}
              <form onSubmit={handleSubmit} className="space-y-4 pt-3 border-t border-[#E8E4DA]">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#1F5C55] text-white text-xs font-bold flex items-center justify-center">2</span>
                  <h4 className="font-bold text-sm text-[#12211F]">
                    Xác nhận chuyển khoản để mở kết nối Zalo Bác sĩ
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Patient Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#12211F] mb-1">
                      Họ và tên của bạn <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#8C9895] absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        placeholder="Ví dụ: Nguyễn Văn An"
                        className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-[#CBD5CF] bg-[#FAF9F5] focus:bg-white focus:outline-hidden focus:border-[#1F5C55] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Patient Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-[#12211F] mb-1">
                      Số điện thoại Zalo của bạn <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#8C9895] absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        value={patientPhone}
                        onChange={(e) => setPatientPhone(e.target.value)}
                        placeholder="Ví dụ: 0912345678"
                        className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-[#CBD5CF] bg-[#FAF9F5] focus:bg-white focus:outline-hidden focus:border-[#1F5C55] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Upload Bill Image */}
                <div>
                  <label className="block text-xs font-semibold text-[#12211F] mb-1">
                    Ảnh chụp màn hình biên lai chuyển khoản (Bill) <span className="text-rose-500">*</span>
                  </label>
                  
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    id="bill-upload-input"
                  />

                  {billImage ? (
                    <div className="flex items-center justify-between p-3 rounded-xl border border-emerald-300 bg-emerald-50/70">
                      <div className="flex items-center gap-3 overflow-hidden">
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-emerald-400 shrink-0 bg-white">
                          <Image
                            src={billImage}
                            alt="Ảnh bill chuyển khoản"
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                        <div className="overflow-hidden">
                          <span className="text-xs font-bold text-emerald-900 block truncate">
                            {imageFileName || 'Ảnh biên lai chuyển khoản'}
                          </span>
                          <span className="text-xs text-emerald-700 flex items-center gap-1">
                            <Check className="w-3 h-3" /> Đã tải lên và nén ảnh sẵn sàng
                          </span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={handleRemoveImage}
                        className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-100 transition-colors shrink-0 ml-2 cursor-pointer"
                        title="Xóa ảnh và chọn lại"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full flex flex-col items-center justify-center p-4 rounded-xl border-2 border-dashed border-[#CBD5CF] hover:border-[#1F5C55] bg-[#FAF9F5] hover:bg-white transition-colors cursor-pointer group"
                    >
                      <div className="w-9 h-9 rounded-full bg-[#E2EBE8] text-[#1F5C55] flex items-center justify-center mb-1.5 group-hover:scale-105 transition-transform">
                        <Camera className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-[#1F5C55]">
                        Bấm để chọn hoặc chụp ảnh màn hình chuyển khoản
                      </span>
                      <span className="text-xs text-[#8C9895] mt-0.5">
                        Hỗ trợ định dạng JPG, PNG, HEIC (Ảnh tự động tối ưu hóa)
                      </span>
                    </button>
                  )}
                </div>

                {/* Optional Note */}
                <div>
                  <label className="block text-xs font-semibold text-[#12211F] mb-1">
                    Tóm tắt câu hỏi hoặc bệnh án cần tư vấn <span className="text-[#8C9895] font-normal">(tùy chọn)</span>
                  </label>
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    rows={2}
                    placeholder="Ví dụ: Cần Bác sĩ xem giúp kết quả xét nghiệm mỡ máu và tư vấn đơn thuốc..."
                    className="w-full p-2.5 text-xs rounded-xl border border-[#CBD5CF] bg-[#FAF9F5] focus:bg-white focus:outline-hidden focus:border-[#1F5C55] transition-colors resize-none"
                  />
                </div>

                {/* Error Banner */}
                {errorMsg && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-start gap-2 animate-shake">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-2xl bg-[#1F5C55] hover:bg-[#16443F] text-white font-bold text-sm shadow-md transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-emerald-200" />
                      <span>Đang xác nhận thông tin & kết nối...</span>
                    </>
                  ) : (
                    <>
                      <MessageCircle className="w-4 h-4 text-emerald-200" />
                      <span>Xác Nhận Đã Chuyển 299.000đ & Mở Zalo Bác Sĩ</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-xs text-[#5C6B68] text-center leading-relaxed">
                  🛡️ Bác sĩ chỉ thụ lý các trường hợp đã đính kèm biên lai chuyển khoản thành công. Thông tin của bạn được cam kết bảo mật theo tiêu chuẩn y khoa.
                </p>
              </form>
            </>
          )}

        </div>

      </div>
    </div>
  );
}
