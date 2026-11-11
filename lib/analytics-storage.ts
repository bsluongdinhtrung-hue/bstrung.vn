import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { BASELINE_COUNTERS, BASELINE_TOTAL_VIEWS, BASELINE_TOTAL_CLICKS } from './firebase';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://wxdpzmjbhqjggqvyxguh.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_oQW8IYMr1MT-LmvFIpVWhA_8a9Ey__z';

let supabaseClient: SupabaseClient | null = null;

function getSupabase(): SupabaseClient {
  if (!supabaseClient) {
    supabaseClient = createClient(supabaseUrl, supabaseKey);
  }
  return supabaseClient;
}

export interface StoredSummary {
  totalPageViews: number;
  totalClicks: number;
  updatedAt: string;
  items: Record<string, {
    id: string;
    label: string;
    category: string;
    clicks: number;
    lastClickedAt: string;
  }>;
}

export interface StoredEvent {
  id: string;
  eventType: string;
  targetId: string;
  targetLabel: string;
  category: string;
  deviceType: string;
  timestamp: string;
}

export interface StoredDaily {
  [dateStr: string]: {
    date: string;
    pageViews: number;
    clicks: number;
    clicksByTarget: Record<string, number>;
    deviceBreakdown: {
      mobile: number;
      desktop: number;
      tablet: number;
    };
  };
}

// 1. Get or Init Summary
export async function getAnalyticsSummary(): Promise<StoredSummary> {
  try {
    const sb = getSupabase();
    const { data } = await sb
      .from('bstrung_articles')
      .select('content')
      .eq('slug', 'bstrung_analytics_summary')
      .single();

    if (data?.content) {
      return JSON.parse(data.content);
    }
  } catch (e) {
    console.warn('Error reading summary from Supabase:', e);
  }

  return {
    totalPageViews: 0,
    totalClicks: 0,
    updatedAt: new Date().toISOString(),
    items: {},
  };
}

// 2. Save Summary
export async function saveAnalyticsSummary(summary: StoredSummary): Promise<void> {
  try {
    const sb = getSupabase();
    await sb.from('bstrung_articles').upsert({
      slug: 'bstrung_analytics_summary',
      title: 'Analytics Data Store',
      category: 'system',
      priority_order: 999,
      content: JSON.stringify(summary),
      is_active: false,
      updated_at: new Date().toISOString(),
    }, { onConflict: 'slug' });
  } catch (e) {
    console.error('Error saving summary to Supabase:', e);
  }
}

// 3. Get Recent Events
export async function getRecentEvents(): Promise<StoredEvent[]> {
  try {
    const sb = getSupabase();
    const { data } = await sb
      .from('bstrung_articles')
      .select('content')
      .eq('slug', 'bstrung_analytics_events')
      .single();

    if (data?.content) {
      return JSON.parse(data.content);
    }
  } catch (e) {
    console.warn('Error reading events from Supabase:', e);
  }
  return [];
}

// 4. Record Event
export async function recordEvent(event: Omit<StoredEvent, 'id'>): Promise<void> {
  try {
    const sb = getSupabase();
    const dateStr = event.timestamp.split('T')[0];
    const newEvent: StoredEvent = {
      id: `${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      ...event,
    };

    // Update Summary
    const summary = await getAnalyticsSummary();
    if (event.eventType === 'page_view') {
      summary.totalPageViews = (summary.totalPageViews || 0) + 1;
    } else {
      summary.totalClicks = (summary.totalClicks || 0) + 1;
      const tId = event.targetId;
      if (!summary.items[tId]) {
        summary.items[tId] = {
          id: tId,
          label: event.targetLabel,
          category: event.category,
          clicks: 0,
          lastClickedAt: event.timestamp,
        };
      }
      summary.items[tId].clicks = (summary.items[tId].clicks || 0) + 1;
      summary.items[tId].lastClickedAt = event.timestamp;
    }
    summary.updatedAt = new Date().toISOString();
    await saveAnalyticsSummary(summary);

    // Update Events list (keep last 50)
    const events = await getRecentEvents();
    events.unshift(newEvent);
    const trimmedEvents = events.slice(0, 50);

    await sb.from('bstrung_articles').upsert({
      slug: 'bstrung_analytics_events',
      title: 'Analytics Events Log',
      category: 'system',
      priority_order: 998,
      content: JSON.stringify(trimmedEvents),
      is_active: false,
      updated_at: new Date().toISOString(),
    }, { onConflict: 'slug' });

    // Update Daily Stats
    const { data: dailyData } = await sb
      .from('bstrung_articles')
      .select('content')
      .eq('slug', 'bstrung_analytics_daily')
      .single();

    const daily: StoredDaily = dailyData?.content ? JSON.parse(dailyData.content) : {};
    if (!daily[dateStr]) {
      daily[dateStr] = {
        date: dateStr,
        pageViews: 0,
        clicks: 0,
        clicksByTarget: {},
        deviceBreakdown: { mobile: 0, desktop: 0, tablet: 0 },
      };
    }

    const dev = event.deviceType as 'mobile' | 'desktop' | 'tablet';
    if (event.eventType === 'page_view') {
      daily[dateStr].pageViews = (daily[dateStr].pageViews || 0) + 1;
    } else {
      daily[dateStr].clicks = (daily[dateStr].clicks || 0) + 1;
      daily[dateStr].clicksByTarget[event.targetId] = (daily[dateStr].clicksByTarget[event.targetId] || 0) + 1;
    }
    if (daily[dateStr].deviceBreakdown[dev] !== undefined) {
      daily[dateStr].deviceBreakdown[dev] = (daily[dateStr].deviceBreakdown[dev] || 0) + 1;
    }

    await sb.from('bstrung_articles').upsert({
      slug: 'bstrung_analytics_daily',
      title: 'Analytics Daily Stats',
      category: 'system',
      priority_order: 997,
      content: JSON.stringify(daily),
      is_active: false,
      updated_at: new Date().toISOString(),
    }, { onConflict: 'slug' });
  } catch (e) {
    console.error('Error recording event:', e);
  }
}

// 5. Get Daily Stats (Last 7 days)
export async function getDailyStatsList(): Promise<any[]> {
  try {
    const sb = getSupabase();
    const { data } = await sb
      .from('bstrung_articles')
      .select('content')
      .eq('slug', 'bstrung_analytics_daily')
      .single();

    if (data?.content) {
      const daily: StoredDaily = JSON.parse(data.content);
      const keys = Object.keys(daily).sort();
      return keys.slice(-7).map((k) => daily[k]);
    }
  } catch (e) {
    console.warn('Error reading daily stats:', e);
  }
  return [];
}
