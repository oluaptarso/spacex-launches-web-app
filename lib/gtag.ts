export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;
export const OPTIMIZE_ID = process.env.NEXT_PUBLIC_OPTIMIZE_ID;

/**
 * This function is used to track page views.
 * https://developers.google.com/analytics/devguides/collection/gtagjs/pages
 * */
export const pageView = (url: URL) => {
  console.log("pageView", url);
  window.gtag("config", GA_TRACKING_ID as string, {
    page_path: url,
    optimize_id: OPTIMIZE_ID as string
  });
};

/**
 * https://developers.google.com/analytics/devguides/collection/gtagjs/events
 * If you want to track events, you can use the gtag.js event method.
 * */
export const event = (
  action: Gtag.EventNames,
  { event_category, event_label, value }: Gtag.EventParams
) => {
  window.gtag("event", action, {
    event_category,
    event_label,
    value,
  });
};
