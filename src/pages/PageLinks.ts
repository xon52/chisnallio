import { PageLinkType } from '@/types'
import { defineAsyncComponent } from 'vue'

const links: PageLinkType[] = [
  {
    label: 'Intro',
    anchor: 'Intro',
    component: defineAsyncComponent(async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      return import('@/pages/Intro.vue')
    }),
    showInNav: false,
  },
  {
    label: 'Portfolio',
    anchor: 'Portfolio',
    component: defineAsyncComponent(() => import('@/pages/Portfolio.vue')),
    icon: 'squares',
    showInNav: true,
  },
  {
    label: 'History',
    anchor: 'History',
    component: defineAsyncComponent(() => import('@/pages/History.vue')),
    icon: 'path',
    showInNav: true,
  },
  {
    label: 'Contact',
    anchor: 'Contact',
    component: defineAsyncComponent(() => import('@/pages/Contact.vue')),
    icon: 'contact',
    showInNav: true,
  },
]

export default links
