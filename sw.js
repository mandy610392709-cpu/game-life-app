const CACHE_NAME = 'game-life-github-v1';
const CACHE_URLS = ['./index.html','./manifest.json','./app-icon.png','./butterfly-clean.png'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(CACHE_NAME).then(function(c){return c.addAll(CACHE_URLS)}).then(function(){return self.skipWaiting()}))});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(n){return Promise.all(n.filter(function(name){return name!==CACHE_NAME}).map(function(name){return caches.delete(name)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener('fetch',function(e){e.respondWith(fetch(e.request).catch(function(){return caches.match(e.request)}))});
