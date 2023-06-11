import { scrollToAnchor } from '@/helpers';

const generateNode = () => {
  const node = document.createElement('div');
  node.className = 'web-brand';
  node.innerHTML = /* html */ `
    <div class="web-brand-logo"></div>
    <span class="web-brand-name">Keagan Chisnall</span>
`;
  node.addEventListener('click', () => scrollToAnchor('Hero'));
  return node;
};

export default generateNode;
