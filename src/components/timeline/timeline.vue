<template>
  <div class="timeline">
    <template v-for="({ title, date, summary, imgUrl }, index) in items">
      <div class="event" :class="{ reverse: index % 2 !== 0 }" :style="getColors(index)">
        <div class="badge">
          <img v-if="imgUrl" :src="imgUrl" :alt="title" />
          <IconVue v-else icon="briefcase" size="100%" />
          <div class="line-left"></div>
          <div class="line-down"></div>
        </div>
        <div class="wrapper">
          <div class="date">
            <h4>{{ date }}</h4>
          </div>
          <div class="content">
            <div class="title">
              <h4>{{ title }}</h4>
            </div>
            <div class="summary">
              <p>
                {{ summary }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import IconVue from '@/assets/icons/Icon.vue'
import { HistoryType } from '@/types'

const { items } = defineProps<{ items: HistoryType[] }>()

const getColors = (index: number) => {
  if (index % 3 === 0)
    return {
      '--color1': '#9251ac',
      '--color2': '#f6a4ec',
    }
  if (index % 2 === 0)
    return {
      '--color1': '#555ac0',
      '--color2': '#87bbfe',
    }
  return {
    '--color1': '#24b47e',
    '--color2': '#aff1b6',
  }
}

const emit = defineEmits(['click'])
</script>

<style lang="scss" scoped>
@use '@/styles/helpers' as *;

$badge-width: 100px;
$date-width: 100px;
$card-height: 100px;
$card-border-radius: 6px;
$spacing: 20px;

.timeline {
  width: 90vw;
  max-width: 800px;
  margin: calc(2 * $spacing) 0;

  .event {
    display: flex;
    align-items: center;
    justify-items: center;
    margin: calc(2 * $spacing) auto;

    .badge {
      border-radius: 50%;
      display: flex;
      box-shadow: 0 30px 60px -12px rgba(50, 50, 100, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3),
        0 -12px 36px -8px rgba(0, 0, 0, 0.025);
      animation: bouncing 0.5s 0.3s;
      position: relative;
      img {
        border-radius: 50%;
        height: $badge-width;
        width: $badge-width;
        object-fit: cover;
        transition: all 0.3s ease-in-out;
        border-width: 2px;
        border-style: solid;
        border-color: var(--color1);
        z-index: 4;
        &:hover {
          transform: scale(2, 2);
          border-radius: 10%;
          border-width: 5px;
          animation: bouncing-2 0.5s 0.3s;
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
        animation: fillTop forwards 4s ease-in-out;
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
      }
    }

    .wrapper {
      display: flex;
      width: 100%;
      box-shadow: 0 30px 60px -12px rgba(50, 50, 100, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3),
        0 -12px 36px -8px rgba(0, 0, 0, 0.025);
      flex-direction: inherit;
      border-radius: $card-border-radius;
      z-index: 1;

      .content {
        background: $white-bg;
        display: flex;
        flex-direction: column;
        z-index: 2;
        padding: $spacing;
        width: 100%;

        .title {
          color: var(--color1);
          margin-bottom: $spacing;
        }

        .summary {
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
      }
    }

    // Reversible event parts
    &:not(.reverse) {
      flex-direction: row;
      .badge {
        margin-right: calc(2 * $spacing);
        img {
          &:hover {
            border-style: inset;
          }
        }
        .line-left {
          right: auto;
          left: 0%;
          animation: fillLeftOdd forwards 4s ease-in-out;
        }
      }
      .wrapper {
        .content {
          border-radius: 0 $card-border-radius $card-border-radius 0;
        }
        .date {
          border-radius: $card-border-radius 0 0 $card-border-radius;
        }
      }
    }
    &.reverse {
      flex-direction: row-reverse;
      .badge {
        margin-left: calc(2 * $spacing);
        img {
          &:hover {
            border-style: outset;
          }
        }
        .line-left {
          right: 0;
          left: auto;
          animation: fillLeft forwards 4s ease-in-out;
        }
      }
      .wrapper {
        .content {
          border-radius: $card-border-radius 0 0 $card-border-radius;
        }
        .date {
          border-radius: 0 $card-border-radius $card-border-radius 0;
        }
      }
    }
    &:last-of-type {
      .line-down {
        display: none;
      }
    }
  }
}

@keyframes bouncing-2 {
  from,
  to {
    transform: scale(2, 2);
  }
  25% {
    transform: scale(1.8, 2.2);
  }
  50% {
    transform: scale(2.2, 1.8);
  }
  75% {
    transform: scale(1.9, 2.1);
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
