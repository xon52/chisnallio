import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

import './index.css';
import { useAppStore } from './store';

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);

const { init } = useAppStore();
init();

app.mount('#app');
