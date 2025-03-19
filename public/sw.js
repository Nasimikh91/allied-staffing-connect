
// Service Worker for better offline experience and reliability
const CACHE_NAME = 'allied-pro-staffing-v14'; // Increment cache version
const urlsToCache = [
  '/',
  '/index.html',
  '/src/main.tsx',
  '/src/index.css',
  '/favicon.ico',
  '/logo-favicon.svg'
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
        // Cache each resource individually to prevent one failure from stopping all caching
        return Promise.allSettled(
          urlsToCache.map(url => 
            cache.add(url).catch(error => {
              console.error(`Failed to cache resource: ${url}`, error);
            })
          )
        );
      })
  );
});

// Fetch event - serve from cache when possible, with special handling for images
self.addEventListener('fetch', event => {
  // Image request handling with network-first strategy for uploaded images
  if (event.request.url.includes('lovable-uploads')) {
    console.log('Image request detected:', event.request.url);
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // If the network request was successful, clone and cache the response
          if (response && response.status === 200) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                console.log('Caching image resource:', event.request.url);
                cache.put(event.request, responseToCache);
              })
              .catch(err => console.error('Error caching image:', err));
          }
          return response;
        })
        .catch(() => {
          console.log('Network fetch failed, trying cache for:', event.request.url);
          return caches.match(event.request)
            .then(cachedResponse => {
              if (cachedResponse) {
                console.log('Found image in cache:', event.request.url);
                return cachedResponse;
              }
              console.log('Image not in cache either:', event.request.url);
              // If there's no cached response, return a fallback image or empty response
              return caches.match('/logo-favicon.svg');
            });
        })
    );
    return;
  }
  
  // Regular fetch handling for other resources (cache-first strategy)
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return the response from the cached version
        if (response) {
          return response;
        }
        
        // Not in cache - fetch and cache for next time
        return fetch(event.request)
          .then(response => {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clone the response since it can only be consumed once
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then(cache => {
                // Cache the fetched resource
                cache.put(event.request, responseToCache);
              });
              
            return response;
          })
          .catch(error => {
            console.error('Network fetch failed for:', event.request.url, error);
            // If fetch fails for navigation, return the cached homepage
            if (event.request.mode === 'navigate') {
              return caches.match('/index.html');
            }
            // For other resources, just let the error propagate
            throw error;
          });
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

// Listen for messages from the client
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
