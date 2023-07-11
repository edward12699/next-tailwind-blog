// service-worker.js
const CACHE_NAME = 'my-cache-v1';
const path = `${process.env.NEXT_PUBLIC_SITE_URL}`
const urlsToCache = [
  '/articles',
  '/main.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }

        return fetch(event.request);
      })
  );
});


function showNotification() {
  if (Notification.permission == "granted") {
    self.registration.showNotification('you have recovered from offline', {
      icon: './icons/fire-earth.svg',
      body: "Buzz! Buzz!",
      vibrate: [100, 100, 200, 100, 200, 100, 200]
    }).then(v => { console.log('notification showed') }).catch(err => { console.log(0) });
    // control to only show 1 s
    setTimeout(() => {
      self.registration.getNotifications().then((notifications) => {
        notifications.forEach((notification) => {
          notification.close();
        });
      });
    }, 1000);
  }
}







self.addEventListener("periodicsync", (event) => {
  if (event.tag === "update-blog") {
    event.waitUntil(updateNews());
  }
});

function updateNews() {
  const data = { message: 'loaded news from remote' };
  return self.clients.claim().then(() => { return self.clients.matchAll() }).then((clients) => {
    clients.forEach((client) => {
      client.postMessage({ type: 'load news', data });
    });
  }).then(() => { console.log('News updated') });
  // 发送数据给原页面


}








