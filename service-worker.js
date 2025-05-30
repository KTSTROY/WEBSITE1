const CACHE_NAME = 'ktstroy-cache-v1';
const urlsToCache = [
  'index.html',
  'index-en.html',
  'style.css',
  'manifest.json',
  'service-worker.js',
  // Можете да добавите още ресурси и изображения, които да бъдат кеширани
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
         return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
         if (response) {
           return response;
         }
         return fetch(event.request);
      })
  );
});
