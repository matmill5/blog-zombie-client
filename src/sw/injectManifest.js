import { injectManifest } from 'workbox-build';

const MAX_FILE_SIZE_MB = 5;
const CACHED_FILE_TYPES = 'ico,png,txt,css,eot,woff,woff2,svg,jpg,jpeg,webmanifest,map,html,js';

injectManifest({
  swSrc: `build/sw.js`,
  swDest: 'build/sw.js',
  globDirectory: 'build',
  globPatterns: [`**/*.{${CACHED_FILE_TYPES}}`],
  maximumFileSizeToCacheInBytes: MAX_FILE_SIZE_MB * 1024 * 1024,
}).then(({ count, size, warnings }) => {
  warnings.forEach(console.warn);
  console.log(`${count} files will be precached, totaling ${size / 1024 / 1024} MBs.`);
});
