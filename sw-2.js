// Stock Scanner Pro — service worker
// Strategy: network-first for the app shell (index.html/manifest/icons).
// This app is a single actively-edited HTML file — a cache-first strategy
// would risk silently serving a stale/buggy build after you push a fix.
// Network-first means: always try to fetch the latest version first, and
// only fall back to the cached copy if you're offline. API calls (Yahoo,
// Finnhub, etc.) are NOT intercepted here — they always go straight to the
// network, since scan data must be live.

const CACHE_NAME = 'scanner-shell-v1';
const SHELL_FILES = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(SHELL_FILES)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Only handle same-origin GET requests for the app shell itself.
  // Everything else (API calls, CORS proxies, fonts) passes straight through
  // to the network untouched.
  if (event.request.method !== 'GET' || url.origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy)).catch(() => {});
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
