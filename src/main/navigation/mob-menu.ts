import items from './items';
import { scrollToAnchor } from '@/helpers';
import { store } from '@/store';
import genIcon from '@/icons';

const generateNode = () => {
  const node = document.createElement('ul');
  node.id = 'nav-mob-menu';

  items
    .filter((item) => item.showInMobNav)
    .forEach((item) => {
      const _node = document.createElement('li');
      if (item.icon) _node.appendChild(genIcon(item.icon));
      _node.innerHTML += item.label;
      _node.addEventListener('click', () => {
        scrollToAnchor(item.anchor);
        store.isMenuOpen = false;
      });
      node.appendChild(_node);
    });

  return node;
};

export default generateNode;
