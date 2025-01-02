const CACHE_NAME = 'minuman-segar-v1';
const urlsToCache = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './manifest.json',
    'https://allofresh.id/blog/wp-content/uploads/2023/04/resep-es-timun-suri-1-1-1.jpg',
    'https://www.wandercooks.com/wp-content/uploads/2021/04/malaysian-pulled-tea-teh-tarik-2.jpg',
    'https://www.fimela.com/food/read/4926888/resep-dan-cara-membuat-es-pisang-ijo-khas-makassar.jpg', 
    'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/02/23/kopi-rempah-3400559857.jpg', 
    'https://serikatnews.com/wp-content/uploads/2023/01/Bajigur.jpg',
    'https://assets.ladiestory.id/gallery/171246131220600903-ilustrasi.jpg',
    'https://4.bp.blogspot.com/-myKGjl26ww0/Vk79adfUU1I/AAAAAAAAAZM/KJL6XOhSnqI/s1600/es%2Bteh%2Blemon.jpg', 
    'https://img.herstory.co.id/articles/archive_20220826/kopi-20220826-125544.jpg'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache);
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

self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Fetch
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Jika ada dalam cache, kembalikan response, jika tidak, ambil dari jaringan
                return response || fetch(event.request).then(fetchResponse => {
                    // Caching response untuk permintaan baru
                    return caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, fetchResponse.clone());
                        return fetchResponse;
                    });
                });
            })
            .catch(() => {
                // Jika permintaan gagal, Anda bisa mengembalikan fallback (misalnya, gambar offline)
                console.error('Fetch failed; returning offline page instead.');
            })
    );
});
