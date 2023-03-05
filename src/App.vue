<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->

  <header id="Intro">
    <NavigationVue />
    <IntroVue />
  </header>
  <main>
    <SectionVue id="Portfolio"><PortfolioVue /></SectionVue>
    <SectionVue id="History"><HistoryVue /></SectionVue>
    <SectionVue id="Contact"><ContactVue /></SectionVue>
  </main>
  <!-- <footer>
    <FooterSectionVue msg="Vite + Vue" />
  </footer> -->
</template>

<script setup lang="ts">
import HelloWorld from './pages/HelloWorld.vue'
import IntroVue from './pages/Intro.vue'
import NavigationVue from './components/layout/Navigation.vue'
import SectionVue from './components/layout/Section.vue'
import FooterSectionVue from './pages/Footer.vue'
import { useAppStore } from './stores/app'
import { onMounted } from 'vue'
import ContactVue from './pages/Contact.vue'
import HistoryVue from './pages/History.vue'
import PortfolioVue from './pages/Portfolio.vue'
import links from './pages/PageLinks'

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
