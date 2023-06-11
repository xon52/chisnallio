import navMobNode from './mob-wrapper';
import navWebNode from './web-wrapper';

import { store, subscribe } from '@/store';

const mobNode = navMobNode();
const webNode = navWebNode();

const generateNode = () => (store.isMobile ? mobNode : webNode);

subscribe('isMobile', (isMobile) => {
  if (isMobile) webNode.replaceWith(mobNode);
  else mobNode.replaceWith(webNode);
});

export default generateNode;
