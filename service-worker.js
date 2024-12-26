const CACHE_NAME = 'minuman-segar-v1';
const urlsToCache = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './manifest.json',
    'https://allofresh.id/blog/wp-content/uploads/2023/04/resep-es-timun-suri-1-1-1.jpg',
    'https://www.wandercooks.com/wp-content/uploads/2021/04/malaysian-pulled-tea-teh-tarik-2.jpg',
    'https://cdn1-production-images-kly.akamaized.net/UjLqSi-T0HNTqnvCMqNxjekgIj8=/0x0:4500x2536/680x383/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2828135/original/043489300_1560484753-2019-06-13.jpg',
    'https://cdns.klimg.com/merdeka.com/i/w/news/2021/08/23/1344072/content_images/670x335/20210823152623-1-es-kelapa-muda-001-rizka-muallifa.jpg',
    'https://travellingindonesia.com/wp-content/uploads/2022/06/Es-Pisang-Ijo-khas-Makassar-Dok.-Istimewa.jpg',
    'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/02/23/kopi-rempah-3400559857.jpg',
    'https://serikatnews.com/wp-content/uploads/2023/01/Bajigur.jpg',
    'https://assets.ladiestory.id/gallery/171246131220600903-ilustrasi.jpg',
    'https://4.bp.blogspot.com/-myKGjl26ww0/Vk79adfUU1I/AAAAAAAAAZM/KJL6XOhSnqI/s1600/es%2Bteh%2Blemon.png',
    'https://img.herstory.co.id/articles/archive_20220826/kopi-20220826-125544.jpg'
];

// Install
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

// Activate
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => 
            Promise.all(
                keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
            )
        )
    );
});

// Fetch
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});
