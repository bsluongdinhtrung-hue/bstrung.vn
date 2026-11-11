'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { trackClick as baseTrackClick } from '@/lib/tracker';

export interface AnalyticsContextType {
  counters: Record<string, number>;
  incrementCounter: (targetId: string, targetLabel: string, category?: string) => void;
  getDisplayCount: (targetId: string, fallback: number) => string;
}

const AnalyticsContext = createContext<AnalyticsContextType>({
  counters: {},
  incrementCounter: () => {},
  getDisplayCount: (_id, fallback) => `${fallback.toLocaleString('vi-VN')}+`,
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

  const getDisplayCount = (targetId: string, fallback: number): string => {
    const val = counters[targetId] !== undefined ? counters[targetId] : fallback;
    return `${val.toLocaleString('vi-VN')}+`;
  };

  return (
    <AnalyticsContext.Provider value={{ counters, incrementCounter, getDisplayCount }}>
      {children}
    </AnalyticsContext.Provider>
  );
}

export function useAnalytics() {
  return useContext(AnalyticsContext);
}
