import { HistoryType } from '@/types';

export default (item: HistoryType, reverse: boolean) => {
  const node = document.createElement('div');
  node.classList.add('wrapper');
  node.classList.toggle('reverse', reverse);
  // Date
  node.innerHTML += /*HTML*/ `
    <div class="date">
      <h4>${item.date}</h4>
    </div>
  `;
  // Image URL
  if (item.imgUrl) {
    node.innerHTML += /*HTML*/ `
      <img class="logo-mobile" src="${item.imgUrl}" alt="${item.title}" />
    `;
  }
  // Content
  node.innerHTML += /*HTML*/ `
    <div class="content">
      <div class="title">
        <h4>${item.title} <span class="date-mobile">${item.date}</span></h4>
      </div>
      <div class="summary">
        <p>${item.summary}</p>
      </div>
    </div>
  `;
  return node;
};
