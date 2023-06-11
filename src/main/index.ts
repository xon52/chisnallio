import navNode from './navigation';
import heroNode from './hero';
import skillsNode from './skills';
import historyNode from './history';
import contactNode from './contact';

import '@/styles/main.scss';

const main = document.querySelector<HTMLDivElement>('#main')!;

main.appendChild(navNode());
main.appendChild(heroNode());
main.appendChild(skillsNode());
main.appendChild(historyNode());
main.appendChild(contactNode());
