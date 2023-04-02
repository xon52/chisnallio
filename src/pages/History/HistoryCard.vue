<template>
  <div class="box">
    <div class="image">
      <IconVue v-if="icon" :icon="icon" size="5rem" fill="purple" />
      <img v-else-if="imgUrl" :src="imgUrl" />
    </div>
    <h5 class="title">{{ title }}</h5>
    <h6 class="date">({{ date }})</h6>
  </div>
</template>

<script setup lang="ts">
import IconVue from '@/assets/icons/Icon.vue'

defineProps<{ icon?: string; imgUrl?: string; title: string; date: string; summary: string }>()
</script>

<style lang="scss" scoped>
@use '@/styles/helpers' as *;
@use 'sass:color';
// ----------------------------------------

$color: rgb(255, 187, 0);
$history-background: color.adjust($color, $lightness: 10%);
$history-border: color.adjust($color, $lightness: -10%);
$history-shadow: color.adjust($color, $lightness: -30%);
$history-text: color.adjust($color, $lightness: -35%);

.box {
  position: relative;
  flex: 0 1 20%;
  background: $history-background;
  box-shadow: $history-shadow 10px 10px 24px;
  padding: 2rem 2rem 3rem;
  text-align: center;
  border: 10px solid $history-border;
  transition: all 0.3s ease-in;
  // border-radius: 60% 33% 26% 67% / 51% 62% 28% 41%;

  .image {
    transition: all 0.3s ease-in-out 0.1s;
    img {
      max-width: 90%;
      object-fit: scale-down;
    }
  }

  .title {
    margin-top: 15px;
    text-align: center;
    font-weight: bold;
    color: $history-text;
    transition: all 0.3s ease-in-out;
  }

  .date {
    position: absolute;
    bottom: 0.5rem;
    right: 0;
    left: 0;
    font-weight: bold;
    color: $history-text;
  }

  &:hover {
    transform: scale(1.1);

    .image {
      transform: scale(1.5) translateY(-20px);
      img {
        animation: bouncing 0.5s 0.3s;
      }
    }
  }
}
</style>
