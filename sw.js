// Caches the app so it opens offline. Bump CACHE to force everyone to refresh.
var CACHE = "timesheet-v32";
var FILES = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "apple-touch-icon.png", "logo.png", "config.js", "help.html", "help/name.jpg", "help/header.jpg", "help/day.jpg", "help/shop_dayoff.jpg", "help/bottom.jpg"];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FILES); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

// Show the saved copy right away, refresh it in the background for next time.
self.addEventListener("fetch", function (e) {
  var r = e.request;
  if (r.method !== "GET" || new URL(r.url).origin !== location.origin) return;
  e.respondWith(
    caches.match(r, { ignoreSearch: true }).then(function (hit) {
      var net = fetch(r).then(function (res) {
        if (res && res.ok) { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(r, copy); }); }
        return res;
      }).catch(function () {
        return hit || (r.mode === "navigate" ? caches.match("index.html") : undefined);
      });
      return hit || net;
    })
  );
});
