import { Ref, ref } from 'vue'
import { createRouter, createWebHistory, RouteLocationNormalized } from 'vue-router'
import P403 from './pages/errors/403/403.vue'
import P404 from './pages/errors/404/404.vue'
import P500 from './pages/errors/500/500.vue'
import Home from './pages/home/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: Home },
    { path: '/skills', name: 'skills', component: Home },
    { path: '/my-work', name: 'my-work', component: Home },
    { path: '/contact', name: 'contact', component: Home },
    { path: '/403', name: '403', component: P403 },
    { path: '/500', name: '500', component: P500 },
    { path: '/:pathMatch(.*)*', alias: '/404', name: '404', component: P404 },
  ],
})

export const currentRoute: Ref<RouteLocationNormalized> = ref(router.currentRoute.value)

router.beforeEach((to, from, next) => next())
router.afterEach((to) => (currentRoute.value = to))
router.onError(() => router.push({ name: 'Error' }))

export default router
