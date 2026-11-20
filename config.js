// ============================================================
//  Neonatal Nursing LMS — configuration
// ============================================================
//  ⚠ EDIT THIS FILE BEFORE USING THE APP ⚠
//
//  1. Deploy your Code.gs as a Web App:
//       Deploy → New deployment → Web app
//         Execute as:  Me
//         Who has access:  Anyone
//
//  2. Copy the /exec URL (ends with "/exec", NOT "/dev")
//     and paste it into API_URL below.
// ============================================================

window.LMS_CONFIG = {
  // Example: 'https://script.google.com/macros/s/AKfycb.../exec'
  API_URL: 'PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE',

  COURSE_TITLE: 'Neonatal Nursing',
  PASS_THRESHOLD: 80,

  OFFLINE: {
    ENABLED: true,
    SERVICE_WORKER: 'sw.js',          // relative to this folder
    CACHE_VERSION: 'lms-v2',          // must match CACHE in sw.js
    QUEUE_MAX_ITEMS: 200,
    QUEUE_MAX_RETRIES: 5,
    SYNC_BATCH_SIZE: 25,
    SYNC_INTERVAL_MS: 30000,
    PING_INTERVAL_MS: 60000
  }
};
