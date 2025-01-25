const CACHE_NAME = 'nbbit-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/logo.jpg',
  '/imgs/bg_features_top.jpg',
  '/imgs/img_trading_strategy.png',
  '/imgs/img_trading_signals.png',
  '/imgs/img_financial_consultant.png',
  '/imgs/img_friends_earning_together.png',
  '/imgs/logo.jpg',
  'https://cdn.jsdelivr.net/npm/framer-motion@10.11.5/dist/framer-motion.css',
  'https://cdn.jsdelivr.net/npm/framer-motion@10.11.5/dist/framer-motion.min.js',
  'https://cdn.jsdelivr.net/npm/tailwindcss@3.3.1/dist/tailwind.min.css',
];

// 安装 Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// 拦截网络请求
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // 如果缓存中有响应，返回缓存的响应
        if (response) {
          return response;
        }
        // 否则，发起网络请求
        return fetch(event.request);
      })
  );
});

// 更新缓存
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});