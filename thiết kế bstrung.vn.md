# Tài Liệu Thiết Kế Kiến Trúc & Nghiệp Vụ Website bstrung.vn

> **Chủ dự án:** BSCKI. Lương Đình Trung  
> **Định vị:** Cổng thông tin y khoa cá nhân, sổ tay thực hành lâm sàng và tư vấn sức khỏe phòng khám gia đình.  
> **Phong cách nhận diện (Design Signature):** Đồng bộ chuẩn **Deep Medical Teal** của hệ sinh thái phần mềm BS. Trung (`#1F5C55`, `#16443F`, `#E3EFEC`, `#F7F8F6`, `#12211F`), typography chuẩn y khoa, bố cục Bento tối giản, ngôn ngữ đối thoại tự nhiên, ấm áp ("người" hơn), không lộ thuật ngữ kỹ thuật backend.  
> **Công nghệ & Cơ sở dữ liệu:** Next.js 15 (App Router), TypeScript, Tailwind CSS, Lucide React, **Supabase PostgreSQL** (`bstrung_articles`), GitHub & Vercel.

---

## I. Danh Mục 5 Chuyên Mục Trọng Tâm (Đã Lược Bỏ Bài 3 & 7)

Toàn bộ hệ thống tập trung vào 5 chuyên mục chăm sóc sức khỏe thiết thực:
1. 🌟 **Sổ Tay Dinh Dưỡng & Thực Đơn** (Top 1)
2. 🩺 **Sổ Tay Lâm Sàng Nội Khoa** (Top 2)
3. 💊 **Hướng Dẫn Dùng Thuốc An Toàn & Tránh Tương Tác**
4. 🧮 **Tính Nhanh Chỉ Số Thể Trạng (BMI, ClCr) & Thang Điểm Y Học**
5. 👶 **Sổ Tay Chăm Sóc & Điều Trị Bệnh Cho Bé**

---

## II. Kiến Trúc Cơ Sở Dữ Liệu Supabase (Độc Lập & Chống Trùng Lặp)

### 1. Nguyên tắc cô lập dữ liệu (Data Isolation Principle)
- Dự án Supabase (`fkjmiatwdcgxdkqnwhgn`) hiện chứa các bảng của hệ thống Giải phẫu bệnh (`iso_*`).
- Tuyệt đối **không can thiệp, không sửa đổi hay xóa** bất kỳ bảng `iso_*` nào.
- Toàn bộ dữ liệu của website `bstrung.vn` sử dụng bảng riêng biệt có tiền tố `bstrung_`:
  - **`public.bstrung_articles`**: Lưu trữ toàn bộ 5 bài viết / sổ tay y khoa.

### 2. Cấu trúc bảng `bstrung_articles`:
- `id`: SERIAL PRIMARY KEY
- `slug`: TEXT UNIQUE (Định danh duy nhất: `so-tay-dinh-duong`, `so-tay-noi-khoa`...)
- `title`: TEXT (Tiêu đề bài viết)
- `subtitle`: TEXT (Mô tả ngắn gọn chuyên môn)
- `excerpt`: TEXT (Đoạn tóm tắt gần gũi với người bệnh)
- `content`: TEXT (Nội dung chi tiết & hướng dẫn lâm sàng)
- `category`: TEXT (Chuyên khoa: Dinh dưỡng, Nội khoa, Dược lý, Đo lường, Nhi khoa)
- `priority_order`: INTEGER (Thứ tự ưu tiên 1 - 5)
- `external_link`: TEXT (Đường link kết nối tới trợ lý tư vấn)
- `image_url`: TEXT (Đường dẫn ảnh minh họa chuẩn)
- `badges`: TEXT[] (Nhãn phân loại)
- `is_active`: BOOLEAN (Trạng thái hiển thị công khai)

### 3. File khởi tạo & Script hỗ trợ:
- Schema SQL: [`supabase-bstrung-schema.sql`](file:///c:/Users/hi/Desktop/MyApp/Linh%20tinh/bstrung.vn/supabase-bstrung-schema.sql)
- Script đồng bộ tự động: [`scripts/seed-supabase.js`](file:///c:/Users/hi/Desktop/MyApp/Linh%20tinh/bstrung.vn/scripts/seed-supabase.js)
- Client kết nối: [`lib/supabase.ts`](file:///c:/Users/hi/Desktop/MyApp/Linh%20tinh/bstrung.vn/lib/supabase.ts)

---

## III. Kênh Liên Hệ & Nhận Diện
- Hotline / Zalo chính thức: **`0559 148 032`** (`https://zalo.me/0559148032`)
- Nút Zalo nổi tròn (Floating Zalo) hiển thị toàn trang.
- Email: `bsluongdinhtrung@gmail.com`
- Domain Production Vercel: `https://bstrung-vn.vercel.app`
