import { initializeApp, getApps, cert, App } from 'firebase-admin/app';
import { getFirestore, Firestore } from 'firebase-admin/firestore';

let app: App;
let db: Firestore;

export interface AnalyticsCounterItem {
  id: string;
  label: string;
  category: 'handbook' | 'clinical' | 'consultation' | 'page_view' | 'other';
  clicks: number;
  lastClickedAt: string;
}

export interface AnalyticsSummary {
  totalPageViews: number;
  totalClicks: number;
  uniqueVisitorsEstimate: number;
  updatedAt: string;
  items: Record<string, AnalyticsCounterItem>;
}

export interface AnalyticsEvent {
  id?: string;
  eventType: 'page_view' | 'click';
  targetId: string;
  targetLabel: string;
  category: string;
  deviceType: 'mobile' | 'tablet' | 'desktop' | 'unknown';
  timestamp: string;
  date: string; // YYYY-MM-DD
}

export interface DailyStats {
  date: string; // YYYY-MM-DD
  pageViews: number;
  clicks: number;
  clicksByTarget: Record<string, number>;
  deviceBreakdown: {
    mobile: number;
    desktop: number;
    tablet: number;
  };
  updatedAt: string;
}

export const BASELINE_COUNTERS: Record<string, number> = {
  'so-tay-dinh-duong': 1280,
  'noi-khoa-icu': 1450,
  'tuong-tac-thuoc': 1120,
  'xet-nghiem-si': 980,
  'thang-diem': 870,
  'cham-soc-nhi-khoa': 760,
  'gia-dvkt-dau-thau': 640,
  'zalo-consult': 350,
};

export const BASELINE_TOTAL_VIEWS = 8420;
export const BASELINE_TOTAL_CLICKS = 6850;

export function getFirebaseAdmin(): { app: App; db: Firestore } {
  if (!getApps().length) {
    const credBase64 = process.env.GOOGLE_CREDENTIALS_BASE64;
    if (!credBase64) {
      throw new Error('GOOGLE_CREDENTIALS_BASE64 is missing in environment variables');
    }
    const credJson = JSON.parse(Buffer.from(credBase64, 'base64').toString('utf-8'));
    app = initializeApp({
      credential: cert(credJson),
    });
  } else {
    app = getApps()[0];
  }

  if (!db) {
    db = getFirestore(app);
  }

  return { app, db };
}
