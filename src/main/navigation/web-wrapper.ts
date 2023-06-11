import webBrand from './web-brand';
import webButtons from './web-buttons';
import { store, subscribe } from '@/store';

const generateNode = () => {
  const node = document.createElement('nav');
  node.id = 'nav-web';
  if (store.isNearTop) node.classList.add('near-top');
  node.append(webBrand());
  node.append(webButtons());

  subscribe('isNearTop', (v) => {
    if (v) node.classList.add('near-top');
    else node.classList.remove('near-top');
  });

  return node;
};

export default generateNode;
