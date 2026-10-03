import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BSCKI. Lương Đình Trung | Cổng Thông Tin Y Khoa & Sổ Tay Lâm Sàng',
  description: 'Trang thông tin y khoa, sổ tay thực hành lâm sàng, dinh dưỡng, quản lý HbA1c và công cụ hỗ trợ chẩn đoán điều trị của BSCKI. Lương Đình Trung.',
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
