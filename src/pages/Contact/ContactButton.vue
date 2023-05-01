<template>
  <div class="contact-button" :style="`--color:${color}`" @click="open">
    <h4 class="label">{{ label }}</h4>
    <IconVue class="logo" :icon="icon" />
    <h6 v-if="appStore.mdAndUp" class="label"><IconVue icon="newTab" /></h6>
  </div>
</template>

<script setup lang="ts">
import IconVue from '@/assets/icons/Icon.vue'
import { useAppStore } from '@/stores/app'

const { url, label, icon, color } = defineProps<{ url: string; label: string; icon: string; color: string }>()
const appStore = useAppStore()

const open = () => globalThis.open(url, '_blank')
</script>

<style lang="scss" scoped>
@use '@/styles/helpers' as *;

$contact-width: 200px;
$spacing: 20px;

.contact-button {
  align-items: center;
  background-color: lighten($black-bg, 10%);
  border-color: darken($black-bg, 20%);
  border-radius: 100%;
  border-style: outset;
  border-width: 5px;
  color: var(--color);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: $contact-width;
  justify-items: center;
  margin: $spacing;
  padding: $spacing;
  position: relative;
  transition: 0.3s all ease-in-out;
  width: $contact-width;
  .logo {
    font-size: $contact-width;
    transform: scale(0.8, 0.8);
    transition: 0.3s all ease-in-out;
  }

  .label {
    color: $light-text;
    display: inline-block;
    opacity: 0;
    height: 0;
  }

  &:hover {
    animation: contact-button-animation 1s normal 0.3s;
    background-color: lighten($black-bg, 20%);
    border-radius: 25%;
    height: calc($contact-width + $spacing * 2);
    padding: 0 $spacing;
    margin: 0 $spacing;
    .label {
      opacity: 1;
      height: auto;
    }
  }
  &:active {
    border-style: inset;
  }
}

// Mobile
@include sm-and-down {
  .contact-button {
    border-radius: $contact-width * 0.5;
    width: $contact-width * 1.5;
    max-width: 90vw;
    height: $contact-width * 0.5;
    margin: $spacing * 0.5;
    flex-direction: row;
    justify-content: space-between;

    .logo {
      font-size: $contact-width * 0.5;
    }
    .label {
      opacity: 1;
      height: auto;
    }

    &:hover {
      height: $contact-width * 0.5;
      border-radius: $contact-width * 0.5;
      padding: $spacing;
      margin: $spacing * 0.5;
    }
  }
}

@keyframes contact-button-animation {
  from,
  to {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(0.9, 1.1);
  }
  50% {
    transform: scale(1.1, 0.9);
  }
  75% {
    transform: scale(0.95, 1.05);
  }
}
</style>
