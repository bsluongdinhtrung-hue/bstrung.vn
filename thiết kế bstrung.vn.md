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

---

## IV. Nâng Cấp Giao Diện & Trải Nghiệm Thị Giác (Visual & UX Revamp 2026)

### 1. Sổ Tay Dinh Dưỡng - Mâm Cơm Việt Chuẩn Y Khoa
- Thay thế hoàn toàn ảnh bìa sách cũ bằng hình ảnh thực tế mâm cơm gia đình Việt Nam chuẩn lâm sàng:
  - **Cơm gạo lứt vừng đen:** Tinh bột chậm (chỉ số GI thấp) cho người đái tháo đường & giảm cân.
  - **Cá hấp gừng hành:** Đạm tinh khiết, giàu Omega-3, không dầu mỡ chiên xào, bảo vệ tim mạch & mỡ máu.
  - **Rau củ ngũ sắc luộc:** Súp lơ xanh, đậu bắp, cà rốt, đậu cô ve (giàu sulforaphane, chất nhầy hòa tan bảo vệ niêm mạc ruột).
  - **Canh rau thịt nạc băm trong veo:** Nấu thanh đạm giảm natri bảo vệ thận và huyết áp.
  - **Bưởi hồng tráng miệng:** Giàu vitamin C và naringenin hỗ trợ độ nhạy insulin.

### 2. Sổ Tay Nội Khoa - Phương Án 1 (Modern 3D Bento Medical Icons & Badges)
- Thay thế 6 ảnh chụp slide thuyết trình cũ bằng hệ thống 6 thẻ Bento 3D Vector & Clinical Badges:
  1. `MOD-01 • CLINICAL`: Sổ Tay Nội Khoa Toàn Diện (`Stethoscope` - Tag: Phác đồ BYT & Quốc tế)
  2. `MOD-02 • LAB`: Xét Nghiệm Thường Dùng (`FlaskConical` - Tag: Cận lâm sàng & Trị số SI)
  3. `MOD-03 • SCORES`: Công Thức & Thang Điểm (`Gauge` - Tag: Đo lường & Phân tầng)
  4. `MOD-04 • PHARMA`: Thuốc & Tương Tác Thuốc (`Pill` - Tag: Dược lý lâm sàng)
  5. `MOD-05 • DIET`: Sổ Tay Dinh Dưỡng (`Apple` - Tag: Liệu pháp Dinh dưỡng)
  6. `MOD-06 • POLICY`: Giá & Đấu Thầu Y Tế (`Scale` - Tag: Quản lý Dược & BHYT)
- Ưu điểm: Tải cực nhanh (<0.1s), sắc nét tuyệt đối 100% trên màn hình Retina / 4K / Mobile, đồng bộ nhận diện Deep Medical Teal `#1F5C55`.
