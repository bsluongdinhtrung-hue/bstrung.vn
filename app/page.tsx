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
    <div className="flex flex-col min-h-screen bg-[#F7F8F6]">
      <Header />
      <main className="flex-1">
        <HeroBanner />
        
        {/* Phân hệ 1: Sổ tay Dinh dưỡng & Thực đơn (Ưu tiên số 1) */}
        <SectionNutrition />

        {/* Phân hệ 2: Sổ tay Lâm sàng Nội khoa (Ưu tiên số 2) */}
        <SectionInternalMedicine />

        {/* Phân hệ 3: Hướng dẫn Dùng thuốc An toàn & Tránh tương tác */}
        <SectionMedication />

        {/* Phân hệ 4: Tính nhanh Chỉ số Thể trạng & Thang điểm Y học */}
        <SectionCalculators />

        {/* Phân hệ 5: Sổ tay Chăm sóc & Điều trị Bệnh cho Bé */}
        <SectionPediatrics />
      </main>
      <ContactFooter />
      <FloatingZalo />
    </div>
  );
}
