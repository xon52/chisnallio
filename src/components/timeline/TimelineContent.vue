<template>
  <div class="wrapper" :class="{ reverse }">
    <div class="date">
      <h4>{{ item.date }}</h4>
    </div>
    <img v-if="item.imgUrl" class="logo-mobile" :src="item.imgUrl" :alt="item.title" />
    <div class="content">
      <div class="title">
        <h4>
          {{ item.title }} <span class="date-mobile">{{ item.date }}</span>
        </h4>
      </div>
      <div class="summary">
        <p>
          {{ item.summary }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HistoryType } from '@/types'

const { item, reverse } = defineProps<{ item: HistoryType; reverse?: boolean }>()
</script>

<style lang="scss">
@use '@/styles/helpers' as *;
@use './style.scss' as *;

.wrapper {
  display: flex;
  align-items: stretch;
  background: $white-bg;
  width: 100%;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 100, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3),
    0 -12px 36px -8px rgba(0, 0, 0, 0.025);
  flex-direction: inherit;
  border-radius: $card-border-radius;
  z-index: 1;

  .logo-mobile {
    display: none;
    height: 15vw;
    width: 15vw;
    align-self: center;
    border-radius: $card-border-radius;
  }

  .content {
    display: flex;
    flex-direction: column;
    z-index: 2;
    padding: $spacing;
    width: 100%;
    border-radius: 0 $card-border-radius $card-border-radius 0;

    .title {
      color: var(--color1);
      margin-bottom: calc($spacing / 2);
      .date-mobile {
        display: none;
        background-color: var(--color1);
        color: var(--color2);
        padding: 0 0.75em;
        border-radius: 1em;
        margin-left: 0.5em;
      }
    }
    .title,
    .summary {
      pointer-events: none;
    }
  }

  .date {
    width: $date-width;
    background-color: var(--color1);
    color: var(--color2);
    padding: $spacing;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: $card-border-radius 0 0 $card-border-radius;
  }

  &.reverse {
    .content {
      border-radius: $card-border-radius 0 0 $card-border-radius;
    }
    .date {
      border-radius: 0 $card-border-radius $card-border-radius 0;
    }
  }
}

// Tablet
@include md-and-down {
  .wrapper {
    padding: calc($spacing / 2) !important;
    .date {
      display: none !important;
    }
    .logo-mobile {
      display: block;
    }
    .content {
      .date-mobile {
        display: inline-block !important;
      }
    }
  }
}

// Mobile
@include xs-and-down {
  .logo-mobile {
    display: none !important;
  }
}
</style>
