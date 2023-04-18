<template>
  <div class="contact-button" :style="`--color:${color}`" @click="open">
    <h4 class="label">{{ label }}</h4>
    <IconVue class="logo" :icon="icon" />
    <h5 class="label"><IconVue icon="newTab" /></h5>
  </div>
</template>

<script setup lang="ts">
import IconVue from '@/assets/icons/Icon.vue'

const { url, label, icon, color } = defineProps<{ url: string; label: string; icon: string; color: string }>()

const open = () => globalThis.open(url, '_blank')
</script>

<style lang="scss" scoped>
@use '@/styles/helpers' as *;

$contact-width: 200px;
$spacing: 20px;

.contact-button {
  border-radius: 100%;
  width: $contact-width;
  height: $contact-width;
  padding: $spacing;
  margin: $spacing;
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  background-color: lighten($black-bg, 10%);
  border-color: darken($black-bg, 20%);
  border-width: 5px;
  border-style: outset;
  position: relative;
  transition: 0.3s all ease-in-out;
  color: var(--color);
  cursor: pointer;
  .logo {
    font-size: $contact-width;
    transform: scale(0.8, 0.8);
    transition: 0.3s all ease-in-out;
  }

  .label {
    color: $light-text;
    opacity: 0;
    height: 0;
    display: inline-block;
  }

  &:hover {
    animation: bouncing 1s normal 0.3s;
    background-color: lighten($black-bg, 20%);
    border-radius: 25%;
    height: calc($contact-width + $spacing * 2);
    margin-bottom: 0;
    .label {
      opacity: 1;
      height: auto;
    }
  }
  &:active {
    border-style: inset;
  }
}
</style>
