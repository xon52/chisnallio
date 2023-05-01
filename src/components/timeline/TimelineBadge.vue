<template>
  <div class="badge" :class="{ reverse }">
    <template v-if="item.imgUrl">
      <a class="logo" :href="item.companyUrl" target="_blank" :data-tooltip="item.companyUrl ? 'Visit website' : ''">
        <img :src="item.imgUrl" :alt="item.title" :class="{ link: item.companyUrl }" />
      </a>
    </template>
    <IconVue v-else icon="briefcase" size="100%" />
    <div class="line-left"></div>
    <div class="line-down"></div>
  </div>
</template>

<script setup lang="ts">
import IconVue from '@/assets/icons/Icon.vue'
import { HistoryType } from '@/types'

const { item, reverse } = defineProps<{ item: HistoryType; reverse?: boolean }>()
</script>

<style lang="scss">
@use '@/styles/helpers' as *;
@use './style.scss' as *;

.badge {
  border-radius: 50%;
  display: flex;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 100, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3),
    0 -12px 36px -8px rgba(0, 0, 0, 0.025);
  position: relative;
  margin: 0 calc(2 * $spacing) 0 0;
  .logo {
    border-radius: 50%;
    height: $badge-width;
    width: $badge-width;
    object-fit: cover;
    transition: all 0.3s 0.1s ease-in-out;
    border-width: 2px;
    transform: scale(1, 1);
    border-style: inset;
    border-color: var(--color1);
    z-index: 4;
    overflow: hidden;
    position: relative;

    &:hover::after {
      content: attr(data-tooltip);
      background-color: adjust-color($color: $black-bg, $alpha: -0.9);
      color: adjust-color($color: $black-bg);
      padding: 2px;
      font-size: small;
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }

  svg {
    color: var(--color1);
  }

  .line-down {
    width: 8px;
    border: 2px solid var(--color1);
    border-top: 0;
    border-bottom: 0;
    height: 100%;
    background: var(--color2);
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translateX(-50%);
    animation: fillTop forwards 2s ease-in-out;
  }
  .line-left {
    content: '';
    width: 100%;
    height: 8px;
    border: 2px solid var(--color1);
    border-left: 0;
    border-right: 0;
    background: var(--color2);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: auto;
    left: 0%;
    animation: fillLeftOdd forwards 2s ease-in-out;
  }

  &.reverse {
    margin: 0 0 0 calc(2 * $spacing);
    .logo {
      border-style: outset;
    }
    .line-left {
      right: 0;
      left: auto;
      animation: fillLeft forwards 2s ease-in-out;
    }
  }
}

// Mobile
@include md-and-down {
  .badge {
    display: none !important;
  }
}

@keyframes fillLeft {
  100% {
    right: 100%;
  }
}

@keyframes fillTop {
  100% {
    top: 100%;
  }
}

@keyframes fillLeftOdd {
  100% {
    left: 100%;
  }
}
</style>
