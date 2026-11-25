'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { trackClick as baseTrackClick } from '@/lib/tracker';

export interface AnalyticsContextType {
  counters: Record<string, number>;
  incrementCounter: (targetId: string, targetLabel: string, category?: string) => void;
  getDisplayCount: (targetId: string, fallback: number) => string;
  isCountPublic: (targetId: string) => boolean;
}

// Dưới ngưỡng này bộ đếm bị ẩn: số quá nhỏ làm trang trông vắng người dùng.
const MIN_PUBLIC_COUNT = 50;

const AnalyticsContext = createContext<AnalyticsContextType>({
  counters: {},
  incrementCounter: () => {},
  getDisplayCount: (_id, fallback) => `${fallback.toLocaleString('vi-VN')}`,
  isCountPublic: () => false,
});

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const [counters, setCounters] = useState<Record<string, number>>({});

  useEffect(() => {
    // Fetch live counters from server
    fetch('/api/analytics/summary')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.counters) {
          setCounters(data.counters);
        }
      })
      .catch(() => {});
  }, []);

  const incrementCounter = (targetId: string, targetLabel: string, category: string = 'clinical') => {
    // 1. Instantly update UI counter locally (+1)
    setCounters((prev) => {
      const current = prev[targetId] || 0;
      return {
        ...prev,
        [targetId]: current + 1,
      };
    });

    // 2. Send track beacon to server
    baseTrackClick(targetId, targetLabel, category);
  };

  const getDisplayCount = (targetId: string, fallback: number = 0): string => {
    const val = counters[targetId] !== undefined ? counters[targetId] : fallback;
    return `${val.toLocaleString('vi-VN')}`;
  };

  const isCountPublic = (targetId: string): boolean => (counters[targetId] ?? 0) >= MIN_PUBLIC_COUNT;

  return (
    <AnalyticsContext.Provider value={{ counters, incrementCounter, getDisplayCount, isCountPublic }}>
      {children}
    </AnalyticsContext.Provider>
  );
}

export function useAnalytics() {
  return useContext(AnalyticsContext);
}
