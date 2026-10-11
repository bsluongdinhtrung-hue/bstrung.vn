import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BSCKI. Lương Đình Trung | Cổng Thông Tin Sức Khỏe & Sổ Tay Lâm Sàng',
  description: 'Trang thông tin y khoa, sổ tay dinh dưỡng cá nhân hóa, thực đơn sức khỏe, hướng dẫn dùng thuốc an toàn và chăm sóc sức khỏe gia đình của BSCKI. Lương Đình Trung.',
  icons: {
    icon: '/images/cropped-logo-moi-1.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Newsreader:ital,opsz,wght@0,6..72,400..700;1,6..72,400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#F5F2EB] text-[#12211F] flex flex-col font-sans selection:bg-[#1F5C55]/20 selection:text-[#1F5C55]">
        {children}
      </body>
    </html>
  );
}
