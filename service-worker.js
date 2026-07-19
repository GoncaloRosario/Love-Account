self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("love-account-cache").then(cache => {
            return cache.addAll([
                "/Love-Account/",
                "/Love-Account/index.html",
                "/Love-Account/style.css",
                "/Love-Account/script.js",
                "/Love-Account/offline.html"
            ]);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match("/Love-Account/offline.html");
        })
    );
});