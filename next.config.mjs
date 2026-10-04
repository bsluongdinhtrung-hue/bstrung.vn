/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // 1. Sổ tay Dinh Dưỡng
      {
        source: '/a-i-ho-tro-xay-dung-che-do-dinh-duong',
        destination: '/#dinh-duong',
        permanent: true,
      },
      {
        source: '/so-tay-dinh-duong',
        destination: '/#dinh-duong',
        permanent: true,
      },

      // 2. Sổ tay Nội Khoa Lâm Sàng
      {
        source: '/ho-tro-thuc-hanh-noi-khoa',
        destination: '/#noi-khoa',
        permanent: true,
      },
      {
        source: '/so-tay-noi-khoa',
        destination: '/#noi-khoa',
        permanent: true,
      },

      // 3. Hướng Dẫn Dùng Thuốc & Tương Tác Thuốc
      {
        source: '/huong-dan-su-dung-cac-thuoc-thuong-dung-va-tuong-tac-thuoc',
        destination: '/#thuoc',
        permanent: true,
      },
      {
        source: '/thuoc-va-tuong-tac-thuoc',
        destination: '/#thuoc',
        permanent: true,
      },

      // 4. Công Cụ Đo Lường & Tính Toán Y Học
      {
        source: '/cac-cong-cu-tinh-toan-va-do-luong-thuong-dung-trong-y-hoc',
        destination: '/#cong-cu',
        permanent: true,
      },
      {
        source: '/cong-cu-tinh-toan-y-hoc',
        destination: '/#cong-cu',
        permanent: true,
      },

      // 5. Sổ Tay Chăm Sóc & Điều Trị Nhi Khoa
      {
        source: '/huong-dan-chan-doan-va-dieu-tri-benh-ly-thuong-gap-o-tre-em',
        destination: '/#nhi-khoa',
        permanent: true,
      },
      {
        source: '/so-tay-nhi-khoa',
        destination: '/#nhi-khoa',
        permanent: true,
      },

      // Chuyển hướng các đường dẫn cũ khác về trang chủ
      {
        source: '/quan-ly-hba1c',
        destination: '/#cong-cu',
        permanent: true,
      },
      {
        source: '/so-sanh-so-lieu-hang-thang-kbtyc',
        destination: '/',
        permanent: true,
      },
      {
        source: '/quan-ly-he-thong-bao-cao-y-te',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
