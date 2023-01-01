<template>
  <div class="menu-button-wrapper" @click="onClick" data-testid="nav-menu-button">
    <icon-wrapper-vue class="menu-button-icon" :icon="link.icon" />
    <span class="menu-button-label">{{ link.label }}</span>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import IconWrapperVue from '@/dependencies/IconWrapper.vue'
import router from '@/router'
import type { LinkType } from '@/types'

const { link } = defineProps({
  link: { type: Object as PropType<LinkType>, required: true },
})

const onClick = () => {
  if (link.path) router.push(link.path)
  else if (link.url) globalThis.open(link.url)
}
</script>

<style lang="scss" scoped>
.menu-button-wrapper {
  height: 30px;
  padding: 10px 20px;
  display: flex;
  justify-content: left;
  align-items: center;
  cursor: pointer;
  transition: color cubic-bezier(0.7, 0.8, 0.9, 0.95) 0.2s;
  &:hover {
    color: #ffd700;
    animation: rubberBand 1s;
  }

  .menu-button-icon {
    /* TODO: update sizes with design system vars */
    font-size: x-large;
    margin-right: 10px;
  }

  .menu-button-label {
    /* TODO: update sizes with design system vars */
    font-size: large;
  }
}
</style>
