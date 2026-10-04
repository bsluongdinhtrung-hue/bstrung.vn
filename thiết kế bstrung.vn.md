# Tài Liệu Thiết Kế Kiến Trúc & Nghiệp Vụ Website bstrung.vn

> **Chủ dự án:** BSCKI. Lương Đình Trung  
> **Định vị:** Cổng thông tin y khoa cá nhân, sổ tay thực hành lâm sàng và tư vấn sức khỏe phòng khám gia đình.  
> **Tên miền chính thức:** 👉 `https://bstrung.vn` (và `https://www.bstrung.vn`)  
> **Phong cách nhận diện (Design Signature):** Đồng bộ chuẩn **Deep Medical Teal** của hệ sinh thái phần mềm BS. Trung (`#1F5C55`, `#16443F`, `#E3EFEC`, `#F7F8F6`, `#12211F`), typography chuẩn y khoa, bố cục Bento tối giản, ngôn ngữ đối thoại tự nhiên, ấm áp ("người" hơn), không lộ thuật ngữ kỹ thuật backend.  
> **Hạ tầng:** Next.js 15 (App Router), TypeScript, Tailwind CSS, Lucide React, **Supabase PostgreSQL** (`bstrung_articles`), GitHub & Vercel Production.

---

## I. Tình Trạng Tên Miền Chính Thức (Live Production)
- **Tên miền Apex:** `bstrung.vn` $\rightarrow$ Bản ghi A: `76.76.21.21` (Đã thông tuyến 100%, SSL tự động)
- **Tên miền WWW:** `www.bstrung.vn` $\rightarrow$ Bản ghi A: `76.76.21.21` (Đã thông tuyến 100%, SSL tự động)
- **Các phân hệ phụ (Không chạm vào, giữ nguyên vẹn):**
  - `isogiaiphaubenh.bstrung.vn`
  - `quanlithietbi.bstrung.vn`

---

## II. Danh Mục 5 Chuyên Mục Trọng Tâm (Đã Lược Bỏ Bài 3 & 7)

Toàn bộ hệ thống tập trung vào 5 chuyên mục chăm sóc sức khỏe thiết thực:
1. 🌟 **Sổ Tay Dinh Dưỡng & Thực Đơn** (Top 1)
2. 🩺 **Sổ Tay Lâm Sàng Nội Khoa** (Top 2)
3. 💊 **Hướng Dẫn Dùng Thuốc An Toàn & Tránh Tương Tác**
4. 🧮 **Tính Nhanh Chỉ Số Thể Trạng (BMI, ClCr) & Thang Điểm Y Học**
5. 👶 **Sổ Tay Chăm Sóc & Điều Trị Bệnh Cho Bé**

---

## III. Kiến Trúc Cơ Sở Dữ Liệu Supabase (Độc Lập & Chống Trùng Lặp)

### 1. Nguyên tắc cô lập dữ liệu (Data Isolation Principle)
- Dự án Supabase (`wxdpzmjbhqjggqvyxguh`) chứa các bảng của hệ thống Giải phẫu bệnh.
- Toàn bộ dữ liệu của website `bstrung.vn` sử dụng bảng riêng biệt có tiền tố `bstrung_`:
  - **`public.bstrung_articles`**: Đã tạo và lưu trữ đầy đủ 5 bài viết / sổ tay y khoa.

### 2. Kênh Liên Hệ & Nhận Diện
- Hotline / Zalo chính thức: **`0559 148 032`** (`https://zalo.me/0559148032`)
- Nút Zalo nổi tròn (Floating Zalo) hiển thị toàn trang.
- Email: `bsluongdinhtrung@gmail.com`
