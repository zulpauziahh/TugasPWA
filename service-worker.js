const CACHE_NAME = 'minuman-segar-v1';
const urlsToCache = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './manifest.json',
    './https://id.images.search.yahoo.com/images/view;_ylt=AwrPrWuqxGxnrLQLlR7NQwx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2I5ZTM0ZDZhYmRiNmUyNThmYzZlZDNiMmIzNWQyYzFkBGdwb3MDMTEEaXQDYmluZw--?back=https%3A%2F%2Fid.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dtimun%2Bsuri%2Bes%26ei%3DUTF-8%26type%3DE211ID1357G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D11&w=667&h=1000&imgurl=allofresh.id%2Fblog%2Fwp-content%2Fuploads%2F2023%2F04%2Fresep-es-timun-suri-1-1-1.jpg&rurl=https%3A%2F%2Fallofresh.id%2Fblog%2Fresep-es-timun-suri%2F&size=376KB&p=timun+suri+es&oid=b9e34d6abdb6e258fc6ed3b2b35d2c1d&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=Resep+Es+Timun+Suri+Nikmat+Yang+Bisa+Dibuat+di+Rumah&b=0&ni=140&no=11&ts=&tab=organic&sigr=1cI2pBEfOusw&sigb=.NpjzxrMXHjv&sigi=H6MYzdFnqQIB&sigt=VBkkExz1zZvd&.crumb=cXC05tSoCbe&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E211ID1357G0',
    './https://id.images.search.yahoo.com/images/view;_ylt=AwrPrWsxxWxnLnYM28TNQwx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2I1ZTljMzMwYmFlZTc3Y2QxNDIzNGQ0MmQ4YTllOGI0BGdwb3MDNARpdANiaW5n?back=https%3A%2F%2Fid.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dteh%2Btarik%26ei%3DUTF-8%26type%3DE211ID1357G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D4&w=1200&h=1200&imgurl=www.wandercooks.com%2Fwp-content%2Fuploads%2F2021%2F04%2Fmalaysian-pulled-tea-teh-tarik-2.jpg&rurl=https%3A%2F%2Fwww.wandercooks.com%2Fridiculously-fun-malaysian-teh-tarik%2F&size=40KB&p=teh+tarik&oid=b5e9c330baee77cd14234d42d8a9e8b4&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=Teh+Tarik+Recipe+-+Malaysian+Pulled+Tea+%7C+Wandercooks&b=0&ni=140&no=4&ts=&tab=organic&sigr=wHl9ExBbGeTk&sigb=V7hDAl.EIK8N&sigi=G1vKI04hP3qL&sigt=3j60jPg3oWhZ&.crumb=cXC05tSoCbe&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E211ID1357G0',
    './https://id.images.search.yahoo.com/images/view;_ylt=AwrPrWtpxWxnH70Kf6LNQwx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzg5MTFjODkwMjAzNTQ5YjI0YjEzMGRiOWFmMmUzYjkzBGdwb3MDMTkEaXQDYmluZw--?back=https%3A%2F%2Fid.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dwadang%2Bjahe%26ei%3DUTF-8%26type%3DE211ID1357G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D19&w=680&h=383&imgurl=cdn1-production-images-kly.akamaized.net%2FUjLqSi-T0HNTqnvCMqNxjekgIj8%3D%2F0x0%3A4500x2536%2F680x383%2Ffilters%3Aquality%2875%29%3Astrip_icc%28%29%3Aformat%28jpeg%29%2Fkly-media-production%2Fmedias%2F2828135%2Foriginal%2F043489300_1560484753-2019-06-13.jpg&rurl=https%3A%2F%2Fwww.fimela.com%2Ffood%2Fread%2F5201676%2Fresep-jahe-hangat-dengan-madu-untuk-menurunkan-kolesterol&size=45KB&p=wadang+jahe&oid=8911c890203549b24b130db9af2e3b93&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=Resep+Jahe+Hangat+dengan+Madu+untuk+Menurunkan+Kolesterol+-+Food+Fimela.com&b=0&ni=140&no=19&ts=&tab=organic&sigr=cn2e_NJHJiUL&sigb=M0WzDex4BFwC&sigi=MSiRA8yuhksj&sigt=IOwTa3bWzkRA&.crumb=cXC05tSoCbe&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E211ID1357G0',
    './https://id.images.search.yahoo.com/images/view;_ylt=AwrPrWv8xWxnRtwNkRHNQwx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzM1ZDQ2Mzg5MzU1YjQ0NTM0ZDQwYzU4NmY2M2Q2ZDAxBGdwb3MDNARpdANiaW5n?back=https%3A%2F%2Fid.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3DES%2BKELAPA%26ei%3DUTF-8%26type%3DE211ID1357G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D4&w=670&h=335&imgurl=cdns.klimg.com%2Fmerdeka.com%2Fi%2Fw%2Fnews%2F2021%2F08%2F23%2F1344072%2Fcontent_images%2F670x335%2F20210823152623-1-es-kelapa-muda-001-rizka-muallifa.jpg&rurl=https%3A%2F%2Fwww.merdeka.com%2Fjateng%2F7-resep-es-kelapa-yang-enak-dan-segar-mudah-dibuat-kln.html&size=42KB&p=ES+KELAPA&oid=35d46389355b44534d40c586f63d6d01&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=7+Resep+Es+Kelapa+yang+Enak+dan+Segar%2C+Mudah+Dibuat&b=0&ni=140&no=4&ts=&tab=organic&sigr=q7R7FuNT2iB_&sigb=c7v3ln_b.rx_&sigi=F7WHMQMkq.OO&sigt=ChwTvo_s0vaP&.crumb=cXC05tSoCbe&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E211ID1357G0',
    './https://id.images.search.yahoo.com/images/view;_ylt=Awrx_mZgxmxndcYNaq7NQwx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzA2ZWE4NGE2OGVjMTJmMjUyOWM1ZDdlMzVmODliZDRkBGdwb3MDOQRpdANiaW5n?back=https%3A%2F%2Fid.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3DES%2BPISANG%2BIJO%26ei%3DUTF-8%26type%3DE211ID1357G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D9&w=919&h=691&imgurl=travellingindonesia.com%2Fwp-content%2Fuploads%2F2022%2F06%2FEs-Pisang-Ijo-khas-Makassar-Dok.-Istimewa.jpg&rurl=https%3A%2F%2Ftravellingindonesia.com%2Fes-pisang-ijo-khas-makassar%2F&size=344KB&p=ES+PISANG+IJO&oid=06ea84a68ec12f2529c5d7e35f89bd4d&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=Es+Pisang+Ijo+khas+Makassar%2C+Ada+Sejak+Abad+ke-19+-+Travelling+Indonesia&b=0&ni=140&no=9&ts=&tab=organic&sigr=YsY_.mGcLRVc&sigb=bWKK782zxgQ9&sigi=rYE7Ch2xRgJX&sigt=oy5gNN1wePO5&.crumb=cXC05tSoCbe&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E211ID1357G0',
    './https://id.images.search.yahoo.com/images/view;_ylt=AwrPrWtNyWxnRtwNREfNQwx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzU5OGYzNGY2MjBmYmQ1NGFmZGM0NmQ0NTA4OTM2MjRiBGdwb3MDNwRpdANiaW5n?back=https%3A%2F%2Fid.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3DKOPI%2BREMPAH%26ei%3DUTF-8%26type%3DE211ID1357G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D7&w=750&h=500&imgurl=static.promediateknologi.id%2Fcrop%2F0x0%3A0x0%2F750x500%2Fwebp%2Fphoto%2F2023%2F02%2F23%2Fkopi-rempah-3400559857.jpg&rurl=https%3A%2F%2Fwww.koran-gala.id%2Fgala-ragam%2F58711146299%2F4-cara-membuat-kopi-rempah-gula-merah-rasanya-nikmat-usir-kantuk-dan-lawan-berbagai-penyakit&size=47KB&p=KOPI+REMPAH&oid=598f34f620fbd54afdc46d450893624b&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=4+Cara+Membuat+Kopi+Rempah+Gula+Merah%2C+Rasanya+Nikmat+Usir+Kantuk+dan+...&b=0&ni=140&no=7&ts=&tab=organic&sigr=rZR0_ILz4vOy&sigb=M9j6bba9uYov&sigi=xXVpg95W5LvD&sigt=LEjALM6ubIQe&.crumb=cXC05tSoCbe&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E211ID1357G0',
    './https://id.images.search.yahoo.com/images/view;_ylt=Awrx_mZ_yWxnFyYPdg_NQwx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzEzODE4MmFiZGIwMzAxMjc5MzgwZDhiODE4NmFjYzBlBGdwb3MDNARpdANiaW5n?back=https%3A%2F%2Fid.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3DBAJIGUR%26ei%3DUTF-8%26type%3DE211ID1357G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D4&w=1200&h=800&imgurl=serikatnews.com%2Fwp-content%2Fuploads%2F2023%2F01%2FBajigur.jpg&rurl=https%3A%2F%2Fserikatnews.com%2Fbajigur-minuman-penghangat-tubuh-khas-sunda%2F&size=122KB&p=BAJIGUR&oid=138182abdb0301279380d8b8186acc0e&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=Bajigur%2C+Minuman+Penghangat+Tubuh+Khas+Sunda+%7C+serikatnews.com&b=0&ni=140&no=4&ts=&tab=organic&sigr=TWXfqQAtivtw&sigb=S8C0Y0zWn85n&sigi=3mfbxWvX2Qer&sigt=Mkxds8i6tJOh&.crumb=cXC05tSoCbe&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E211ID1357G0',
    './https://id.images.search.yahoo.com/images/view;_ylt=AwrPrWvMyWxngboNemrNQwx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2Q2ZDg3ZDdiZGZjMDNiZGFhM2Y2M2M2ZTkwNGRiYmMwBGdwb3MDMTQEaXQDYmluZw--?back=https%3A%2F%2Fid.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3DES%2BDAWET%26ei%3DUTF-8%26type%3DE211ID1357G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D14&w=1366&h=768&imgurl=assets.ladiestory.id%2Fgallery%2F171246131220600903-ilustrasi.jpg&rurl=https%3A%2F%2Fwww.ladiestory.id%2Frekomendasi-beragam-kreasi-es-dawet-yang-lezat-beserta-resep-79380&size=174KB&p=ES+DAWET&oid=d6d87d7bdfc03bdaa3f63c6e904dbbc0&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=Rekomendasi+Beragam+Kreasi+Es+Dawet+yang+Lezat+Beserta...&b=0&ni=140&no=14&ts=&tab=organic&sigr=dZExBlStLF4V&sigb=icH6D9Uq5rn1&sigi=y2GTzRYnRehh&sigt=bDuSx7K5z9Z.&.crumb=cXC05tSoCbe&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E211ID1357G0',
    './https://id.images.search.yahoo.com/images/view;_ylt=Awrx_mboyWxnGDUPcA7NQwx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2QxYmM5YjQ5YTgxMDUyZGYxZWQ1MTkzOTFlYjU5OWEyBGdwb3MDMTAEaXQDYmluZw--?back=https%3A%2F%2Fid.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3DES%2BLEMON%26type%3DE211ID1357G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D10&w=1000&h=667&imgurl=4.bp.blogspot.com%2F-myKGjl26ww0%2FVk79adfUU1I%2FAAAAAAAAAZM%2FKJL6XOhSnqI%2Fs1600%2Fes%252Bteh%252Blemon.png&rurl=https%3A%2F%2Fweresepmasakan.blogspot.com%2F2015%2F11%2Fresep-es-teh-lemon-segar.html&size=877KB&p=ES+LEMON&oid=d1bc9b49a81052df1ed519391eb599a2&fr2=piv-web&fr=mcafee&tt=Resep+Es+Teh+Lemon+Segar&b=0&ni=21&no=10&ts=&tab=organic&sigr=H3ASmIvY2q8J&sigb=7hkNtiv3xf6M&sigi=x3NNW8GE.Wte&sigt=lFZKj32qKyAi&.crumb=cXC05tSoCbe&fr=mcafee&fr2=piv-web&type=E211ID1357G0',
    './https://id.images.search.yahoo.com/images/view;_ylt=Awrx_mYWymxn6FsO7IzNQwx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2IxMzNiMzIzY2MzN2Y5YjNlN2VjOTNkNjVhNDk3NDIxBGdwb3MDMQRpdANiaW5n?back=https%3A%2F%2Fid.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3DKOPI%2BSUSU%2BGULA%2BAREN%26type%3DE211ID1357G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D1&w=1024&h=576&imgurl=img.herstory.co.id%2Farticles%2Farchive_20220826%2Fkopi-20220826-125544.jpg&rurl=https%3A%2F%2Fherstory.co.id%2Fread84532%2Fresep-es-kopi-susu-gula-aren-rasanya-seenak-di-coffee-shop&size=82KB&p=KOPI+SUSU+GULA+AREN&oid=b133b323cc37f9b3e7ec93d65a497421&fr2=piv-web&fr=mcafee&tt=Resep+Es+Kopi+Susu+Gula+Aren%2C+Rasanya+Seenak+di+Coffee+Shop&b=0&ni=21&no=1&ts=&tab=organic&sigr=R3A8zW1Ltb0n&sigb=bxsjYNOJaFXZ&sigi=nbBd3LZPX7TZ&sigt=4K3QGN4HulmY&.crumb=cXC05tSoCbe&fr=mcafee&fr2=piv-web&type=E211ID1357G0',
    
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
