import { debounce } from '@/helpers';
import createStore from './create';

// Constants
const MOBILE_WIDTH_THRESHOLD = 768;
const NEAR_TOP_THRESHOLD = 100;

// Store
const store = createStore({
  isMobile: globalThis.innerWidth < MOBILE_WIDTH_THRESHOLD,
  isNearTop: globalThis.screenTop < NEAR_TOP_THRESHOLD,
  isMenuOpen: false,
  counter: 0,
});

// Subscribe to store events
const subscribe = (property: string, callback: (value: any) => void) => {
  document.addEventListener('store', (event) => {
    const value = (event as CustomEvent).detail[property];
    if (value === undefined) throw new Error(`Property ${property} does not exist`);
    callback(value);
  });
};

// Subscribe to global events
globalThis.addEventListener('resize', () => {
  store.isMobile = globalThis.innerWidth < MOBILE_WIDTH_THRESHOLD;
  if (store.isMobile) store.isMenuOpen = false;
});
globalThis.addEventListener(
  'scroll',
  debounce(() => {
    store.isNearTop = globalThis.scrollY < NEAR_TOP_THRESHOLD;
  }, 50)
);

export { store, subscribe };
