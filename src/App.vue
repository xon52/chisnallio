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
import HistoryVue from './pages/History/History.vue'
import IntroVue from './pages/Intro.vue'
import PortfolioVue from './pages/Portfolio/Portfolio.vue'

import { useAppStore } from './stores/app'
import { onMounted } from 'vue'

const appStore = useAppStore()

onMounted(() => {
  appStore.initialise()
})
</script>

<style lang="scss" scoped>
@use '@/styles/helpers' as *;

#app {
  background-color: $black-bg;
  color: $light-text;
  font-family: 'Rubik', sans-serif;
  letter-spacing: 0.05rem;
}
</style>
