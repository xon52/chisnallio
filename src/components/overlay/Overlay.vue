<template>
  <div class="overlay" @click="handleOverlayClick" data-testid="overlay-wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['overlayClick'])

const handleOverlayClick = () => emit('overlayClick')
</script>

<style lang="scss" scoped>
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
