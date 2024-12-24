const CACHE_NAME = 'kasir-sepatu-cache-v1';
const urlsToCache = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './manifest.json',
    './Android/media/com.whatsapp/WhatsApp/Media/WhatsApp ages/IMG-20241223-WA0003.jpg',
    './Android/media/com.whatsapp/WhatsApp/Media/WhatsApp ages/IMG-20241223-WA0001.jpg',
    './Android/media/com.whatsapp/WhatsApp/Media/WhatsApp ages/IMG-20241223-WA0002.jpg'
];

// Install Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

// Fetch Cached Resources
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

// Activate and Cleanup Old Cache
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
