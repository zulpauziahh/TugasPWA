const CACHE_NAME = 'minuman-segar-v1';
const urlsToCache = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './manifest.json',
    'https://allofresh.id/blog/wp-content/uploads/2023/04/resep-es-timun-suri-1-1-1.jpg',
    'https://www.wandercooks.com/wp-content/uploads/2021/04/malaysian-pulled-tea-teh-tarik-2.jpg',
    'https://id.images.search.yahoo.com/images/view;_ylt=AwrPrWtC72xnTd4Ta6nNQwx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzhhYjNmZTJlZTgwMGRlNTM5ZDRiZjhmN2Y2Y2FlNTg2BGdwb3MDMwRpdANiaW5n?back=https%3A%2F%2Fid.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dwedang%2Bjahe%26type%3DE211ID1357G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D3&w=720&h=477&imgurl=www.wowkeren.com%2Fdisplay%2Fimages%2Fphoto%2F2020%2F04%2F07%2F00305093s6.jpg&rurl=https%3A%2F%2Fwww.wowkeren.com%2Fberita%2Ftampil%2F00305093%2F6.html&size=79KB&p=wedang+jahe&oid=8ab3fe2ee800de539d4bf8f7f6cae586&fr2=piv-web&fr=mcafee&tt=Wedang+Jahe&b=0&ni=21&no=3&ts=&tab=organic&sigr=0skV30I0xL4G&sigb=7dbcSdrksCSl&sigi=j5UKTURGtCYH&sigt=P6wW3eHkBe5V&.crumb=cXC05tSoCbe&fr=mcafee&fr2=piv-web&type=E211ID1357G0',
    'https://id.images.search.yahoo.com/images/view;_ylt=Awrx_ma292xnRZwWjmHNQwx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2I2ZTllNDgzOTg2N2IyNzZkMWIxNDNlMjc5NWY3NGFkBGdwb3MDMTYEaXQDYmluZw--?back=https%3A%2F%2Fid.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Des%2Bkelapa%2Bmuda%2Bestetik%26ei%3DUTF-8%26type%3DE211ID1357G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D16&w=840&h=576&imgurl=i.pinimg.com%2Foriginals%2F1e%2Fae%2Ffc%2F1eaefc38a433128f8ca6f8a58aed9d59.jpg&rurl=https%3A%2F%2Fbagibahan.blogspot.com%2F2019%2F12%2Fbahan-bahan-untuk-membuat-es-kelapa-muda.html&size=47KB&p=es+kelapa+muda+estetik&oid=b6e9e4839867b276d1b143e2795f74ad&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=Bahan+Bahan+Untuk+Membuat+Es+Kelapa+Muda&b=0&ni=140&no=16&ts=&tab=organic&sigr=eU7tfS.GgBJg&sigb=rU8fK3thaU2U&sigi=p.srAdwcatTS&sigt=VrHxHDNS8lpF&.crumb=cXC05tSoCbe&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E211ID1357G0',
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
