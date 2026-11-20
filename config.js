// ============================================================
//  Neonatal Nursing LMS — configuration (XAMPP + Offline/Online)
// ============================================================

window.LMS_CONFIG = {
  API_URL: 'https://script.google.com/macros/s/AKfycby3GsOpDOZnMFIjNHBMO2CMYrL6J7B1QsgO19rl1CyOeBb7dcNrKywRocWlbT199AqWPw/exec',

  COURSE_TITLE: 'Neonatal Nursing',
  PASS_THRESHOLD: 80,

  EXAMS: {
    MIDTERM_TITLE: 'Midterm Theory Examination (30 MCQs · Modules 1–3)',
    FINAL_TITLE: 'Final Comprehensive Examination (40 MCQs · Modules 1–6)',
    MIDTERM_PASSCODE: 'MIDTERM2026',
    FINAL_PASSCODE: 'FINAL2026'
  },

  OFFLINE: {
    ENABLED: true,
    SERVICE_WORKER: 'sw.js',
    CACHE_VERSION: 'lms-v4',          // must match CACHE in sw.js
    QUEUE_MAX_ITEMS: 200,
    QUEUE_MAX_RETRIES: 5,
    SYNC_BATCH_SIZE: 25,
    SYNC_INTERVAL_MS: 30000,
    PING_INTERVAL_MS: 60000
  }
};
