import { HistoryType } from '@/types';
import genIcon from '@/icons';

export default (item: HistoryType, reverse: boolean) => {
  const node = document.createElement('div');
  node.classList.add('badge');
  node.classList.toggle('reverse', reverse);
  // Company Logo or Briefcase Icon
  if (item.imgUrl) {
    const companyLogo = document.createElement('a');
    companyLogo.classList.add('logo');
    if (item.companyUrl) {
      companyLogo.href = item.companyUrl;
      companyLogo.target = '_blank';
      companyLogo.dataset.tooltip = 'Visit website';
    }
    companyLogo.innerHTML = /*HTML*/ `
      <img src="${item.imgUrl}" alt="${item.title}" class="${item.companyUrl ? item.companyUrl : ''}" />
    `;
    node.appendChild(companyLogo);
  } else {
    node.appendChild(genIcon('briefcase', '7rem'));
  }
  node.innerHTML += /*HTML*/ `
    <div class="line-left"></div>
    <div class="line-down"></div>
  `;
  return node;
};
