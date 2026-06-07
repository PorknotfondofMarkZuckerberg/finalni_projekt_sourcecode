if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(() => {
            console.log('Service Worker registered');
        })
        .catch(err => {
            console.log('Service Worker registration failed:', err);
        });
}

const CACHE_NAME = "movie-watchlist-v1";

const urlsToCache = [
    "/",
    "/index.html",
    "/style.css",
    "/script.js",
    "/offline.html"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match("/offline.html");
        })
    );
});