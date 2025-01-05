const CACHE_NAME = 'minuman-segar-v1';
const urlsToCache = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './manifest.json',
    'https://allofresh.id/blog/wp-content/uploads/2023/04/resep-es-timun-suri-1-1-1.jpg',
    'https://www.wandercooks.com/wp-content/uploads/2021/04/malaysian-pulled-tea-teh-tarik-2.jpg',
    'https://id.images.search.yahoo.com/images/view;_ylt=AwrPrWu6IHpnd1o6SX3NQwx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzliZDVjMWVlYmM2ZjVkYWU2ODI2YzZiNTdlNTMzN2VhBGdwb3MDNjEEaXQDYmluZw--?back=https%3A%2F%2Fid.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Des%2Bselasih%2Bmelon%26type%3DE211ID1357G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26nost%3D1%26tab%3Dorganic%26ri%3D61&w=1200&h=630&imgurl=img-global.cpcdn.com%2Frecipes%2Fad94b2747140d464%2F1200x630cq70%2Fphoto.jpg&rurl=https%3A%2F%2Fcookpad.com%2Fid%2Fresep%2F983803-es-melon-selasih&size=77KB&p=es+selasih+melon&oid=9bd5c1eebc6f5dae6826c6b57e5337ea&fr2=piv-web&fr=mcafee&tt=Resep+Es+Melon+Selasih+oleh+hanhanny+-+Cookpad&b=61&ni=21&no=61&ts=&tab=organic&sigr=QiQdRmE86VG1&sigb=7Y4Y6a40an31&sigi=vMakXHI.HRgj&sigt=d7YdRMfL98O_&.crumb=cXC05tSoCbe&fr=mcafee&fr2=piv-web&type=E211ID1357G0', 
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
