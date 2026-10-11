'use client';

import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import SectionInternalMedicine from '@/components/SectionInternalMedicine';
import SectionNutrition from '@/components/SectionNutrition';
import SectionMedication from '@/components/SectionMedication';
import SectionCalculators from '@/components/SectionCalculators';
import SectionPediatrics from '@/components/SectionPediatrics';
import ContactFooter from '@/components/ContactFooter';
import FloatingZalo from '@/components/FloatingZalo';
import MobileBottomNav from '@/components/MobileBottomNav';
import { ZaloConsultProvider } from '@/components/ZaloConsultContext';

export default function HomePage() {
  return (
    <ZaloConsultProvider>
      <div className="flex flex-col min-h-screen bg-[#F5F2EB]">
        <Header />
        
        <main className="flex-1">
          <HeroBanner />
          
          {/* Hệ thống các khối Bento Cards độc lập nổi trên nền Warm Canvas */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-8 md:space-y-12">
            
            {/* Phân khu 1: Cổng tiện ích lâm sàng & Trợ lý AI (Grid 2 cột mobile, 4 cột desktop) */}
            <SectionInternalMedicine />

            {/* Phân khu 2: Sổ tay Dinh dưỡng & Thực đơn */}
            <SectionNutrition />

            {/* Phân khu 3: Hướng dẫn Dùng thuốc An toàn & Tránh tương tác */}
            <SectionMedication />

            {/* Phân khu 4: Tính nhanh Chỉ số Thể trạng & Thang điểm Y học */}
            <SectionCalculators />

            {/* Phân khu 5: Sổ tay Chăm sóc & Điều trị Bệnh cho Bé */}
            <SectionPediatrics />
          </div>
        </main>

        <ContactFooter />
        <FloatingZalo />
        <MobileBottomNav />
      </div>
    </ZaloConsultProvider>
  );
}
