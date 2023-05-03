<template>
  <div class="nav-toggle-btn" :class="{ open: isOpen }" @click="onClick">
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

.nav-toggle-btn {
  align-items: center;
  bottom: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  left: calc((100% - 60px) / 2);
  padding: 15px;
  position: fixed;
  z-index: 1001;

  span {
    height: 2px;
    width: 30px;
    background: #fff;
    transition: 0.35s ease-in-out;
    margin: 4px 0;
  }

  &.open {
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
}
</style>
