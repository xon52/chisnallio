<template>
  <span>
    <span
      v-for="(char, i) in text"
      :key="char + i"
      :class="['text-char', `_${i}`, { 'loading': loadingAnimation }, { hover: characterHoverStates[i] }]"
      @mouseenter="onCharacterHover(i)"
      @animationend="onCharacterAnimationEnd(i)"
      data-testid="animated-letters-character"
    >
      {{ char }}
    </span>
  </span>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const { text, delay } = defineProps({
  text: { type: String, required: true },
  delay: { type: Number, default: 1000 },
})

const loadingAnimation = ref(true)
const characterHoverStates = ref(text.split('').map((_) => false))
const onCharacterHover = (index: number) => characterHoverStates.value.splice(index, 1, true)
const onCharacterAnimationEnd = (index: number) => characterHoverStates.value.splice(index, 1, false)

onMounted(() => setTimeout(() => (loadingAnimation.value = false), delay))
</script>

<style lang="scss" scoped>
.text-char {
  min-width: 1rem;
  display: inline-block;
  transition: color cubic-bezier(0.7, 0.8, 0.9, 0.95) 0.4s;
  &:hover {
    color: #ffd700;
    transition: color cubic-bezier(0.7, 0.8, 0.9, 0.95) 0.2s;
  }
  &.hover {
    animation-name: rubberBand;
    animation-duration: 1s;
  }
}
.loading {
  opacity: 0;
  animation-name: bounceIn;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

@for $i from 0 through 35 {
  .loading._#{$i} {
    animation-delay: calc(1s * $i / 10);
  }
}
</style>
