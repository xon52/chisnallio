import items from './items';
import { scrollToAnchor } from '@/helpers';
import genIcon from '@/icons';

const generateNode = () => {
  const node = document.createElement('ul');
  node.id = 'nav-web-buttons';

  items
    .filter((item) => item.showInWebNav)
    .forEach((item) => {
      const _node = document.createElement('li');
      if (item.icon) _node.appendChild(genIcon(item.icon, '1.5rem'));
      _node.innerHTML += /* html */ `
    <span>${item.label}</span>
    `;
      _node.addEventListener('click', () =>scrollToAnchor(item.anchor));
      node.appendChild(_node);
    });

  return node;
};

export default generateNode;
