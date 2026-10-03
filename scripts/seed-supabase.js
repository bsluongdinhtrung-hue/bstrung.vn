const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Đọc biến môi trường từ .env.local an toàn
let supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
let supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const envPath = path.resolve(__dirname, '..', '.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (trimmed.startsWith('NEXT_PUBLIC_SUPABASE_URL=')) {
      supabaseUrl = trimmed.split('=')[1].trim();
    }
    if (trimmed.startsWith('SUPABASE_SERVICE_ROLE_KEY=')) {
      supabaseKey = trimmed.split('=')[1].trim();
    }
  });
}

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Thiếu NEXT_PUBLIC_SUPABASE_URL hoặc SUPABASE_SERVICE_ROLE_KEY trong .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const ARTICLES = [
  {
    slug: 'so-tay-dinh-duong',
    title: 'Sổ Tay Dinh Dưỡng & Thực Đơn Hằng Ngày',
    subtitle: 'Thực đơn mẫu, khẩu phần ăn bệnh lý và tra cứu hàm lượng dinh dưỡng',
    excerpt: 'Mỗi thể trạng và bệnh nền đều cần một chế độ dinh dưỡng riêng. Bác sĩ hỗ trợ xây dựng thực đơn khoa học, dễ nấu và tốt nhất cho bạn.',
    content: 'Chào mừng bạn đến với chuyên mục Dinh Dưỡng Y Khoa của BSCKI. Lương Đình Trung. Hỗ trợ thiết lập thực đơn cá nhân hóa 7 ngày cho người đái tháo đường, tăng huyết áp, mỡ máu, Gout, phụ nữ mang thai và người cao tuổi.',
    category: 'Dinh dưỡng',
    priority_order: 1,
    external_link: 'https://notebooklm.google.com/notebook/45e0dc30-6972-46ce-b55d-88a02d013776',
    image_url: '/images/so-tay-dinh-duong-3.jpg',
    badges: ['Top 1', 'Dinh dưỡng lâm sàng', 'Tư vấn miễn phí'],
    is_active: true
  },
  {
    slug: 'so-tay-noi-khoa',
    title: 'Sổ Tay Lâm Sàng Nội Khoa',
    subtitle: 'Tổng hợp phác đồ điều trị, chẩn đoán phân biệt & bệnh học phức tạp',
    excerpt: 'Hệ thống tra cứu chuyên môn dành cho đồng nghiệp y khoa và người bệnh muốn tìm hiểu sâu về phác đồ và chỉ số xét nghiệm.',
    content: 'Gồm 6 phân hệ chuyên sâu: Nội khoa tổng quát, Xét nghiệm thường dùng, Thang điểm & công thức đo lường, Thuốc & tương tác, Dinh dưỡng lâm sàng, Giá & đấu thầu y tế.',
    category: 'Nội khoa',
    priority_order: 2,
    external_link: 'https://notebooklm.google.com/notebook/a9ba76b2-c822-48d0-8fbd-f305a03cad29',
    image_url: '/images/so-tay-full.png',
    badges: ['Top 2', 'Lâm sàng', 'Chuyên khoa sâu'],
    is_active: true
  },
  {
    slug: 'thuoc-va-tuong-tac-thuoc',
    title: 'Hướng Dẫn Dùng Thuốc An Toàn & Tránh Tương Tác',
    subtitle: 'Tra cứu dược lý học, thời điểm uống thuốc, chống chỉ định và chỉnh liều suy thận',
    excerpt: 'Uống nhiều loại thuốc cùng lúc có nguy hiểm không? Thuốc nào uống trước ăn, thuốc nào sau ăn? Tra cứu ngay để phòng ngừa tương tác bất lợi.',
    content: 'Cảnh báo tương tác chống chỉ định nguy hiểm, hướng dẫn thời điểm uống thuốc chuẩn sinh học, hiệu chỉnh liều theo mức lọc cầu thận eGFR và tương tác với thức ăn đồ uống.',
    category: 'Dược lý',
    priority_order: 3,
    external_link: 'https://notebooklm.google.com/notebook/5fd2fede-0ef7-4699-b3c6-680c4bc84618',
    image_url: '/images/thuoc-va-tuong-tac-thuoc-nen.png',
    badges: ['Dược học', 'An toàn dùng thuốc'],
    is_active: true
  },
  {
    slug: 'cong-cu-tinh-toan-y-hoc',
    title: 'Tính Nhanh Chỉ Số Thể Trạng & Thang Điểm Y Học',
    subtitle: 'Tính nhanh BMI, độ thanh thải Creatinine ClCr và tra cứu thang điểm tiên lượng lâm sàng',
    excerpt: 'Kiểm tra nhanh chỉ số thể trạng và chức năng lọc thận chỉ trong 3 giây, hỗ trợ thang điểm tiên lượng CURB-65, CHA2DS2-VASc, Child-Pugh, Glasgow.',
    content: 'Bộ công cụ tính toán y học thực hành giúp lượng hóa mức độ bệnh tật và hỗ trợ ra quyết định lâm sàng nhanh chóng, chuẩn xác.',
    category: 'Đo lường',
    priority_order: 4,
    external_link: 'https://notebooklm.google.com/notebook/863d113d-3014-46ae-a171-8253e3a75eee',
    image_url: '/images/Cong-thuc-va-thang-diem-thuong-dung-nen.png',
    badges: ['Đo lường Y học', 'Tính tức thì'],
    is_active: true
  },
  {
    slug: 'cham-soc-benh-ly-tre-em',
    title: 'Sổ Tay Chăm Sóc & Điều Trị Bệnh Cho Bé',
    subtitle: 'Tính liều hạ sốt chuẩn theo cân nặng (kg), xử trí ho, tiêu chảy và phát hiện dấu hiệu nguy hiểm',
    excerpt: 'Bé bị sốt cao, ho khò khè hay rối loạn tiêu hóa? Hướng dẫn cách tính liều thuốc chuẩn theo kg và nhận biết thời điểm vàng cần đưa con đi khám.',
    content: 'Phác đồ điều trị nhi khoa thường gặp, công thức tính liều Paracetamol và Ibuprofen an toàn, hướng dẫn bù nước Oresol và chế độ ăn hồi phục cho bé.',
    category: 'Nhi khoa',
    priority_order: 5,
    external_link: 'https://notebooklm.google.com/notebook/daa19f87-43df-43d6-8c9d-6e541691a4cb',
    image_url: '/images/HD_Nhi-300x300.png',
    badges: ['Nhi khoa gia đình', 'Liều dùng theo cân nặng'],
    is_active: true
  }
];

async function seed() {
  console.log('--- ĐANG KẾT NỐI SUPABASE ĐỂ LƯU DỮ LIỆU BSTRUNG.VN ---');
  console.log('Project URL:', supabaseUrl);

  const { data, error } = await supabase.from('bstrung_articles').select('id').limit(1);

  if (error) {
    if (error.code === '42P01' || error.code === 'PGRST205') {
      console.log('⚠️ Bảng "bstrung_articles" chưa tồn tại trên Supabase!');
      console.log('👉 Vui lòng mở Supabase SQL Editor và chạy nội dung file: supabase-bstrung-schema.sql');
      return;
    }
    console.error('Lỗi truy vấn:', error);
    return;
  }

  console.log('✅ Đã kết nối bảng bstrung_articles thành công!');
  
  for (const art of ARTICLES) {
    const { error: upsertErr } = await supabase
      .from('bstrung_articles')
      .upsert(art, { onConflict: 'slug' });

    if (upsertErr) {
      console.error(`❌ Lỗi lưu bài ${art.slug}:`, upsertErr.message);
    } else {
      console.log(`✅ Đã lưu bài [${art.priority_order}]: ${art.title}`);
    }
  }

  console.log('🎉 HOÀN TẤT ĐỒNG BỘ DỮ LIỆU BSTRUNG LÊN SUPABASE!');
}

seed().catch(console.error);
