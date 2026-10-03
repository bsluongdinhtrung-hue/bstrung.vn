# Tài Liệu Thiết Kế Kiến Trúc & Nghiệp Vụ Website bstrung.vn

> **Chủ dự án:** BSCKI. Lương Đình Trung  
> **Định vị:** Cổng thông tin y khoa cá nhân, sổ tay thực hành lâm sàng và tư vấn sức khỏe phòng khám gia đình.  
> **Phong cách nhận diện (Design Signature):** Đồng bộ chuẩn **Deep Medical Teal** của hệ sinh thái phần mềm BS. Trung (`#1F5C55`, `#16443F`, `#E3EFEC`, `#F7F8F6`, `#12211F`), typography chuẩn y khoa, bố cục Bento tối giản, ngôn ngữ đối thoại tự nhiên, ấm áp ("người" hơn), không lộ thuật ngữ kỹ thuật backend.  
> **Công nghệ:** Next.js 15 (App Router), TypeScript, Tailwind CSS, Lucide React, triển khai tự động CI/CD trên GitHub & Vercel.

---

## I. Cập Nhật Danh Mục 5 Chuyên Mục Trọng Tâm (Đã Bỏ Bài #3 và #7)

Theo chỉ đạo của BS. Trung, đã lược bỏ hoàn toàn 2 công cụ phục vụ nội bộ bệnh viện (Quản lý HbA1c và Báo cáo KBTYC). Toàn bộ website tập trung 100% vào **5 chuyên mục chăm sóc sức khỏe & thực hành lâm sàng**:

| STT | Tên Chuyên Mục | Định Vị & Ngôn Ngữ Tiếp Cận | Hành Động (CTA) | Liên Kết Trợ Lý Tư Vấn |
|:---:|:---|:---|:---|:---|
| **1** | 🌟 **Sổ Tay Dinh Dưỡng & Thực Đơn** *(Top 1)* | Hướng dẫn chế độ ăn khoa học, gợi ý thực đơn 7 ngày cá nhân hóa theo từng bệnh lý (ĐTĐ, Gout, Tim mạch, Thai kỳ...) | *Bấm vào để nhận tư vấn thực đơn riêng* | `https://notebooklm.google.com/notebook/45e0dc30-6972-46ce-b55d-88a02d013776` |
| **2** | 🩺 **Sổ Tay Nội Khoa Lâm Sàng** *(Top 2)* | Góc tra cứu phác đồ và tài liệu chuyên sâu dành cho đồng nghiệp và người bệnh cần tìm hiểu kỹ về bệnh lý mạn tính | *Tra cứu phác đồ bệnh học* | 6 module chuyên khoa (Tổng quát, XN, Thang điểm, Dược, Dinh dưỡng, Đấu thầu) |
| **3** | 💊 **Hướng Dẫn Dùng Thuốc An Toàn** | Tra cứu hướng dẫn dùng thuốc, thời điểm uống trước/sau ăn, cảnh báo tương tác thuốc và lưu ý chức năng thận | *Kiểm tra đơn thuốc an toàn* | `https://notebooklm.google.com/notebook/5fd2fede-0ef7-4699-b3c6-680c4bc84618` |
| **4** | 🧮 **Tính Nhanh Chỉ Số & Thang Điểm Y Học** | Bộ công cụ tính nhanh BMI, mức lọc cầu thận eGFR trực tiếp trên trang + tra cứu thang điểm tiên lượng lâm sàng | *Tính chỉ số sức khỏe ngay* | `https://notebooklm.google.com/notebook/863d113d-3014-46ae-a171-8253e3a75eee` |
| **5** | 👶 **Chăm Sóc & Bệnh Lý Trẻ Em** | Sổ tay theo dõi sốt, ho, tiêu chảy, tính liều hạ sốt chuẩn theo cân nặng (kg) và phát hiện sớm dấu hiệu nguy hiểm | *Nhận hướng dẫn chăm sóc bé* | `https://notebooklm.google.com/notebook/daa19f87-43df-43d6-8c9d-6e541691a4cb` |

---

## II. Hệ Thống Màu Sắc & Ngôn Ngữ Nhận Diện (Medical Deep Teal)

Kế thừa trực tiếp từ dự án `my-medical-app` của BS. Trung:
- **Primary Deep Teal:** `#1F5C55` (Màu xanh cổ vịt y tế sang trọng, tin cậy, dịu mắt)
- **Primary Hover & Deep:** `#16443F`
- **Primary Tint / Soft Background:** `#E3EFEC` (Nền thẻ nhẹ nhàng, êm dịu)
- **Neutral Background:** `#F7F8F6` (Trắng ngà y tế ấm áp, không chói lóa như trắng tinh khiết)
- **Foreground Text:** `#12211F` (Màu than trầm đậm, độ tương phản cao, chuẩn công thái học thị giác)
- **Borders & Dividers:** `#DDE3E0`
- **Zalo Hotline:** `0559 148 032` (`https://zalo.me/0559148032`)

---

## III. Chuẩn Hóa Văn Phong & Trải Nghiệm Người Dùng (Tone of Voice)
- **Tuyệt đối không nhắc:** *"Google NotebookLM"*, *"AI cần suy nghĩ 15-20s"*, *"Khung nhúng HTML"*, *"Bệnh viện Đức Giang"*.
- **Văn phong chuẩn mực:** Ấm áp, gần gũi như bác sĩ gia đình đang lắng nghe và giải thích cho bệnh nhân; đồng thời giữ vững độ khúc chiết, chuẩn mực y khoa cho đồng nghiệp tra cứu.
