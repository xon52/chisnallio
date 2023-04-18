<template>
  <div class="timeline">
    <template v-for="(item, index) in items">
      <div class="event" :style="getColorsFromIndex(index)">
        <TimelineBadgeVue :item="item" :reverse="index % 2 !== 0" />
        <TimelineContentVue :item="item" :reverse="index % 2 !== 0" />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { HistoryType } from '@/types'
import TimelineBadgeVue from './TimelineBadge.vue'
import TimelineContentVue from './TimelineContent.vue'
import getColorsFromIndex from './getColorsFromIndex.js'

const { items } = defineProps<{ items: HistoryType[] }>()
</script>

<style lang="scss" scoped>
@use '@/styles/helpers' as *;
@use './style.scss' as *;

.timeline {
  width: 90vw;
  max-width: 800px;

  .event {
    display: flex;
    align-items: center;
    justify-items: center;
    margin: calc(2 * $spacing) auto;
    flex-direction: row;

    // Event hover
    &:hover {
      // **Modifies child component**
      :deep(.badge) {
        .logo {
          transform: scale(2, 2);
          border-radius: 10%;
          border-width: 5px;
        }
      }
    }

    // Last event
    &:last-of-type {
      // **Modifies child component**
      :deep(.badge) {
        .line-down {
          display: none !important;
        }
      }
    }

    // Even events not mobile
    @include md-and-up {
      &:nth-of-type(2n) {
        flex-direction: row-reverse;
      }
    }
  }
}
</style>
