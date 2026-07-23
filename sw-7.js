// Stock Scanner Pro — Service Worker
//
// Scope, deliberately narrow: this ONLY caches the app's own static shell
// (this HTML file + manifest + icons) so the app can be installed and
// re-opened offline. It does NOT touch, cache, or intercept any of the
// live data requests the scanner makes (Yahoo/Stooq/Finnhub/Twelve
// Data/FMP/Polygon/Alpha Vantage/Tiingo/EODHD/Alpaca, or the CORS proxies
// in front of some of them) — those are all cross-origin, and this worker
// only calls respondWith() for same-origin GET requests. Anything else
// falls straight through to the network exactly as if no service worker
// were installed at all, so it cannot break or go stale for scan data.
const CACHE_NAME = 'stock-scanner-shell-v1';
const SHELL_FILES = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(SHELL_FILES))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(
        names
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Only ever handle same-origin GET requests for the shell files above.
  // Everything else (all cross-origin API calls, POSTs, etc.) is left
  // completely untouched — no respondWith() is called, so the browser
  // handles it exactly as it would with no service worker present.
  if (req.method !== 'GET') return;
  let url;
  try { url = new URL(req.url); } catch { return; }
  if (url.origin !== self.location.origin) return;

  // Network-first, falling back to cache: this way an online user always
  // gets the latest version of the app after a deploy, and only falls back
  // to the cached shell when genuinely offline — avoids the classic PWA
  // bug of being stuck on a stale cached version indefinitely.
  event.respondWith(
    fetch(req)
      .then((res) => {
        const resClone = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
        return res;
      })
      .catch(() => caches.match(req).then((cached) => cached || caches.match('./index.html')))
  );
});
