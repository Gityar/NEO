/* ============================================================
   Neonatal Nursing LMS — Service Worker
   ============================================================
   Served from http://localhost/lms/ → SW scope is /lms/.
   All cache paths are relative so the same file works in any
   subfolder (e.g. htdocs/lms/ or htdocs/myapp/).
   ============================================================ */

const CACHE = 'lms-v2';

// The app shell — everything needed to boot offline.
const SHELL = [
  './',
  './index.html',
  './config.js'
];

/* ---------- INSTALL ---------- */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(SHELL))
      .then(() => self.skipWaiting())
      .catch((err) => console.warn('[SW] install cache failed:', err))
  );
});

/* ---------- ACTIVATE ---------- */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) =>
        Promise.all(
          keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))
        )
      )
      .then(() => self.clients.claim())
  );
});

/* ---------- FETCH ---------- */
self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Only cache GET requests
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Never cache cross-origin requests (Apps Script API calls)
  if (url.origin !== self.location.origin) return;

  // 1) Navigation requests (opening the page) → network-first, cache fallback
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
          return res;
        })
        .catch(() =>
          caches.match(req)
            .then((hit) => hit || caches.match('./index.html'))
        )
    );
    return;
  }

  // 2) Same-origin assets → cache-first, network fallback
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((res) => {
          // Only cache successful basic responses
          if (res && res.ok && res.type === 'basic') {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
          }
          return res;
        })
        .catch(() => cached); // final fallback (undefined if not cached)
    })
  );
});
