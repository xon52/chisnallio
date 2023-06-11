<template>
  <div class="hamburger" :class="{ open: isOpen }" @click="onClick">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script setup lang="ts">
const { isOpen } = defineProps<{ isOpen: boolean }>()
const emit = defineEmits<{ (e: 'click'): void }>()
const onClick = () => emit('click')
</script>

<style lang="scss" scoped>
@use '@/styles/helpers' as *;

$size: 60px;
$spacing: 10px;
$thickness: 5px;
$z-index: 100;

.hamburger {
  align-items: center;
  bottom: $spacing;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: $size;
  justify-content: center;
  position: fixed;
  width: $size;
  z-index: 1;

  span {
    height: $thickness;
    width: $size * 0.5;
    background: $accent;
    transition: 0.35s ease-in-out;
    margin: calc(#{$thickness} * -0.5 + 5px);
  }

  &.open {
    background: transparent;
    span:nth-child(1) {
      top: $spacing;
      transform: translateY($spacing) rotate(-135deg);
    }
    span:nth-child(2) {
      width: 0;
    }
    span:nth-child(3) {
      top: $spacing;
      transform: translateY($spacing * -1) rotate(135deg);
    }
  }
}
</style>
