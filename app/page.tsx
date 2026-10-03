import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import SectionNutrition from '@/components/SectionNutrition';
import SectionInternalMedicine from '@/components/SectionInternalMedicine';
import SectionHbA1c from '@/components/SectionHbA1c';
import SectionMedication from '@/components/SectionMedication';
import SectionCalculators from '@/components/SectionCalculators';
import SectionPediatrics from '@/components/SectionPediatrics';
import SectionReportAnalytics from '@/components/SectionReportAnalytics';
import ContactFooter from '@/components/ContactFooter';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroBanner />
        
        {/* Phân hệ 1: Sổ tay Dinh dưỡng (Ưu tiên số 1) */}
        <SectionNutrition />

        {/* Phân hệ 2: Sổ tay Nội khoa (Ưu tiên số 2) */}
        <SectionInternalMedicine />

        {/* Phân hệ 3: Quản lý HbA1c (Chuyển thành bài viết & công cụ native React) */}
        <SectionHbA1c />

        {/* Phân hệ 4: Hướng dẫn sử dụng thuốc & Tương tác thuốc */}
        <SectionMedication />

        {/* Phân hệ 5: Các công cụ tính toán & đo lường y học */}
        <SectionCalculators />

        {/* Phân hệ 6: Chẩn đoán & điều trị bệnh lý thường gặp ở trẻ em */}
        <SectionPediatrics />

        {/* Phân hệ 7: Hệ thống báo cáo & Phân tích số liệu KBTYC */}
        <SectionReportAnalytics />
      </main>
      <ContactFooter />
    </div>
  );
}
