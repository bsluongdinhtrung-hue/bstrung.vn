import { NextRequest, NextResponse } from 'next/server';
import { saveConsultationRequest } from '@/lib/analytics-storage';
import { CONSULT_FEE, CONSULT_FEE_LABEL } from '@/lib/consult';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { patientName, patientPhone, billImage, note } = body;

    const trimmedName = (patientName || '').trim();
    const trimmedPhone = (patientPhone || '').trim().replace(/\s+/g, '');

    if (!trimmedName) {
      return NextResponse.json({ error: 'Vui lòng nhập họ và tên của bạn' }, { status: 400 });
    }

    // Phone validation for Vietnam (+84 or 0 + 9 digits)
    if (!trimmedPhone || !/^(0|\+84)[3|5|7|8|9][0-9]{8}$/.test(trimmedPhone)) {
      return NextResponse.json({ error: 'Số điện thoại Zalo không hợp lệ (cần 10 chữ số)' }, { status: 400 });
    }

    if (!billImage) {
      return NextResponse.json({ error: `Vui lòng đính kèm ảnh chụp màn hình bill chuyển khoản ${CONSULT_FEE_LABEL}` }, { status: 400 });
    }

    const saved = await saveConsultationRequest({
      patientName: trimmedName,
      patientPhone: trimmedPhone,
      amount: CONSULT_FEE,
      billImage,
      note: (note || '').trim(),
    });

    return NextResponse.json({
      success: true,
      message: 'Đã ghi nhận thông tin chuyển khoản thành công',
      zaloUrl: 'https://zalo.me/0383745415',
      id: saved.id,
    });
  } catch (err: any) {
    console.error('Submit consultation error:', err);
    return NextResponse.json({ error: err.message || 'Lỗi khi lưu thông tin. Vui lòng thử lại.' }, { status: 500 });
  }
}
