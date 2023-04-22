var staticCacheName = "Somaiya Digital ID";
const assetsToCache = [
  './src/index.html',
  './src/styles.css',
  './src/id.html',
  './src/generate.html',
  './src/auth.html',
];
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
      console.log("Service worker installed");
      return cache.addAll(assetsToCache);
    }) 
  );
});
 
self.addEventListener("fetch", function (event) {
  console.log(event.request.url);
 
  event.respondWith(
    caches.match(event.request).then(function (response) {
      console.log("Service worker Fetched");
      return response || fetch(event.request);
    })
  );


  
}); 

