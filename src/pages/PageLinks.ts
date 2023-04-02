import type { PageLinkType } from '@/types'
import { defineAsyncComponent } from 'vue'

const links: PageLinkType[] = [
  {
    label: 'Intro',
    anchor: 'Intro',
    showInNav: false,
  },
  {
    label: 'Portfolio',
    anchor: 'Portfolio',
    icon: 'squares',
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
