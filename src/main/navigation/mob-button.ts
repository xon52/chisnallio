import { store } from '@/store';

const generateNode = () => {
  const node = document.createElement('div');
  node.id = 'nav-mob-button';
  node.innerHTML = /* html */ `
    <span></span>
    <span></span>
    <span></span>
  `;
  node.addEventListener('click', () => {
    store.isMenuOpen = !store.isMenuOpen;
  });

  return node;
};

export default generateNode;
