import { createApp } from 'vue'
import router from '@/router'
import App from '@/pages/app/App.vue'

import '@/styles/main.scss'
import 'animate.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
