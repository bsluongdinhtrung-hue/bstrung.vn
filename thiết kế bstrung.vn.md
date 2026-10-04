# Tài Liệu Thiết Kế Kiến Trúc & Nghiệp Vụ Website bstrung.vn

> **Chủ dự án:** BSCKI. Lương Đình Trung  
> **Định vị:** Cổng thông tin y khoa cá nhân, sổ tay thực hành lâm sàng và tư vấn sức khỏe phòng khám gia đình.  
> **Tên miền chính thức:** 👉 `https://bstrung.vn` (và `https://www.bstrung.vn`)  
> **Phong cách nhận diện (Design Signature):** Đồng bộ chuẩn **Deep Medical Teal** của hệ sinh thái phần mềm BS. Trung (`#1F5C55`, `#16443F`, `#E3EFEC`, `#F7F8F6`, `#12211F`), typography chuẩn y khoa, bố cục Bento tối giản, ngôn ngữ đối thoại tự nhiên, ấm áp ("người" hơn), không lộ thuật ngữ kỹ thuật backend.  
> **Hạ tầng:** Next.js 15 (App Router), TypeScript, Tailwind CSS, Lucide React, **Supabase PostgreSQL** (`bstrung_articles`), GitHub & Vercel Production.  
> **Thư mục lưu trữ dự án:** `C:\Users\hi\Desktop\MyApp\web bstrung.vn`

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

---

## V. Cấu Hình Chuyển Hướng Vĩnh Viễn (301 Permanent Redirects)
Để bảo toàn toàn bộ liên kết cũ trên WordPress, thứ hạng tìm kiếm trên Google (SEO) và link đã chia sẻ trên Zalo/Facebook:
- `/a-i-ho-tro-xay-dung-che-do-dinh-duong` & `/so-tay-dinh-duong` $\rightarrow$ `/#dinh-duong`
- `/ho-tro-thuc-hanh-noi-khoa` & `/so-tay-noi-khoa` $\rightarrow$ `/#noi-khoa`
- `/huong-dan-su-dung-cac-thuoc-thuong-dung-va-tuong-tac-thuoc` & `/thuoc-va-tuong-tac-thuoc` $\rightarrow$ `/#thuoc`
- `/cac-cong-cu-tinh-toan-va-do-luong-thuong-dung-trong-y-hoc` & `/cong-cu-tinh-toan-y-hoc` $\rightarrow$ `/#cong-cu`
- `/huong-dan-chan-doan-va-dieu-tri-benh-ly-thuong-gap-o-tre-em` & `/so-tay-nhi-khoa` $\rightarrow$ `/#nhi-khoa`
- `/quan-ly-hba1c` $\rightarrow$ `/#cong-cu`
- `/so-sanh-so-lieu-hang-thang-kbtyc` & `/quan-ly-he-thong-bao-cao-y-te` $\rightarrow$ `/`

---

## VI. Nâng Cấp Phân Tách Chuyên Mục (Bento Islands) & Bảng Điều Khiển Lâm Sàng (Rich Micro-UI)

### 1. Kiến trúc phân tách chuyên mục độc lập (Bento Island Architecture)
- Nền tổng thể trang chuyển sang tông xám ngọc y tế mát mắt (`#EEF3F1`), tạo độ tương phản mạnh mẽ với các khối chuyên môn.
- Cả 5 chuyên mục được quy hoạch thành **5 Hòn đảo Chuyên môn (Bento Islands)**:
  - Khối Card lớn bo góc `rounded-3xl`, viền phân định sắc nét `border-[#CCD9D5]`, bóng đổ nổi khối `shadow-sm hover:shadow-md`.
  - Mỗi chuyên mục có **Dải chỉ mục số thứ tự lớn** (`PHÂN VÙNG 01 / 05` đến `PHÂN VÙNG 05 / 05`) với màu sắc và biểu tượng nhận diện đặc thù.
  - Khoảng cách giữa các chuyên mục (`space-y-12 md:space-y-16`) giúp người dùng cuộn đến đâu nhận biết rõ ràng ranh giới chuyên khoa đến đó.

### 2. Thiết kế lại 6 thẻ Sổ tay Nội khoa (Rich Clinical Micro-UI Preview)
- Loại bỏ hoàn toàn ô trống đặt 1 icon đơn điệu trước đây.
- Nửa trên mỗi thẻ trở thành một **bảng điều khiển y khoa thu nhỏ (Clinical Micro-UI)** chân thực:
  - `MOD-01`: Bảng phác đồ tiêu chuẩn vàng, chẩn đoán phân biệt đa chuyên khoa, chiến lược bậc thang.
  - `MOD-02`: Phiếu kết quả xét nghiệm tham chiếu (Glucose, HbA1c, Creatinine) với nhãn dải đo bình thường.
  - `MOD-03`: Thước đo tiên lượng lâm sàng (CURB-65, Child-Pugh, CKD-EPI) kèm phân tầng nguy cơ.
  - `MOD-04`: Ma trận cảnh báo an toàn dược lý, tương tác phối hợp thuốc và chỉnh liều suy thận.
  - `MOD-05`: Khẩu phần bệnh lý mẫu cân đối tỷ lệ tinh bột chậm, đạm lành mạnh và giảm natri.
  - `MOD-06`: Sổ tay quản trị danh mục kỹ thuật y tế, định mức hao phí và tỷ lệ quỹ BHYT thanh toán.
