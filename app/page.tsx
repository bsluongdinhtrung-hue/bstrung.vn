import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import SectionNutrition from '@/components/SectionNutrition';
import SectionInternalMedicine from '@/components/SectionInternalMedicine';
import SectionMedication from '@/components/SectionMedication';
import SectionCalculators from '@/components/SectionCalculators';
import SectionPediatrics from '@/components/SectionPediatrics';
import ContactFooter from '@/components/ContactFooter';
import FloatingZalo from '@/components/FloatingZalo';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#EEF3F1]">
      <Header />
      <main className="flex-1">
        <HeroBanner />
        
        {/* Hệ thống 5 Hòn đảo Chuyên môn (Bento Islands) phân định rõ nét */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-12 md:space-y-16">
          {/* Phân hệ 1: Sổ tay Dinh dưỡng & Thực đơn */}
          <SectionNutrition />

          {/* Phân hệ 2: Sổ tay Lâm sàng Nội khoa */}
          <SectionInternalMedicine />

          {/* Phân hệ 3: Hướng dẫn Dùng thuốc An toàn & Tránh tương tác */}
          <SectionMedication />

          {/* Phân hệ 4: Tính nhanh Chỉ số Thể trạng & Thang điểm Y học */}
          <SectionCalculators />

          {/* Phân hệ 5: Sổ tay Chăm sóc & Điều trị Bệnh cho Bé */}
          <SectionPediatrics />
        </div>
      </main>
      <ContactFooter />
      <FloatingZalo />
    </div>
  );
}
