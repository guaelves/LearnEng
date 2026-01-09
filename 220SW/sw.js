const CACHE_NAME = 'eng-learn-v1';
const assets = [
  './',
  './index.html',
  // 如果你有外部 CSS 或 JS，請把檔名加在這裡，例如：
  // './style.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
