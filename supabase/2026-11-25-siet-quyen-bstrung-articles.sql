-- ====================================================================
-- Siết quyền bảng public.bstrung_articles (chạy 1 lần trong Supabase SQL Editor)
--
-- Trước đây policy "Toàn quyền quản trị bài viết bstrung" dùng FOR ALL USING (true)
-- mà không giới hạn role, nên ai có khóa publishable (khóa này nằm công khai trong
-- code) cũng đọc, sửa, xóa được mọi dòng — kể cả thống kê và danh sách bệnh nhân
-- đăng ký tư vấn (họ tên, số điện thoại, ảnh biên lai).
--
-- Sau khi chạy:
--   - Khách (anon) chỉ đọc được 5 bài viết đang bật, không đọc được dòng bstrung_*.
--   - Không ai ghi/xóa được bằng khóa publishable.
--   - Máy chủ Next.js dùng SUPABASE_SERVICE_ROLE_KEY (bỏ qua RLS) nên vẫn ghi
--     thống kê và lưu đăng ký tư vấn bình thường.
--
-- BẮT BUỘC: đặt SUPABASE_SERVICE_ROLE_KEY trên Vercel và Redeploy TRƯỚC khi chạy
-- file này, nếu không web sẽ không ghi được thống kê và đăng ký tư vấn.
-- ====================================================================

ALTER TABLE public.bstrung_articles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Toàn quyền quản trị bài viết bstrung" ON public.bstrung_articles;
DROP POLICY IF EXISTS "Cho phép đọc bài viết bstrung công khai" ON public.bstrung_articles;

CREATE POLICY "Cho phép đọc bài viết bstrung công khai"
ON public.bstrung_articles FOR SELECT
TO anon, authenticated
USING (is_active = true AND slug NOT LIKE 'bstrung\_%');

-- Kiểm tra: 2 câu dưới phải trả về đúng 1 policy SELECT cho anon, authenticated.
SELECT policyname, cmd, roles, qual
FROM pg_policies
WHERE schemaname = 'public' AND tablename = 'bstrung_articles';
