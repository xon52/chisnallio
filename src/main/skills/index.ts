import iconGen from '@/icons';
import items from './items';

const generateNode = () => {
  const node = document.createElement('section');
  node.id = 'Skills';

  const node_wrapper = document.createElement('div');
  node_wrapper.className = 'wrapper';

  items.forEach((item) => {
    const node_item = document.createElement('div');
    node_item.className = 'color';
    node_item.innerHTML += /* html */ `
			<div class="content-first">
			  <h3 class="title">${item.title}</h3>
			</div>
			<div class="content-short">
			  <h2>${item.title}</h2>
			  <p>${item.short}</p>
			</div>
    `;
    if (item.icon) node_item.querySelector('.content-first')?.appendChild(iconGen(item.icon, '5rem'));
    node_wrapper.appendChild(node_item);
  });

  node.appendChild(node_wrapper);
  return node;
};

export default generateNode;
