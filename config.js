// ============================================================
//  Neonatal Nursing LMS — configuration (XAMPP + Offline/Online)
// ============================================================

window.LMS_CONFIG = {
  API_URL: 'https://script.google.com/macros/s/AKfycbwpJOE_nvwrOjI01sdCnHnr2uRAqbOuA54C6cKaJlV4UmZpj8qJfHg_bwydHRbULMa8Kg/exec',

  COURSE_TITLE: 'Neonatal Nursing',
  LOGO_URL: 'https://drive.google.com/thumbnail?id=1OMreBEo4wPtvWvTCjsKz6PtZfuH5hsJ9&sz=w1000',
  LOGO_FALLBACK_URL: 'https://lh3.googleusercontent.com/d/1OMreBEo4wPtvWvTCjsKz6PtZfuH5hsJ9',
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
    CACHE_VERSION: 'lms-v5',          // must match CACHE in sw.js
    QUEUE_MAX_ITEMS: 200,
    QUEUE_MAX_RETRIES: 5,
    SYNC_BATCH_SIZE: 25,
    SYNC_INTERVAL_MS: 30000,
    PING_INTERVAL_MS: 60000
  }
};
