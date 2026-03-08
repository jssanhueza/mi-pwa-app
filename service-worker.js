const CACHE_NAME = 'v1_mi_pwa';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// Instalación del Service Worker
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache)
          .then(() => self.skipWaiting());
      })
  );
});

// Activación
self.addEventListener('activate', e => {
  e.waitUntil(self.clients.claim());
});

// Evento Fetch (Crucial para que Chrome vea que es una PWA)
self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
