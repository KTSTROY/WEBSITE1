const CACHE_NAME = 'ktstroy-cache-v10';
const urlsToCache = [
  './',
  'index.html',
  'completed.html',
  'in-progress.html',
  'detail.html',
  'style.css?v=20260905',
  'manifest.json',
  'images/logo-mark.svg',
  'favicon.svg',
  'images/about-projects.jpg',
  'images/partners/maxxmart-cropped.jpg',
  'images/partners/angro.png',
  'images/partners/knauf.svg',
  'images/partners/baumit.svg',
  'images/partners/terazid.png',
  'data/projects-completed.json?v=20260905',
  'data/projects-in-progress.json?v=20260905',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request).then(response => response || caches.match('index.html')))
  );
});
