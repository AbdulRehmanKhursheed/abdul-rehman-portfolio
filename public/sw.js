// public/sw.js

// Install event: Cache everything when the service worker installs
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("v1").then((cache) => {
      return fetch("/").then(() => {
        // Cache the entire website
        return cache.addAll(["/", "/manifest.json"]);
      });
    })
  );
});

// Fetch event: Return everything from cache or fetch if not cached
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.open("v1").then((cache) => {
      return cache.match(event.request).then((response) => {
        return (
          response ||
          fetch(event.request).then((networkResponse) => {
            // Cache the new request for future use
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          })
        );
      });
    })
  );
});

// Activate event: Delete old caches if needed
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== "v1").map((key) => caches.delete(key))
      );
    })
  );
});
