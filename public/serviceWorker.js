const CACHE_NAME = 'v1';
const urlToCash = [ "./index.html", "offline.html" ];


const self = this;

//install sw
self.addEventListener('install', (event) => {
    event.waitUntil (
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log("Open cache")

                return cache.addAll(urlToCash)
            })
    )
});

//listen for requests
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(() => {
                return fetch(event.request)
                    .catch(() => caches.match("offline.html"))
            })

    )
});

//activate sw
self.addEventListener('activate', (event) => {
    const cacheWhiteList = [];
    cacheWhiteList.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if (!cacheWhiteList.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))
    )
});
