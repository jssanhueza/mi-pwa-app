const CACHE = "mi-app";

self.addEventListener("install", e => {
  self.skipWaiting();
});

self.addEventListener("fetch", e => {
  e.respondWith(fetch(e.request));
});
