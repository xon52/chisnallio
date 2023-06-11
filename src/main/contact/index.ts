import buttons from './buttons';

const generateNode = () => {
  const node = document.createElement('section');
  node.id = 'Contact';

  node.innerHTML = /* html */ `
    <h1 class="fancy-text highlight">Let's connect ☕</h1>
  `;
  node.append(buttons());

  return node;
};

export default generateNode;
