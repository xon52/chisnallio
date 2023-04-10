<template>
  <div class="timeline">
    <template v-for="({ title, date, summary, imgUrl, companyUrl }, index) in items">
      <div class="event" :style="getColors(index)">
        <div class="badge">
          <template v-if="imgUrl">
            <a class="logo" :href="companyUrl" target="_blank" :data-tooltip="companyUrl ? 'Visit website' : ''">
              <img :src="imgUrl" :alt="title" :class="{ link: companyUrl }" />
            </a>
          </template>
          <IconVue v-else icon="briefcase" size="100%" />
          <div class="line-left"></div>
          <div class="line-down"></div>
        </div>
        <div class="wrapper">
          <div class="date">
            <h4>{{ date }}</h4>
          </div>
          <img v-if="imgUrl" class="logo-mobile" :src="imgUrl" :alt="title" />
          <div class="content">
            <div class="title">
              <h4>
                {{ title }} <span class="date-mobile">{{ date }}</span>
              </h4>
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

// Colour options
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

  .event {
    display: flex;
    align-items: center;
    justify-items: center;
    margin: calc(2 * $spacing) auto;
    flex-direction: row;

    .badge {
      border-radius: 50%;
      display: flex;
      box-shadow: 0 30px 60px -12px rgba(50, 50, 100, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3),
        0 -12px 36px -8px rgba(0, 0, 0, 0.025);
      animation: bouncing 0.5s 0.3s;
      position: relative;
      margin: 0 calc(2 * $spacing) 0 0;
      .logo {
        border-radius: 50%;
        height: $badge-width;
        width: $badge-width;
        object-fit: cover;
        transition: all 0.3s ease-in-out;
        border-width: 2px;
        border-style: solid;
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
        right: auto;
        left: 0%;
        animation: fillLeftOdd forwards 4s ease-in-out;
      }
    }

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
        border-radius: $card-border-radius 0 0 $card-border-radius;
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
        border-radius: $card-border-radius 0 0 $card-border-radius;
      }
    }

    // Event hover
    &:hover {
      .badge {
        .logo {
          transform: scale(2, 2);
          border-radius: 10%;
          border-width: 5px;
          animation: bouncing-2 0.5s 0.3s;
          border-style: inset;
        }
      }
    }

    // Even events
    &:nth-of-type(2n) {
      flex-direction: row-reverse;
      .badge {
        margin: 0 0 0 calc(2 * $spacing);
        .logo {
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
      &:hover {
        .badge {
          .logo {
            border-style: outset;
          }
        }
      }
    }
    // Last Event
    &:last-of-type {
      .line-down {
        display: none;
      }
    }
  }
}

// Mobile
@include md-and-down {
  .event {
    flex-direction: row !important;
    .badge {
      display: none !important;
    }
    .wrapper {
      .date {
        display: none !important;
      }
      .logo-mobile {
        display: block !important;
      }
      .content {
        padding: 10px 10px !important;
        .date-mobile {
          display: inline-block !important;
        }
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
