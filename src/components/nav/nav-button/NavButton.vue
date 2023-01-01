<template>
  <div
    :class="['wrapper', { loading: isLoading, large, small }]"
    @mouseenter="onHoverChange(true)"
    @mouseleave="onHoverChange(false)"
    @click="onClick"
    data-testid="nav-button-wrapper"
  >
    <transition-vue
      mode="out-in"
      enter-active-class="animate__animated animate__flipInY animate-fast"
      leave-active-class="animate__animated animate__flipOutY animate-fast"
    >
      <div v-if="isHover" class="label" data-testid="nav-button-label">
        {{ link.label }} <icon-wrapper-vue v-if="link.url" icon="fas arrow-up-right-from-square" />
      </div>
      <icon-wrapper-vue v-else class="icon" :icon="link.icon" data-testid="nav-button-icon" />
    </transition-vue>
  </div>
</template>

<script setup lang="ts">
import { onMounted, type PropType, ref, Transition as TransitionVue } from 'vue'
import IconWrapperVue from '@/dependencies/IconWrapper.vue'
import router from '@/router'
import type { LinkType } from '@/types'

const { link, loadingTime, large, small } = defineProps({
  link: { type: Object as PropType<LinkType>, required: true },
  loadingTime: { type: Number, default: 400 },
  large: { type: Boolean, default: false },
  small: { type: Boolean, default: false },
})

const isLoading = ref(true)
const isHover = ref(false)
const onHoverChange = (hover: boolean) => (isHover.value = hover)
const onClick = () => {
  if (link.path) router.push(link.path)
  else if (link.url) globalThis.open(link.url)
}

onMounted(() => setTimeout(() => (isLoading.value = false), loadingTime))
</script>

<style lang="scss" scoped>
.wrapper {
  height: 30px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: color cubic-bezier(0.7, 0.8, 0.9, 0.95) 0.2s;
  /* TODO: update sizes with design system vars */
  font-size: x-large;
  &:hover {
    color: #ffd700;
  }
  &.small {
    height: 20px;
    .icon {
      /* TODO: update sizes with design system vars */
      font-size: medium;
    }
  }
  &.large {
    height: 40px;
    .icon {
      /* TODO: update sizes with design system vars */
      font-size: xx-large;
    }
  }
}
.loading {
  opacity: 0;
  animation-name: bounceIn;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
.animate-fast {
  animation-duration: 0.25s;
}
</style>
