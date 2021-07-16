import { registerRoute } from 'workbox-routing';
import { PrecacheEntry } from 'workbox-precaching/src/_types';
import { StaleWhileRevalidate } from 'workbox-strategies';
import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching';

declare const self: ServiceWorker & { __WB_MANIFEST: Array<PrecacheEntry | string> };

cleanupOutdatedCaches();
precacheAndRoute(self.__WB_MANIFEST);

registerRoute(/\.(?:css)$/, new StaleWhileRevalidate({}));
