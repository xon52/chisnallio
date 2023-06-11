import type { PageLinkType } from '@/types';

const links: PageLinkType[] = [
  {
    label: 'Me',
    anchor: 'Hero',
    icon: 'circleUser',
    showInMobNav: true,
    showInWebNav: false,
  },
  {
    label: 'Skills',
    anchor: 'Skills',
    icon: 'squares',
    showInMobNav: true,
    showInWebNav: true,
  },
  {
    label: 'History',
    anchor: 'History',
    icon: 'path',
    showInMobNav: true,
    showInWebNav: true,
  },
  {
    label: 'Contact',
    anchor: 'Contact',
    icon: 'contact',
    showInMobNav: true,
    showInWebNav: true,
  },
];

export default links;
