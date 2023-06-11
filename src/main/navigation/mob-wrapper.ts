import mobButton from './mob-button';
import mobMenu from './mob-menu';

import { subscribe } from '@/store';

const generateNode = () => {
  const node = document.createElement('nav');
  node.id = 'nav-mob';

  subscribe('isMenuOpen', (v) => {
    if (v) node.classList.add('open');
    else node.classList.remove('open');
  });

  node.append(mobButton());
  node.append(mobMenu());

  return node;
};

export default generateNode;
