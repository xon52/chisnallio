<template>
  <NavigationVue />
  <main>
    <IntroVue />
    <PortfolioVue />
    <HistoryVue />
    <ContactVue />
  </main>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->
  <!-- <footer>
    <FooterSectionVue msg="Vite + Vue" />
  </footer> -->
</template>

<script setup lang="ts">
import NavigationVue from './components/layout/Navigation.vue'
import ContactVue from './pages/Contact.vue'
import HistoryVue from './pages/History.vue'
import IntroVue from './pages/Intro.vue'
import PortfolioVue from './pages/Portfolio.vue'

import { useAppStore } from './stores/app'
import { onMounted } from 'vue'

const appStore = useAppStore()

onMounted(() => {
  appStore.initialise()
})
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
