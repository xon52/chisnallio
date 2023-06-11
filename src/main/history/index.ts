import items from './items';
import getColorsFromIndex from './getColorsFromIndex';
import generateBadge from './timelineBadge';
import generateContent from './timelineContent';

const generateNode = () => {
  const node = document.createElement('section');
  node.id = 'History';
  node.innerHTML += `<h1 class="fancy-text highlight">Professional History ⏳</h1> `;
  const timeline = document.createElement('div');
  timeline.className = 'timeline';
  items.forEach((item, index) => {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'event';
    timelineItem.style.cssText += getColorsFromIndex(index);
    timelineItem.appendChild(generateBadge(item, index % 2 !== 0));
    timelineItem.appendChild(generateContent(item, index % 2 !== 0));
    timeline.appendChild(timelineItem);
  });
  node.appendChild(timeline);

  return node;
};

export default generateNode;
