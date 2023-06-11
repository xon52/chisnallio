import icons from './icons';

const generateNode = (
  icon: string,
  size: string = '1rem',
  fill: string = 'currentColor',
  stroke: string = 'currentColor',
  strokeWidth: string = '0.1'
) => {
  if (!icons[icon]) throw new Error('Icon not found');
  const { path, viewBox } = icons[icon];

  //   <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">

  const node = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  node.setAttribute('viewBox', viewBox);
  node.setAttribute('max-height', size);
  node.setAttribute('max-width', size);
  node.setAttribute('height', size);
  node.setAttribute('width', size);

  const gNode = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  gNode.setAttribute('fill', fill);
  gNode.setAttribute('stroke', stroke);
  gNode.setAttribute('stroke-linecap', 'round');
  gNode.setAttribute('stroke-linejoin', 'round');
  gNode.setAttribute('stroke-width', strokeWidth);

  // Single Path
  if (typeof path === 'string') {
    const pathNode = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathNode.setAttribute('d', path);
    gNode.appendChild(pathNode);
  }
  // Multiple Paths
  else if (Array.isArray(path)) {
    path.forEach((p) => {
      const pathNode = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      pathNode.setAttribute('d', p);
      gNode.appendChild(pathNode);
    });
  }

  node.appendChild(gNode);

  return node;
};

export default generateNode;
