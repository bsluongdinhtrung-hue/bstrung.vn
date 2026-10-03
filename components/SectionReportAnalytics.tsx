'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { BarChart3, Upload, TrendingUp, Users, DollarSign, PieChart, ShieldCheck, FileSpreadsheet } from 'lucide-react';

interface MonthData {
  month: string;
  totalRevenue: number; // Triệu VNĐ
  bhytRevenue: number;  // Triệu VNĐ
  totalPatients: number;
  bhytPatients: number;
}

const DEMO_MONTHS: MonthData[] = [
  { month: 'Tháng 8', totalRevenue: 1250, bhytRevenue: 720, totalPatients: 1420, bhytPatients: 980 },
  { month: 'Tháng 9', totalRevenue: 1380, bhytRevenue: 810, totalPatients: 1560, bhytPatients: 1050 },
  { month: 'Tháng 10', totalRevenue: 1520, bhytRevenue: 890, totalPatients: 1680, bhytPatients: 1120 },
  { month: 'Tháng 11', totalRevenue: 1490, bhytRevenue: 860, totalPatients: 1620, bhytPatients: 1090 },
  { month: 'Tháng 12', totalRevenue: 1680, bhytRevenue: 950, totalPatients: 1850, bhytPatients: 1240 },
];

export default function SectionReportAnalytics() {
  const [data, setData] = useState<MonthData[]>(DEMO_MONTHS);
  const [activeMetric, setActiveMetric] = useState<'revenue' | 'patients'>('revenue');

  // Summary figures
  const latestMonth = data[data.length - 1];
  const prevMonth = data[data.length - 2];
  const revenueGrowth = prevMonth ? (((latestMonth.totalRevenue - prevMonth.totalRevenue) / prevMonth.totalRevenue) * 100).toFixed(1) : '0';
  const patientGrowth = prevMonth ? (((latestMonth.totalPatients - prevMonth.totalPatients) / prevMonth.totalPatients) * 100).toFixed(1) : '0';

  const maxRevenue = Math.max(...data.map(d => d.totalRevenue));
  const maxPatients = Math.max(...data.map(d => d.totalPatients));

  return (
    <section id="bao-cao" className="py-16 bg-white border-b border-slate-200/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-100 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold mb-3">
              <BarChart3 className="w-3.5 h-3.5 text-blue-600" />
              <span>Chuyên Mục Trọng Tâm Số 7 • Quản Trị & Báo Cáo</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
              Hệ Thống Báo Cáo & Phân Tích Số Liệu KBTYC
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-1 max-w-3xl">
              Nền tảng phân tích số liệu lâm sàng, đối soát doanh thu khám chữa bệnh theo yêu cầu (Tổng vs BHYT) 
              và theo dõi xu hướng tăng trưởng lượt khám qua các tháng.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Bảo mật nội bộ</span>
            </span>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs">
            <div className="flex justify-between items-center text-slate-500 text-xs font-bold uppercase">
              <span>Doanh Thu Gần Nhất ({latestMonth.month})</span>
              <DollarSign className="w-4 h-4 text-sky-600" />
            </div>
            <div className="text-2xl font-black text-slate-900 mt-2">
              {latestMonth.totalRevenue.toLocaleString()} <span className="text-xs font-normal text-slate-500">Tr. VNĐ</span>
            </div>
            <div className="text-xs font-semibold text-emerald-600 mt-1 flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" /> +{revenueGrowth}% so với tháng trước
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs">
            <div className="flex justify-between items-center text-slate-500 text-xs font-bold uppercase">
              <span>Doanh Thu BHYT ({latestMonth.month})</span>
              <PieChart className="w-4 h-4 text-indigo-600" />
            </div>
            <div className="text-2xl font-black text-slate-900 mt-2">
              {latestMonth.bhytRevenue.toLocaleString()} <span className="text-xs font-normal text-slate-500">Tr. VNĐ</span>
            </div>
            <div className="text-xs font-semibold text-slate-500 mt-1">
              Chiếm {((latestMonth.bhytRevenue / latestMonth.totalRevenue) * 100).toFixed(1)}% cơ cấu
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs">
            <div className="flex justify-between items-center text-slate-500 text-xs font-bold uppercase">
              <span>Lượt Khám ({latestMonth.month})</span>
              <Users className="w-4 h-4 text-cyan-600" />
            </div>
            <div className="text-2xl font-black text-slate-900 mt-2">
              {latestMonth.totalPatients.toLocaleString()} <span className="text-xs font-normal text-slate-500">lượt</span>
            </div>
            <div className="text-xs font-semibold text-emerald-600 mt-1 flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" /> +{patientGrowth}% so với tháng trước
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs">
            <div className="flex justify-between items-center text-slate-500 text-xs font-bold uppercase">
              <span>Doanh Thu TB / Lượt Khám</span>
              <DollarSign className="w-4 h-4 text-amber-600" />
            </div>
            <div className="text-2xl font-black text-slate-900 mt-2">
              {((latestMonth.totalRevenue / latestMonth.totalPatients) * 1000).toFixed(0)} <span className="text-xs font-normal text-slate-500">k VNĐ/BN</span>
            </div>
            <div className="text-xs font-semibold text-slate-500 mt-1">
              Chỉ số hiệu quả dịch vụ
            </div>
          </div>

        </div>

        {/* Interactive Chart Container */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs mb-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <h3 className="font-bold text-slate-900 text-base">
                Biểu Đồ Xu Hướng So Sánh Theo Từng Tháng
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Biểu diễn trực quan tốc độ tăng trưởng doanh số và số lượng bệnh nhân
              </p>
            </div>

            <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-100 border border-slate-200 self-start sm:self-auto">
              <button
                onClick={() => setActiveMetric('revenue')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeMetric === 'revenue' ? 'bg-white text-sky-700 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Doanh Thu (Tr. VNĐ)
              </button>
              <button
                onClick={() => setActiveMetric('patients')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeMetric === 'patients' ? 'bg-white text-sky-700 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Số Lượng Bệnh Nhân
              </button>
            </div>
          </div>

          {/* SVG Bar Chart */}
          <div className="pt-6">
            <div className="grid grid-cols-5 gap-3 sm:gap-6 items-end h-64 sm:h-72 border-b border-slate-200 pb-3">
              {data.map((d, idx) => {
                const heightPercent = activeMetric === 'revenue' 
                  ? (d.totalRevenue / maxRevenue) * 100 
                  : (d.totalPatients / maxPatients) * 100;

                const bhytHeightPercent = activeMetric === 'revenue'
                  ? (d.bhytRevenue / maxRevenue) * 100
                  : (d.bhytPatients / maxPatients) * 100;

                return (
                  <div key={idx} className="flex flex-col items-center h-full justify-end group">
                    <div className="text-[11px] font-bold text-slate-800 mb-2 opacity-90 group-hover:text-sky-600 transition-colors">
                      {activeMetric === 'revenue' ? `${d.totalRevenue} Tr` : `${d.totalPatients} BN`}
                    </div>

                    <div className="w-full max-w-[64px] bg-slate-100 rounded-t-xl overflow-hidden relative flex flex-col justify-end" style={{ height: `${heightPercent}%` }}>
                      {/* Main Bar */}
                      <div className="w-full bg-sky-500 h-full rounded-t-xl group-hover:bg-sky-600 transition-colors" />
                      {/* BHYT Overlay */}
                      <div 
                        className="w-full bg-indigo-600/80 absolute bottom-0 left-0 rounded-t-sm" 
                        style={{ height: `${(bhytHeightPercent / heightPercent) * 100}%` }}
                        title={`BHYT: ${activeMetric === 'revenue' ? d.bhytRevenue : d.bhytPatients}`}
                      />
                    </div>

                    <div className="text-xs font-semibold text-slate-600 mt-3">
                      {d.month}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-center gap-6 mt-4 text-xs font-semibold text-slate-600">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-xs bg-sky-500" /> Tổng {activeMetric === 'revenue' ? 'Doanh Thu' : 'Bệnh Nhân'}
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-xs bg-indigo-600/80" /> Phần BHYT
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
