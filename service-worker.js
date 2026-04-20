const CACHE_NAME = 'penghu-travel-v5';
const urlsToCache = [
    './',
    './index.html',
    './styles.css',
    './app.js',
    './manifest.json',
    './icons/icon-192.png',
    './icons/icon-512.png'
];

// 安裝 Service Worker，並立即接管（skipWaiting）
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('快取已開啟');
            return cache.addAll(urlsToCache);
        })
    );
    self.skipWaiting();
});

// 啟用時清除舊快取，並立即控制所有頁面
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('刪除舊快取:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// 網路優先策略：有網路時抓最新版，失敗才用快取（離線備用）
self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request)
            .then(networkResponse => {
                // 網路成功：更新快取並回傳最新內容
                const responseClone = networkResponse.clone();
                caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, responseClone);
                });
                return networkResponse;
            })
            .catch(() => {
                // 網路失敗：從快取回傳（離線模式）
                return caches.match(event.request);
            })
    );
});
