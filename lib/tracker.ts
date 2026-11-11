'use client';

export function getDeviceType(): 'mobile' | 'tablet' | 'desktop' {
  if (typeof window === 'undefined') return 'desktop';
  const ua = navigator.userAgent.toLowerCase();
  if (/ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk/i.test(ua)) {
    return 'tablet';
  }
  if (/mobi|iphone|ipod|android|blackberry|opera mini|iemobile|mobile/i.test(ua)) {
    return 'mobile';
  }
  return 'desktop';
}

export function trackEvent(
  eventType: 'page_view' | 'click',
  targetId: string,
  targetLabel: string,
  category: string = 'handbook'
) {
  if (typeof window === 'undefined') return;

  const payload = {
    eventType,
    targetId,
    targetLabel,
    category,
    deviceType: getDeviceType(),
  };

  try {
    const dataStr = JSON.stringify(payload);
    if (navigator.sendBeacon) {
      const blob = new Blob([dataStr], { type: 'application/json' });
      navigator.sendBeacon('/api/track', blob);
    } else {
      fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: dataStr,
        keepalive: true,
      }).catch(() => {});
    }
  } catch (e) {
    // Fail silently without disrupting user experience
  }
}

export function trackClick(targetId: string, targetLabel: string, category: string = 'handbook') {
  trackEvent('click', targetId, targetLabel, category);
}

export function trackPageView(pageName: string = 'home_page') {
  trackEvent('page_view', pageName, 'Trang chủ bstrung.vn', 'page_view');
}
