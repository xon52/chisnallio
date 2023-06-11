import items from './items';
import genIcon from '@/icons';

const generateNode = () => {
  const node = document.createElement('div');
  node.className = 'contact-buttons';

  items.forEach(({ color, url, copy, label, icon }) => {
    const _node = document.createElement('div');
    _node.classList.add('contact-button');
    // Color variant
    if (color) _node.style.setProperty('--color', color);
    // Open URL
    if (url) _node.addEventListener('click', () => globalThis.open(url, '_blank'));
    // Copy text
    else if (copy)
      _node.addEventListener('click', () => {
        navigator.clipboard.writeText(copy);
        const copiedTextElement = _node.querySelector('.copied-text');
        copiedTextElement?.classList.add('active');
        setTimeout(() => copiedTextElement?.classList.remove('active'), 2000);
      });
    // HTML
    // Label
    _node.innerHTML += `<h4 class="label">${label}</h4>`;
    // Icon
    if (icon) _node.appendChild(genIcon(icon, '7rem'));
    // Action
    const action = document.createElement('div');
    action.className = 'action';
    if (url) {
      action.appendChild(genIcon('newTab', '2rem'));
    } else if (copy) {
      action.appendChild(genIcon('copy', '1rem'));
      action.innerHTML += `<span> Copy ID </span>`;
    }
    _node.innerHTML += `<h4 class="copied-text">ID Copied</h4>`;
    _node.appendChild(action);
    //  Append to parent
    node.appendChild(_node);
  });

  return node;
};

export default generateNode;
