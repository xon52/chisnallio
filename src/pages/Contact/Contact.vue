<template>
  <section id="Contact">
    <h1 class="fancy-text highlight">Let's connect ☕</h1>
    <div class="contact-buttons">
      <template v-for="{ url, label, icon, color } in buttons">
        <ContactButtonVue :url="url" :label="label" :icon="icon" :color="color" />
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import ContactButtonVue from './ContactButton.vue'

const buttons = [
  { label: 'LinkedIn', url: '', icon: 'linkedin', color: '#0077B5' },
  { label: 'Github', url: '', icon: 'github', color: 'white' },
  { label: 'Discord', url: '', icon: 'discord', color: '#5865f2' },
]
</script>

<style lang="scss" scoped>
@use '@/styles/helpers' as *;

#Contact {
  background-color: $green-bg;
}
.contact-buttons {
  display: flex;
  align-items: center;
  justify-items: center;
}

// Mobile
@include sm-and-down {
  .contact-buttons {
    flex-direction: column;
  }
}
</style>
