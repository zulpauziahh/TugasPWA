const CACHE_NAME = 'kasir-sepatu-v1';
const urlsToCache = [
    './',
    './index.html',
    './dashboard.html',
    './style.css',
    './app.js',
    './manifest.json',
    './img/sepatuA.jpg',
    './img/sepatuB.jpg',
    './img/sepatuC.jpg',
    './img/icon-192.png',
    './img/icon-512.png'
];

// Install Event
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Caching resources...');
                return cache.addAll(urlsToCache);
            })
    );
});

// Activate Event
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => 
            Promise.all(
                keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
            )
        )
    );
    console.log('Service Worker activated!');
});

// Fetch Event
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
