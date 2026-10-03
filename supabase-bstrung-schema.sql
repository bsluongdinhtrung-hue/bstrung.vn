-- ====================================================================
-- SCHEMA CƠ SỞ DỮ LIỆU BSTRUNG.VN TRÊN SUPABASE (POSTGRESQL)
-- Chú ý: Bảng có tiền tố bstrung_ để hoàn toàn tách biệt khỏi các dự án khác (iso_*)
-- ====================================================================

CREATE TABLE IF NOT EXISTS public.bstrung_articles (
    id SERIAL PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    subtitle TEXT,
    excerpt TEXT,
    content TEXT,
    category TEXT NOT NULL,
    priority_order INTEGER NOT NULL DEFAULT 1,
    external_link TEXT,
    image_url TEXT,
    badges TEXT[] DEFAULT '{}',
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Bật bảo mật Row Level Security (RLS)
ALTER TABLE public.bstrung_articles ENABLE ROW LEVEL SECURITY;

-- Cho phép người dùng web đọc công khai các bài viết đang kích hoạt
DROP POLICY IF EXISTS "Cho phép đọc bài viết bstrung công khai" ON public.bstrung_articles;
CREATE POLICY "Cho phép đọc bài viết bstrung công khai" 
ON public.bstrung_articles FOR SELECT 
USING (is_active = true);

-- Cho phép Service Role có toàn quyền quản trị
DROP POLICY IF EXISTS "Toàn quyền quản trị bài viết bstrung" ON public.bstrung_articles;
CREATE POLICY "Toàn quyền quản trị bài viết bstrung" 
ON public.bstrung_articles FOR ALL 
USING (true);

-- ====================================================================
-- DỮ LIỆU KHỞI TẠO 5 CHUYÊN MỤC TRỌNG TÂM CỦA BS. LƯƠNG ĐÌNH TRUNG
-- ====================================================================

INSERT INTO public.bstrung_articles (
    slug, title, subtitle, excerpt, content, category, priority_order, external_link, image_url, badges, is_active
) VALUES 
(
    'so-tay-dinh-duong',
    'Sổ Tay Dinh Dưỡng & Thực Đơn Hằng Ngày',
    'Thực đơn mẫu, khẩu phần ăn bệnh lý và tra cứu hàm lượng dinh dưỡng',
    'Mỗi thể trạng và bệnh nền đều cần một chế độ dinh dưỡng riêng. Bác sĩ hỗ trợ xây dựng thực đơn khoa học, dễ nấu và tốt nhất cho bạn.',
    'Chào mừng bạn đến với chuyên mục Dinh Dưỡng Y Khoa của BSCKI. Lương Đình Trung. Hỗ trợ thiết lập thực đơn cá nhân hóa 7 ngày cho người đái tháo đường, tăng huyết áp, mỡ máu, Gout, phụ nữ mang thai và người cao tuổi.',
    'Dinh dưỡng',
    1,
    'https://notebooklm.google.com/notebook/45e0dc30-6972-46ce-b55d-88a02d013776',
    '/images/so-tay-dinh-duong-3.jpg',
    ARRAY['Top 1', 'Dinh dưỡng lâm sàng', 'Tư vấn miễn phí'],
    true
),
(
    'so-tay-noi-khoa',
    'Sổ Tay Lâm Sàng Nội Khoa',
    'Tổng hợp phác đồ điều trị, chẩn đoán phân biệt & bệnh học phức tạp',
    'Hệ thống tra cứu chuyên môn dành cho đồng nghiệp y khoa và người bệnh muốn tìm hiểu sâu về phác đồ và chỉ số xét nghiệm.',
    'Gồm 6 phân hệ chuyên sâu: Nội khoa tổng quát, Xét nghiệm thường dùng, Thang điểm & công thức đo lường, Thuốc & tương tác, Dinh dưỡng lâm sàng, Giá & đấu thầu y tế.',
    'Nội khoa',
    2,
    'https://notebooklm.google.com/notebook/a9ba76b2-c822-48d0-8fbd-f305a03cad29',
    '/images/so-tay-full.png',
    ARRAY['Top 2', 'Lâm sàng', 'Chuyên khoa sâu'],
    true
),
(
    'thuoc-va-tuong-tac-thuoc',
    'Hướng Dẫn Dùng Thuốc An Toàn & Tránh Tương Tác',
    'Tra cứu dược lý học, thời điểm uống thuốc, chống chỉ định và chỉnh liều suy thận',
    'Uống nhiều loại thuốc cùng lúc có nguy hiểm không? Thuốc nào uống trước ăn, thuốc nào sau ăn? Tra cứu ngay để phòng ngừa tương tác bất lợi.',
    'Cảnh báo tương tác chống chỉ định nguy hiểm, hướng dẫn thời điểm uống thuốc chuẩn sinh học, hiệu chỉnh liều theo mức lọc cầu thận eGFR và tương tác với thức ăn đồ uống.',
    'Dược lý',
    3,
    'https://notebooklm.google.com/notebook/5fd2fede-0ef7-4699-b3c6-680c4bc84618',
    '/images/thuoc-va-tuong-tac-thuoc-nen.png',
    ARRAY['Dược học', 'An toàn dùng thuốc'],
    true
),
(
    'cong-cu-tinh-toan-y-hoc',
    'Tính Nhanh Chỉ Số Thể Trạng & Thang Điểm Y Học',
    'Tính nhanh BMI, độ thanh thải Creatinine ClCr và tra cứu thang điểm tiên lượng lâm sàng',
    'Kiểm tra nhanh chỉ số thể trạng và chức năng lọc thận chỉ trong 3 giây, hỗ trợ thang điểm tiên lượng CURB-65, CHA2DS2-VASc, Child-Pugh, Glasgow.',
    'Bộ công cụ tính toán y học thực hành giúp lượng hóa mức độ bệnh tật và hỗ trợ ra quyết định lâm sàng nhanh chóng, chuẩn xác.',
    'Đo lường',
    4,
    'https://notebooklm.google.com/notebook/863d113d-3014-46ae-a171-8253e3a75eee',
    '/images/Cong-thuc-va-thang-diem-thuong-dung-nen.png',
    ARRAY['Đo lường Y học', 'Tính tức thì'],
    true
),
(
    'cham-soc-benh-ly-tre-em',
    'Sổ Tay Chăm Sóc & Điều Trị Bệnh Cho Bé',
    'Tính liều hạ sốt chuẩn theo cân nặng (kg), xử trí ho, tiêu chảy và phát hiện dấu hiệu nguy hiểm',
    'Bé bị sốt cao, ho khò khè hay rối loạn tiêu hóa? Hướng dẫn cách tính liều thuốc chuẩn theo kg và nhận biết thời điểm vàng cần đưa con đi khám.',
    'Phác đồ điều trị nhi khoa thường gặp, công thức tính liều Paracetamol và Ibuprofen an toàn, hướng dẫn bù nước Oresol và chế độ ăn hồi phục cho bé.',
    'Nhi khoa',
    5,
    'https://notebooklm.google.com/notebook/daa19f87-43df-43d6-8c9d-6e541691a4cb',
    '/images/HD_Nhi-300x300.png',
    ARRAY['Nhi khoa gia đình', 'Liều dùng theo cân nặng'],
    true
)
ON CONFLICT (slug) DO UPDATE SET 
    title = EXCLUDED.title,
    subtitle = EXCLUDED.subtitle,
    excerpt = EXCLUDED.excerpt,
    content = EXCLUDED.content,
    category = EXCLUDED.category,
    priority_order = EXCLUDED.priority_order,
    external_link = EXCLUDED.external_link,
    image_url = EXCLUDED.image_url,
    badges = EXCLUDED.badges,
    is_active = EXCLUDED.is_active,
    updated_at = NOW();
