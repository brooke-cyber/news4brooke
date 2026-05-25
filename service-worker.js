// News4Brooke — network-only service worker.
// Purpose: still registers so iOS treats it as a PWA, but NEVER caches anything.
// Every page load goes to the network so updates always land instantly.
// Trade-off: no offline mode. Acceptable for a live news app.

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    // Delete every cache from previous SW versions
    const keys = await caches.keys();
    await Promise.all(keys.map(k => caches.delete(k)));
    // Take control of all open clients immediately
    await self.clients.claim();
  })());
});

// No fetch listener — the browser handles all network requests natively.
// No stale shell, no surprise old code being served.
