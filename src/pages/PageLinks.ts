import type { PageLinkType } from '@/types'

const links: PageLinkType[] = [
  {
    label: 'Intro',
    anchor: 'Intro',
    showInNav: false,
  },
  {
    label: 'Skills',
    anchor: 'Skills',
    icon: 'squares',
    showInNav: true,
  },
  {
    label: 'Portfolio',
    anchor: 'Portfolio',
    icon: 'trophy',
    showInNav: true,
  },
  {
    label: 'History',
    anchor: 'History',
    icon: 'path',
    showInNav: true,
  },
  {
    label: 'Contact',
    anchor: 'Contact',
    icon: 'contact',
    showInNav: true,
  },
]

export default links
