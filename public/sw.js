
// Service Worker for better offline experience and reliability
const CACHE_NAME = 'allied-pro-staffing-v2'; // Updated cache version
const urlsToCache = [
  '/',
  '/index.html',
  '/src/main.tsx',
  '/src/index.css',
  '/favicon.ico',
  '/logo-favicon.svg',
  '/lovable-uploads/562340c9-d9eb-40ac-a0a3-8a67bbfb5fe3.png'
];

// Install event - cache critical assets
self.addEventListener('install', event => {
  console.log('Service Worker installing...');
  // Force waiting service worker to become active
  self.skipWaiting();
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache, caching resources');
        return cache.addAll(urlsToCache).catch(error => {
          console.error('Failed to cache some resources:', error);
        });
      })
  );
});

// Fetch event - serve from cache when possible
self.addEventListener('fetch', event => {
  // Special handling for image requests
  if (event.request.url.includes('/lovable-uploads/')) {
    console.log('Image request detected:', event.request.url);
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Clone the response for caching
          const responseToCache = response.clone();
          
          caches.open(CACHE_NAME)
            .then(cache => {
              console.log('Caching image resource:', event.request.url);
              cache.put(event.request, responseToCache);
            })
            .catch(err => console.error('Error caching image:', err));
            
          return response;
        })
        .catch(() => {
          console.log('Falling back to cached image');
          return caches.match(event.request);
        })
    );
    return;
  }
  
  // Regular fetch handling for other resources
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return the response from the cached version
        if (response) {
          return response;
        }
        
        // Not in cache - fetch and cache for next time
        return fetch(event.request).then(
          response => {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clone the response since it can only be consumed once
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then(cache => {
                // Don't cache API calls or external resources
                if (event.request.url.indexOf('http') === 0) {
                  cache.put(event.request, responseToCache);
                }
              });
              
            return response;
          }
        );
      })
      .catch(() => {
        // If both cache and network fail, show fallback content
        if (event.request.mode === 'navigate') {
          return caches.match('/index.html');
        }
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker activating...');
  
  // Take control of all clients immediately
  self.clients.claim();
  
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Optional: Listen for messages from the client
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
