# Tài Liệu Thiết Kế & Kế Hoạch Triển Khai Website bstrung.vn

> **Chủ sở hữu:** BSCKI. Lương Đình Trung  
> **Mục tiêu:** Xây dựng cổng thông tin y khoa cá nhân & công cụ thực hành lâm sàng hiện đại (chuẩn xu hướng Web 2026), tập trung vào giao diện đơn trang (All-in-one Single Page), tốc độ cao, không lỗi phông chữ, chuẩn bị sẵn sàng mở rộng cho phòng khám gia đình.  
> **Công nghệ cốt lõi:** Next.js 15 (App Router), TypeScript, Tailwind CSS, Lucide React, SheetJS (XLSX), Chart.js / SVG Data Viz, lưu trữ và triển khai trên Vercel + GitHub.

---

## I. Kiến Trúc Tổng Thể & Định Hướng Giao Diện (Trend 2026)

### 1. Phong cách thiết kế: Medical Flat & Bento Grid 2026
- **Màu sắc chủ đạo:** 
  - `Medical Teal/Cyan` (#0ea5e9, #0284c7) tạo cảm giác an tâm, chuyên nghiệp, công nghệ y tế cao.
  - `Clean White / Slate Slate-50` cho nền, giúp văn bản y khoa dễ đọc nhất, không gây mỏi mắt.
  - `Status Colors`: Xanh lục (Tốt), Vàng hổ phách (Lưu ý), Cam (Kém), Đỏ thẫm (Báo động).
- **Typography:** Bộ phông `Inter` hoặc `Plus Jakarta Sans` với hỗ trợ tiếng Việt hoàn hảo 100%, khử triệt để lỗi vỡ phông từng gặp trên WordPress/Elementor.
- **Bố cục Single-Page:** Toàn bộ 7 phân hệ nội dung được tổ chức trên một trang duy nhất với thanh điều hướng dính (Sticky Navigation Bar) cho phép cuộn mượt (Smooth Scroll) tới từng phần.

---

## II. Danh Mục 7 Chuyên Mục Trọng Tâm (Thứ Tự Ưu Tiên Chuẩn)

Theo đúng yêu cầu của BS. Trung (đã loại bỏ bài viết số 1, 3, 4, 5, 12):

| STT | Tên Phân Hệ / Chuyên Mục | Định Dạng Kỹ Thuật | Nguồn Dữ Liệu & AI |
|:---:|:---|:---|:---|
| **1** | 🌟 **Sổ tay Dinh dưỡng** *(Ưu tiên số 1)* | Card tương tác cao cấp + Hướng dẫn truy vấn + Mở NotebookLM | NotebookLM `45e0dc30-6972-46ce-b55d-88a02d013776` |
| **2** | 🩺 **Sổ tay Nội khoa (Lâm sàng)** *(Ưu tiên số 2)* | Bento Grid 6 phân khoa chuyên sâu + Modal/Direct Link | 6 NotebookLM chuyên khoa (Tổng quát, XN, Thang điểm, Thuốc, Dinh dưỡng, Giá/Đấu thầu) |
| **3** | 🩸 **Quản lý HbA1c** | Ứng dụng phân tích dữ liệu React Component nội nhúng trực tiếp | Bộ phân tích Excel SheetJS + Phân tầng 4 nhóm + Biểu đồ + Xuất tin nhắn Zalo |
| **4** | 💊 **Hướng dẫn dùng thuốc & Tương tác thuốc** | Tra cứu hướng dẫn lâm sàng + Trợ lý kê đơn an toàn | NotebookLM `5fd2fede-0ef7-4699-b3c6-680c4bc84618` |
| **5** | 🧮 **Các công cụ tính toán & đo lường y học** | Thang điểm lâm sàng, công thức tính toán y khoa | NotebookLM `863d113d-3014-46ae-a171-8253e3a75eee` |
| **6** | 👶 **Chẩn đoán & điều trị bệnh lý trẻ em** | Sổ tay lâm sàng nhi khoa thường gặp | NotebookLM `daa19f87-43df-43d6-8c9d-6e541691a4cb` |
| **7** | 📊 **Hệ thống báo cáo & Phân tích KBTYC** | Dashboard phân tích số liệu tài chính & bệnh nhân hàng tháng | SheetJS + Chart.js native component |

---

## III. Cấu Trúc Mã Nguồn (Directory Structure)

```
bstrung.vn/
├── app/
│   ├── layout.tsx                # Khung HTML chung, Metadata SEO y khoa, Google Fonts
│   ├── page.tsx                  # Trang chủ Single Page tích hợp 7 phân hệ
│   └── globals.css               # Tailwind CSS 3/4 & custom scrollbar
├── components/
│   ├── Header.tsx                # Thanh menu dính (Sticky Header) kèm logo & nút liên hệ
│   ├── HeroBanner.tsx            # Giới thiệu BSCKI. Lương Đình Trung, danh hiệu, định vị
│   ├── SectionNutrition.tsx      # Phân hệ 1: Sổ tay Dinh dưỡng
│   ├── SectionInternalMedicine.tsx # Phân hệ 2: Sổ tay Nội khoa (6 cards chuyên khoa)
│   ├── SectionHbA1c.tsx          # Phân hệ 3: Dashboard Quản lý HbA1c (Native React)
│   ├── SectionMedication.tsx     # Phân hệ 4: Kê đơn & Tương tác thuốc
│   ├── SectionCalculators.tsx    # Phân hệ 5: Công cụ đo lường y học
│   ├── SectionPediatrics.tsx     # Phân hệ 6: Nhi khoa lâm sàng
│   ├── SectionReportAnalytics.tsx # Phân hệ 7: Phân tích số liệu & Báo cáo KBTYC
│   └── ContactFooter.tsx         # Chân trang: Email bsluongdinhtrung@gmail.com, Zalo, bản quyền
├── public/
│   ├── images/                   # Lưu trữ toàn bộ ảnh gốc đã tải về
│   └── favicon.ico               # Logo bác sĩ Trung
├── du_lieu/                      # Dữ liệu JSON sao lưu gốc
├── thiết kế bstrung.vn.md        # Tài liệu kiến trúc và kế hoạch này
├── package.json
└── tailwind.config.ts
```

---

## IV. Chi Tiết Kỹ Thuật Các Phân Hệ Phức Tạp

### 1. Phân hệ Quản lý HbA1c (`SectionHbA1c.tsx`)
- Không dùng `iframe` hay nhúng HTML thô (tránh vỡ giao diện).
- Chuyển toàn bộ mã nguồn React từ WordPress sang chuẩn TypeScript React component trong Next.js:
  - Tích hợp `xlsx` (SheetJS) đọc file Excel báo cáo đường huyết/HbA1c trực tiếp trên trình duyệt (client-side), **không gửi dữ liệu bệnh nhân lên server** nhằm bảo mật tuyệt đối thông tin y tế.
  - Phân tầng 4 nhóm chuẩn lâm sàng:
    - *Tốt:* HbA1c $\le$ 7.0%
    - *Lưu ý:* 7.0% < HbA1c $\le$ 8.5%
    - *Kém:* 8.5% < HbA1c < 10.0%
    - *Báo động:* HbA1c $\ge$ 10.0%
  - Cảnh báo trễ tái khám (> 120 ngày).
  - Tích hợp nút **"Sao chép tin nhắn Zalo"** để bác sĩ gửi phản hồi nhanh cho bệnh nhân chỉ với 1 click.

### 2. Phân hệ Sổ tay Dinh dưỡng & Sổ tay Nội khoa
- Hiển thị trực quan dạng Bento Grid, tích hợp ảnh thumbnail chất lượng cao đã lưu trong `public/images/`.
- Hướng dẫn tương tác với NotebookLM AI: ghi chú rõ thời gian AI phản hồi (15-20s) và các mẫu câu hỏi tiêu chuẩn để người dùng tra cứu nhanh nhất.
- Hỗ trợ nút mở thẳng tab NotebookLM tương ứng của BS. Trung.

### 3. Phân hệ Chân trang & Liên hệ
- Nút bấm trực tiếp mở Zalo chat (`https://zalo.me/...`).
- Nút gửi email nhanh tới `bsluongdinhtrung@gmail.com` kèm mẫu thư tư vấn y khoa.
- Thông điệp miễn trừ trách nhiệm y khoa chuẩn quốc tế.

---

## V. Kế Hoạch Thực Hiện Từng Bước (Bite-Sized Tasks)

### Bước 2: Khởi tạo Project & Cài đặt Thư viện
- [x] Tạo file tài liệu kiến trúc `thiết kế bstrung.vn.md`
- [ ] Khởi tạo dự án Next.js 15 với TypeScript, Tailwind CSS, ESLint
- [ ] Cài đặt các thư viện cần thiết: `lucide-react`, `xlsx`, `canvas-confetti` (nếu cần hiệu ứng)
- [ ] Di chuyển toàn bộ hình ảnh từ `du_lieu/images/` sang thư mục `public/images/`

### Bước 3: Lập trình các Component & Giao diện Single Page
- [ ] Xây dựng `Header.tsx` & `ContactFooter.tsx` (Menu dính, link Zalo, email)
- [ ] Xây dựng `HeroBanner.tsx` (Giới thiệu BS. Trung)
- [ ] Xây dựng Phân hệ 1: `SectionNutrition.tsx` (Sổ tay Dinh dưỡng)
- [ ] Xây dựng Phân hệ 2: `SectionInternalMedicine.tsx` (Sổ tay Nội khoa 6 module)
- [ ] Xây dựng Phân hệ 3: `SectionHbA1c.tsx` (Bộ công cụ HbA1c không vỡ phông)
- [ ] Xây dựng Phân hệ 4 & 5 & 6: Thuốc & tương tác, Công cụ tính toán, Nhi khoa
- [ ] Xây dựng Phân hệ 7: `SectionReportAnalytics.tsx` (Báo cáo & Phân tích số liệu)
- [ ] Hoàn thiện `app/page.tsx` ghép nối mượt mà 7 phân hệ

### Bước 4: Kiểm thử, Tối ưu & Đóng gói
- [ ] Chạy kiểm thử build production (`npm run build`) đảm bảo 0 lỗi TypeScript, 0 lỗi cú pháp
- [ ] Kiểm tra responsive trên điện thoại di động (iPhone/Android) và màn hình máy tính
- [ ] Kiểm tra tốc độ tải trang, đảm bảo dưới 1.5 giây
- [ ] Báo cáo kết quả và chuẩn bị triển khai lên GitHub & Vercel
