const generateNode = () => {
  const node = document.createElement('section');
  node.id = 'Hero';

  node.innerHTML = /* html */ `
<div class="hero-image">&nbsp;</div>
<div class="hero-quote">
  <h3>👋 I'm <span class="highlight">Keagan</span></h3>
  <h4>
    I'm <span class="highlight">passionate</span> about <span class="highlight">people </span> and
    <span class="highlight">products</span> that <span class="highlight">change</span> our world
    <span class="highlight">💓👥🚀✨🌏</span>
  </h4>
</div>
  `;

  return node;
};

export default generateNode;
