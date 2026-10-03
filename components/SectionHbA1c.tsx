'use client';

import React, { useState, useMemo, useRef } from 'react';
import * as XLSX from 'xlsx';
import { 
  Activity, 
  Upload, 
  FileSpreadsheet, 
  Search, 
  CheckCircle, 
  AlertTriangle, 
  Clock, 
  Copy, 
  Check, 
  TrendingDown, 
  TrendingUp, 
  Minus, 
  User, 
  Sparkles,
  RefreshCw,
  Info
} from 'lucide-react';

interface PatientRecord {
  date: Date;
  hba1c: number;
  unit: string;
}

interface Patient {
  id: string;
  name: string;
  sex: string;
  dob: string | number;
  records: PatientRecord[];
  latestRecord: PatientRecord;
  previousRecord: PatientRecord | null;
  group: {
    key: 'good' | 'caution' | 'poor' | 'alarm';
    label: string;
    range: string;
    color: string;
    text: string;
    bg: string;
  };
  trend: 'improved' | 'stable' | 'worsened' | 'unknown';
  isLate: boolean;
  unit: string;
}

// Demo data for instant testing
const DEMO_PATIENTS: Patient[] = [
  {
    id: 'BN001',
    name: 'Nguyễn Văn An',
    sex: 'Nam',
    dob: 1965,
    records: [
      { date: new Date(2025, 6, 10), hba1c: 7.8, unit: 'Nội tiết' },
      { date: new Date(2025, 10, 15), hba1c: 6.8, unit: 'Nội tiết' },
    ],
    latestRecord: { date: new Date(2025, 10, 15), hba1c: 6.8, unit: 'Nội tiết' },
    previousRecord: { date: new Date(2025, 6, 10), hba1c: 7.8, unit: 'Nội tiết' },
    group: { key: 'good', label: 'Tốt', range: 'HbA1c ≤ 7.0', color: '#059669', text: 'text-emerald-700', bg: 'bg-emerald-50' },
    trend: 'improved',
    isLate: false,
    unit: 'Nội tiết',
  },
  {
    id: 'BN002',
    name: 'Trần Thị Bình',
    sex: 'Nữ',
    dob: 1958,
    records: [
      { date: new Date(2025, 5, 20), hba1c: 7.2, unit: 'KBTYC' },
      { date: new Date(2025, 9, 25), hba1c: 8.1, unit: 'KBTYC' },
    ],
    latestRecord: { date: new Date(2025, 9, 25), hba1c: 8.1, unit: 'KBTYC' },
    previousRecord: { date: new Date(2025, 5, 20), hba1c: 7.2, unit: 'KBTYC' },
    group: { key: 'caution', label: 'Lưu ý', range: '7.0 < HbA1c ≤ 8.5', color: '#d97706', text: 'text-amber-700', bg: 'bg-amber-50' },
    trend: 'worsened',
    isLate: true,
    unit: 'KBTYC',
  },
  {
    id: 'BN003',
    name: 'Lê Hoàng Cường',
    sex: 'Nam',
    dob: 1972,
    records: [
      { date: new Date(2025, 8, 5), hba1c: 9.2, unit: 'Nội tiết' },
    ],
    latestRecord: { date: new Date(2025, 8, 5), hba1c: 9.2, unit: 'Nội tiết' },
    previousRecord: null,
    group: { key: 'poor', label: 'Kém', range: '8.5 < HbA1c < 10.0', color: '#ea580c', text: 'text-orange-700', bg: 'bg-orange-50' },
    trend: 'unknown',
    isLate: true,
    unit: 'Nội tiết',
  },
  {
    id: 'BN004',
    name: 'Phạm Minh Đức',
    sex: 'Nam',
    dob: 1960,
    records: [
      { date: new Date(2025, 7, 12), hba1c: 10.5, unit: 'KBTYC' },
      { date: new Date(2025, 11, 2), hba1c: 11.2, unit: 'KBTYC' },
    ],
    latestRecord: { date: new Date(2025, 11, 2), hba1c: 11.2, unit: 'KBTYC' },
    previousRecord: { date: new Date(2025, 7, 12), hba1c: 10.5, unit: 'KBTYC' },
    group: { key: 'alarm', label: 'Báo động', range: 'HbA1c ≥ 10.0', color: '#dc2626', text: 'text-red-700', bg: 'bg-red-50' },
    trend: 'worsened',
    isLate: false,
    unit: 'KBTYC',
  },
];

const getGroup = (val: number) => {
  if (val <= 7.0) return { key: 'good' as const, label: 'Tốt', range: 'HbA1c ≤ 7.0', color: '#059669', text: 'text-emerald-700', bg: 'bg-emerald-50' };
  if (val <= 8.5) return { key: 'caution' as const, label: 'Lưu ý', range: '7.0 < HbA1c ≤ 8.5', color: '#d97706', text: 'text-amber-700', bg: 'bg-amber-50' };
  if (val < 10) return { key: 'poor' as const, label: 'Kém', range: '8.5 < HbA1c < 10.0', color: '#ea580c', text: 'text-orange-700', bg: 'bg-orange-50' };
  return { key: 'alarm' as const, label: 'Báo động', range: 'HbA1c ≥ 10.0', color: '#dc2626', text: 'text-red-700', bg: 'bg-red-50' };
};

const getTrend = (current: number, previous: number | null) => {
  if (previous === null) return 'unknown' as const;
  const diff = current - previous;
  if (diff < -0.5) return 'improved' as const;
  if (diff > 0.5) return 'worsened' as const;
  return 'stable' as const;
};

const parseDate = (dateVal: any): Date | null => {
  if (!dateVal) return null;
  if (typeof dateVal === 'number') {
    return new Date((dateVal - (25567 + 2)) * 86400 * 1000);
  }
  const s = dateVal.toString().trim();
  const parts = s.match(/^(\d{1,2})[/\.-](\d{1,2})[/\.-](\d{4})/);
  if (parts) return new Date(Number(parts[3]), Number(parts[2]) - 1, Number(parts[1]));
  const parsed = new Date(s);
  return isNaN(parsed.getTime()) ? null : parsed;
};

export default function SectionHbA1c() {
  const [patients, setPatients] = useState<Patient[]>(DEMO_PATIENTS);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroupFilter, setSelectedGroupFilter] = useState<string>('all');
  const [copiedZalo, setCopiedZalo] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // File Upload Handler (Browser-only processing)
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    const reader = new FileReader();

    reader.onload = (evt) => {
      try {
        const wb = XLSX.read(evt.target?.result, { type: 'binary' });
        const ws = wb.Sheets[wb.SheetNames[0]];
        const json: any[] = XLSX.utils.sheet_to_json(ws);

        const patientMap: Record<string, any> = {};

        json.forEach((row) => {
          const id = row['Mã Y Tế'] || row['MaYT'] || row['ID'];
          const hba1c = parseFloat(row['HbA1C'] || row['HBA1C'] || row['KetQua']);
          const date = parseDate(row['Thời gian chỉ định'] || row['NgayXN'] || row['Date']);
          const name = row['Họ tên'] || row['HoTen'] || 'Bệnh nhân';
          const sex = row['Giới tính'] || row['GioiTinh'] || 'Khác';
          const dob = row['Năm sinh'] || row['NamSinh'] || '';
          const unit = row['Đơn vị'] || row['Khoa'] || 'Nội trú';

          if (!id || isNaN(hba1c) || !date) return;

          if (!patientMap[id]) {
            patientMap[id] = { id, name, sex, dob, records: [] };
          }
          patientMap[id].records.push({ date, hba1c, unit });
        });

        const analyzedList: Patient[] = Object.values(patientMap).map((p: any) => {
          p.records.sort((a: any, b: any) => a.date.getTime() - b.date.getTime());
          const latest = p.records[p.records.length - 1];
          const prev = p.records.length >= 2 ? p.records[p.records.length - 2] : null;

          const group = getGroup(latest.hba1c);
          const trend = getTrend(latest.hba1c, prev ? prev.hba1c : null);
          const days = (Date.now() - latest.date.getTime()) / (86400000);
          const isLate = days > 120;

          return {
            ...p,
            latestRecord: latest,
            previousRecord: prev,
            group,
            trend,
            isLate,
            unit: latest.unit,
          };
        });

        if (analyzedList.length > 0) {
          setPatients(analyzedList);
        } else {
          alert('Không tìm thấy dữ liệu hợp lệ (Cần có cột: Mã Y Tế, HbA1C, Thời gian chỉ định)');
        }
      } catch (err) {
        console.error(err);
        alert('Lỗi đọc file Excel. Vui lòng kiểm tra lại định dạng file!');
      }
    };

    reader.readAsBinaryString(file);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // Stats calculation
  const stats = useMemo(() => {
    let good = 0, caution = 0, poor = 0, alarm = 0, late = 0;
    patients.forEach((p) => {
      if (p.group.key === 'good') good++;
      else if (p.group.key === 'caution') caution++;
      else if (p.group.key === 'poor') poor++;
      else if (p.group.key === 'alarm') alarm++;
      if (p.isLate) late++;
    });
    return { total: patients.length, good, caution, poor, alarm, late };
  }, [patients]);

  // Filtered patients
  const filteredPatients = useMemo(() => {
    return patients.filter((p) => {
      const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchGroup = selectedGroupFilter === 'all' || p.group.key === selectedGroupFilter || (selectedGroupFilter === 'late' && p.isLate);
      return matchSearch && matchGroup;
    });
  }, [patients, searchTerm, selectedGroupFilter]);

  // Copy Zalo message summary
  const copyZaloSummary = () => {
    const text = `📊 BÁO CÁO PHÂN TẦNG QUẢN LÝ HbA1c (BS. TRUNG)\n` +
      `- Tổng số bệnh nhân theo dõi: ${stats.total}\n` +
      `✅ Kiểm soát Tốt (≤ 7.0%): ${stats.good} BN (${stats.total ? ((stats.good/stats.total)*100).toFixed(1) : 0}%)\n` +
      `⚠️ Cần lưu ý (7.0 - 8.5%): ${stats.caution} BN\n` +
      `🟠 Kiểm soát kém (8.5 - 10%): ${stats.poor} BN\n` +
      `🚨 Mức Báo Động (≥ 10.0%): ${stats.alarm} BN\n` +
      `⏰ Trễ hẹn tái khám (>120 ngày): ${stats.late} BN\n` +
      `---\nTra cứu trực tuyến tại: bstrung.vn`;
    navigator.clipboard.writeText(text);
    setCopiedZalo(true);
    setTimeout(() => setCopiedZalo(false), 2500);
  };

  return (
    <section id="hba1c" className="py-16 bg-white border-b border-slate-200/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-slate-100 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold mb-3">
              <Activity className="w-3.5 h-3.5 text-red-600" />
              <span>Chuyên Mục Trọng Tâm Số 3 • Ứng Dụng Lâm Sàng</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Dashboard Quản Lý & Phân Tầng HbA1c
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-1 max-w-3xl">
              Hệ thống phân tầng bệnh nhân đái tháo đường tự động theo khuyến cáo lâm sàng, 
              theo dõi xu hướng dao động đường huyết và cảnh báo bệnh nhân quá hạn tái khám.
            </p>
          </div>

          {/* Action Upload & Reset */}
          <div className="flex items-center gap-2.5 shrink-0">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept=".xlsx,.xls,.csv"
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs shadow-md shadow-sky-600/20 transition-all"
            >
              <Upload className="w-4 h-4" />
              <span>Tải file Excel BN</span>
            </button>
            <button
              onClick={copyZaloSummary}
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs border border-slate-200 transition-colors"
              title="Sao chép báo cáo gửi Zalo"
            >
              {copiedZalo ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copiedZalo ? 'Đã chép Zalo' : 'Xuất tin Zalo'}</span>
            </button>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mb-8 p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 flex items-center justify-between text-xs text-emerald-900">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              <strong>Bảo mật y tế 100%:</strong> Dữ liệu Excel được xử lý trực tiếp trên trình duyệt của bạn (Client-Side). 
              Không có bất kỳ dữ liệu bệnh nhân nào được lưu trữ hay gửi lên máy chủ internet.
            </span>
          </div>
          <span className="hidden sm:inline-block font-semibold text-emerald-700">Dữ liệu mẫu đang hiển thị</span>
        </div>

        {/* KPI Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-8">
          
          <div 
            onClick={() => setSelectedGroupFilter('all')}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              selectedGroupFilter === 'all' ? 'bg-sky-50 border-sky-400 ring-2 ring-sky-200' : 'bg-white border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="text-[11px] font-bold text-slate-500 uppercase">Tổng bệnh nhân</div>
            <div className="text-2xl font-black text-slate-900 mt-1">{stats.total}</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Tất cả hồ sơ</div>
          </div>

          <div 
            onClick={() => setSelectedGroupFilter('good')}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              selectedGroupFilter === 'good' ? 'bg-emerald-50 border-emerald-400 ring-2 ring-emerald-200' : 'bg-white border-slate-200 hover:border-emerald-200'
            }`}
          >
            <div className="text-[11px] font-bold text-emerald-700 uppercase flex items-center gap-1">
              <CheckCircle className="w-3 h-3" /> Tốt (≤ 7.0)
            </div>
            <div className="text-2xl font-black text-emerald-700 mt-1">{stats.good}</div>
            <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">
              {stats.total ? ((stats.good / stats.total) * 100).toFixed(1) : 0}% BN
            </div>
          </div>

          <div 
            onClick={() => setSelectedGroupFilter('caution')}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              selectedGroupFilter === 'caution' ? 'bg-amber-50 border-amber-400 ring-2 ring-amber-200' : 'bg-white border-slate-200 hover:border-amber-200'
            }`}
          >
            <div className="text-[11px] font-bold text-amber-700 uppercase flex items-center gap-1">
              <AlertTriangle className="w-3 h-3" /> Lưu ý (7 - 8.5)
            </div>
            <div className="text-2xl font-black text-amber-700 mt-1">{stats.caution}</div>
            <div className="text-[10px] text-amber-600 font-semibold mt-0.5">
              {stats.total ? ((stats.caution / stats.total) * 100).toFixed(1) : 0}% BN
            </div>
          </div>

          <div 
            onClick={() => setSelectedGroupFilter('poor')}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              selectedGroupFilter === 'poor' ? 'bg-orange-50 border-orange-400 ring-2 ring-orange-200' : 'bg-white border-slate-200 hover:border-orange-200'
            }`}
          >
            <div className="text-[11px] font-bold text-orange-700 uppercase flex items-center gap-1">
              <AlertTriangle className="w-3 h-3" /> Kém (8.5 - 10)
            </div>
            <div className="text-2xl font-black text-orange-700 mt-1">{stats.poor}</div>
            <div className="text-[10px] text-orange-600 font-semibold mt-0.5">
              {stats.total ? ((stats.poor / stats.total) * 100).toFixed(1) : 0}% BN
            </div>
          </div>

          <div 
            onClick={() => setSelectedGroupFilter('alarm')}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              selectedGroupFilter === 'alarm' ? 'bg-red-50 border-red-400 ring-2 ring-red-200' : 'bg-white border-slate-200 hover:border-red-200'
            }`}
          >
            <div className="text-[11px] font-bold text-red-700 uppercase flex items-center gap-1">
              <AlertTriangle className="w-3 h-3" /> Báo động (≥ 10)
            </div>
            <div className="text-2xl font-black text-red-700 mt-1">{stats.alarm}</div>
            <div className="text-[10px] text-red-600 font-semibold mt-0.5">
              {stats.total ? ((stats.alarm / stats.total) * 100).toFixed(1) : 0}% BN
            </div>
          </div>

          <div 
            onClick={() => setSelectedGroupFilter('late')}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              selectedGroupFilter === 'late' ? 'bg-purple-50 border-purple-400 ring-2 ring-purple-200' : 'bg-white border-slate-200 hover:border-purple-200'
            }`}
          >
            <div className="text-[11px] font-bold text-purple-700 uppercase flex items-center gap-1">
              <Clock className="w-3 h-3" /> Trễ hẹn (&gt;120d)
            </div>
            <div className="text-2xl font-black text-purple-700 mt-1">{stats.late}</div>
            <div className="text-[10px] text-purple-600 font-semibold mt-0.5">Cần nhắc khám</div>
          </div>

        </div>

        {/* Visual Distribution Bar */}
        <div className="mb-8 p-5 bg-slate-50 rounded-2xl border border-slate-200">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
            <span>Biểu đồ Phân bổ Tình trạng HbA1c</span>
            <span className="text-slate-400 font-normal">Cập nhật tự động theo danh sách</span>
          </div>

          <div className="h-4 w-full bg-slate-200 rounded-full overflow-hidden flex shadow-inner">
            {stats.total > 0 ? (
              <>
                <div style={{ width: `${(stats.good / stats.total) * 100}%` }} className="bg-emerald-500 transition-all duration-500" title={`Tốt: ${stats.good}`} />
                <div style={{ width: `${(stats.caution / stats.total) * 100}%` }} className="bg-amber-400 transition-all duration-500" title={`Lưu ý: ${stats.caution}`} />
                <div style={{ width: `${(stats.poor / stats.total) * 100}%` }} className="bg-orange-500 transition-all duration-500" title={`Kém: ${stats.poor}`} />
                <div style={{ width: `${(stats.alarm / stats.total) * 100}%` }} className="bg-red-500 transition-all duration-500" title={`Báo động: ${stats.alarm}`} />
              </>
            ) : null}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 mt-3 text-xs text-slate-600 font-medium">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Tốt ({stats.good})</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> Lưu ý ({stats.caution})</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500" /> Kém ({stats.poor})</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-500" /> Báo động ({stats.alarm})</span>
          </div>
        </div>

        {/* Patient Table & Search */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          
          <div className="p-4 sm:p-5 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Tìm theo Tên bệnh nhân hoặc Mã Y Tế..."
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
              />
            </div>
            
            <div className="text-xs text-slate-500 font-medium flex items-center gap-2">
              <span>Đang hiển thị: <strong className="text-slate-800">{filteredPatients.length}</strong> / {patients.length} BN</span>
              {selectedGroupFilter !== 'all' && (
                <button
                  onClick={() => setSelectedGroupFilter('all')}
                  className="text-sky-600 hover:underline font-semibold"
                >
                  (Xóa bộ lọc)
                </button>
              )}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50/80 text-slate-600 font-bold uppercase text-[11px] border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Mã Y Tế</th>
                  <th className="py-3 px-4">Họ và Tên</th>
                  <th className="py-3 px-4">Giới / NS</th>
                  <th className="py-3 px-4">HbA1c Gần Nhất</th>
                  <th className="py-3 px-4">Tình Trạng</th>
                  <th className="py-3 px-4">Xu Hướng</th>
                  <th className="py-3 px-4">Ngày XN / Hạn Khám</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredPatients.length > 0 ? (
                  filteredPatients.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3 px-4 font-mono font-semibold text-slate-900">{p.id}</td>
                      <td className="py-3 px-4 font-medium text-slate-900">{p.name}</td>
                      <td className="py-3 px-4 text-slate-500">{p.sex} • {p.dob}</td>
                      <td className="py-3 px-4">
                        <span className="font-extrabold text-base text-slate-900">{p.latestRecord.hba1c}%</span>
                        {p.previousRecord && (
                          <span className="text-[11px] text-slate-400 block">Lần trước: {p.previousRecord.hba1c}%</span>
                        )}
                      </td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold ${p.group.bg} ${p.group.text} border border-current/20`}>
                          {p.group.label}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        {p.trend === 'improved' && (
                          <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold text-xs">
                            <TrendingDown className="w-3.5 h-3.5" /> Giảm (Tốt)
                          </span>
                        )}
                        {p.trend === 'worsened' && (
                          <span className="inline-flex items-center gap-1 text-red-600 font-semibold text-xs">
                            <TrendingUp className="w-3.5 h-3.5" /> Tăng (Kém)
                          </span>
                        )}
                        {p.trend === 'stable' && (
                          <span className="inline-flex items-center gap-1 text-slate-500 font-semibold text-xs">
                            <Minus className="w-3.5 h-3.5" /> Ổn định
                          </span>
                        )}
                        {p.trend === 'unknown' && (
                          <span className="text-slate-400 text-xs">XN lần đầu</span>
                        )}
                      </td>
                      <td className="py-3 px-4">
                        <div className="text-slate-700">
                          {p.latestRecord.date.toLocaleDateString('vi-VN')}
                        </div>
                        {p.isLate ? (
                          <span className="inline-block mt-0.5 px-2 py-0.2 rounded-sm text-[10px] font-bold bg-purple-100 text-purple-700">
                            Quá hạn &gt;120 ngày
                          </span>
                        ) : (
                          <span className="text-[11px] text-slate-400">Đúng hạn</span>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="py-8 text-center text-slate-400 text-sm">
                      Không tìm thấy bệnh nhân phù hợp với từ khóa tìm kiếm.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </section>
  );
}
