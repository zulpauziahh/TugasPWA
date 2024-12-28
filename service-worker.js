const CACHE_NAME = 'minuman-segar-v1';
const urlsToCache = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './manifest.json',
    'https://allofresh.id/blog/wp-content/uploads/2023/04/resep-es-timun-suri-1-1-1.jpg',
    'https://www.wandercooks.com/wp-content/uploads/2021/04/malaysian-pulled-tea-teh-tarik-2.jpg',
    'https://id.images.search.yahoo.com/images/view;_ylt=AwrPrWto1W9noww56m3NQwx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2VmNWEyNGYwNmI2ZDA0NWU3NDM2YTkwZDRhNjczZTUyBGdwb3MDMjAEaXQDYmluZw--?back=https%3A%2F%2Fid.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Des%2Bpisang%2Bijo%2Bestetik%26ei%3DUTF-8%26type%3DE211ID1357G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D20&w=1140&h=550&imgurl=factsofindonesia.com%2Fwp-content%2Fuploads%2F2021%2F07%2Fes-pisang-ijo.jpg&rurl=https%3A%2F%2Ffactsofindonesia.com%2Findonesian-dessert-drink%2Fes-pisang-ijo-5&size=122KB&p=es+pisang+ijo+estetik&oid=ef5a24f06b6d045e7436a90d4a673e52&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=es-pisang-ijo+-+FactsofIndonesia.com&b=0&ni=140&no=20&ts=&tab=organic&sigr=OfEuJMwpwQil&sigb=2d7bkHdE2qdp&sigi=jK9LiG91susV&sigt=jMELkdRUke4M&.crumb=cXC05tSoCbe&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E211ID1357G0',
    'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/02/23/kopi-rempah-3400559857.jpg',
    'https://serikatnews.com/wp-content/uploads/2023/01/Bajigur.jpg',
    'https://assets.ladiestory.id/gallery/171246131220600903-ilustrasi.jpg',
    'https://4.bp.blogspot.com/-myKGjl26ww0/Vk79adfUU1I/AAAAAAAAAZM/KJL6XOhSnqI/s1600/es%2Bteh%2Blemon.png',
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
