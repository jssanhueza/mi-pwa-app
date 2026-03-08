const CACHE = "mi-pwa-cache-v1";

const urlsToCache = [
  "/mi-pwa-app/",
  "/mi-pwa-app/index.html",
  "/mi-pwa-app/style.css",
  "/mi-pwa-app/app.js",
  "/mi-pwa-app/manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
