'use strict';

const APP_VERSION = 'v1.2.73+81';
const STATIC_CACHE = `worcat-static-${APP_VERSION}`;
const RUNTIME_CACHE = `worcat-runtime-${APP_VERSION}`;
const CACHE_PREFIX = 'worcat-';
const BASE_URL = self.registration.scope;
const SHELL_ASSETS = [
  '.',
  'index.html',
  'manifest.json',
  'favicon.png',
  'flutter_bootstrap.js',
].map((path) => new URL(path, BASE_URL).toString());

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(STATIC_CACHE);

      await Promise.all(
        SHELL_ASSETS.map(async (assetUrl) => {
          try {
            const response = await fetch(assetUrl, {cache: 'no-store'});
            if (response.ok) {
              await cache.put(assetUrl, response.clone());
            }
          } catch (error) {
            console.debug('Skipped pre-cache asset:', assetUrl, error);
          }
        }),
      );

      await self.skipWaiting();
    })(),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter(
            (key) =>
              key.startsWith(CACHE_PREFIX) &&
              key !== STATIC_CACHE &&
              key !== RUNTIME_CACHE,
          )
          .map((key) => caches.delete(key)),
      );

      const clients = await self.clients.matchAll({type: 'window'});
      const isUpgrade = clients.length > 0;

      await self.clients.claim();

      if (isUpgrade) {
        for (const client of clients) {
          client.postMessage({type: 'APP_UPDATED', version: APP_VERSION});
        }
      }
    })(),
  );
});

self.addEventListener('fetch', (event) => {
  const {request} = event;

  if (request.method !== 'GET') {
    return;
  }

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) {
    return;
  }

  if (url.pathname.endsWith('/version.json') || url.pathname.endsWith('version.json')) {
    event.respondWith(fetch(request, {cache: 'no-store'}));
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith(handleNavigation(request));
    return;
  }

  if (shouldHandleAsset(url.pathname)) {
    event.respondWith(staleWhileRevalidate(request));
  }
});

self.addEventListener('push', (event) => {
  event.waitUntil(
    (async () => {
      let payload = {};

      try {
        payload = event.data?.json() ?? {};
      } catch (_) {
        payload = {
          title: 'worCat 提醒',
          body: event.data?.text?.() ?? '',
        };
      }

      const title = payload.title || 'worCat 提醒';
      const body = payload.body || '';
      const targetUrl =
        payload.url || new URL('.', BASE_URL).toString();

      await self.registration.showNotification(title, {
        body,
        tag: payload.tag || 'worcat-notification',
        icon: new URL('icons/Icon-192.png', BASE_URL).toString(),
        badge: new URL('icons/Icon-192.png', BASE_URL).toString(),
        data: {
          url: targetUrl,
          eventId: payload.eventId || null,
          kind: payload.kind || 'general',
        },
      });
    })(),
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  event.waitUntil(
    (async () => {
      const targetUrl = event.notification.data?.url || new URL('.', BASE_URL).toString();
      const clients = await self.clients.matchAll({
        type: 'window',
        includeUncontrolled: true,
      });

      for (const client of clients) {
        if ('focus' in client) {
          await client.focus();
          if ('navigate' in client) {
            await client.navigate(targetUrl);
          }
          return;
        }
      }

      await self.clients.openWindow(targetUrl);
    })(),
  );
});

function shouldHandleAsset(pathname) {
  return (
    pathname.includes('/assets/') ||
    pathname.includes('/canvaskit/') ||
    /\.(?:js|mjs|wasm|json|png|jpg|jpeg|gif|webp|svg|ico|ttf|otf|woff2?)$/i.test(pathname)
  );
}

async function handleNavigation(request) {
  try {
    const response = await fetch(request, {cache: 'no-store'});
    const cache = await caches.open(STATIC_CACHE);
    await cache.put(request, response.clone());
    return response;
  } catch (error) {
    const cachedResponse =
      (await caches.match(request)) ||
      (await caches.match(new URL('index.html', BASE_URL).toString()));

    if (cachedResponse) {
      return cachedResponse;
    }

    throw error;
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cachedResponse = await cache.match(request);

  const networkFetch = fetch(request)
    .then(async (response) => {
      if (response.ok) {
        await cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => null);

  return cachedResponse ?? (await networkFetch) ?? Response.error();
}
