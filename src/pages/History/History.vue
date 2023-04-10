<template>
  <section id="History">
    <TimelineVue :items="events" />
  </section>
</template>

<script setup lang="ts">
import events from './histories.ts'
import TimelineVue from '@/components/timeline/Timeline.vue'
</script>

<style lang="scss">
@use '@/styles/helpers' as *;

#History {
  background-color: $orange-bg;
}
</style>
