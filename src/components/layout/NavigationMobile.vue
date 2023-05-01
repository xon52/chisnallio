<template>
  <div :class="{ open }">
    <div class="nav-toggle" @click="onToggle">
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <nav class="nav-bg">
      <ul>
        <li v-for="link in links" @click="link.anchor ? scrollToAnchor(link.anchor, offset) : null">
          <IconVue v-if="link.icon !== undefined" :icon="link.icon" />
          <span>{{ link.label }}</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import IconVue from '@/assets/icons/Icon.vue'
import { PageLinkType } from '@/types'
import { ref } from 'vue'
import { scrollToAnchor } from '@/helpers'

const { links } = defineProps<{ links: PageLinkType[] }>()
const open = ref(false)
const onToggle = () => (open.value = !open.value)
// TODO: SCSS $nav-height-scroll
const offset = 70
</script>

<style lang="scss" scoped>
.nav-bg {
  width: 60px;
  height: 60px;
  left: calc((100% - 60px) / 2);
  bottom: 10px;
  display: flex;
  position: fixed;
  background: #17a669;
  border-radius: 50%;
  transition: all 0.3s ease-out;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
    opacity: 0;
    li {
      opacity: 0;
      transition: all 0.3s ease-out;
      transition-delay: 0.2s;
      &:nth-child(2) {
        transition-delay: 0.3s;
      }
      &:nth-child(3) {
        transition-delay: 0.4s;
      }
      &:nth-child(4) {
        transition-delay: 0.5s;
      }
      &:nth-child(5) {
        transition-delay: 0.6s;
      }
    }
  }
}
.open .nav-bg {
  width: 100vw;
  height: 100vh;
  border-radius: 0;
  bottom: 0;
  left: 0;

  ul {
    opacity: 1;

    li {
      opacity: 1;
    }
  }
}

/* ***********************************************************
* .nav-toggle
* *********************************************************** */
.nav-toggle {
  position: fixed;
  left: calc((100% - 60px) / 2);
  bottom: 10px;
  cursor: pointer;
  padding: 15px;
  z-index: 1001;

  div {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  span {
    height: 2px;
    width: 30px;
    background: #fff;
    transition: 0.35s ease-in-out;
    margin: 4px 0;
  }
}

.open .nav-toggle {
  background: transparent;
  span:nth-child(1) {
    top: 9px;
    transform: translateY(10px) rotate(-135deg);
  }
  span:nth-child(2) {
    width: 0;
    left: 50%;
  }
  span:nth-child(3) {
    top: 9px;
    transform: translateY(-10px) rotate(135deg);
  }
}
</style>
