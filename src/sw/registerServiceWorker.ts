
const IS_PROD = false;

const sw = '/sw.ts';

const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator && IS_PROD) {
    const { Workbox } = await import('workbox-window');
    const wb = new Workbox(sw);
    return wb.register();
  }
  return null;
};

export default registerServiceWorker;
