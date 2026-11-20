// ============================================================
//  Neonatal Nursing LMS — configuration (XAMPP + Offline/Online)
// ============================================================
//  Place this folder in XAMPP: C:\xampp\htdocs\lms\
//  Access via: http://localhost/lms/
// ============================================================

window.LMS_CONFIG = {
  API_URL: 'https://script.google.com/macros/s/AKfycby3GsOpDOZnMFIjNHBMO2CMYrL6J7B1QsgO19rl1CyOeBb7dcNrKywRocWlbT199AqWPw/exec',

  COURSE_TITLE: 'Neonatal Nursing',
  PASS_THRESHOLD: 80,

  OFFLINE: {
    ENABLED: true,
    SERVICE_WORKER: 'sw.js',          // relative to http://localhost/lms/
    CACHE_VERSION: 'lms-v3',          // must match CACHE in sw.js
    QUEUE_MAX_ITEMS: 200,
    QUEUE_MAX_RETRIES: 5,
    SYNC_BATCH_SIZE: 25,
    SYNC_INTERVAL_MS: 30000,
    PING_INTERVAL_MS: 60000
  }
};
