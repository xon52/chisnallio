<template>
  <div class="timeline" :style="cssVars">
    <template v-for="row in displayItems">
      <div class="row">
        <template v-for="{ _item, _class } in row">
          <div :class="_class">
            <div class="">
              <slot name="item" :item="_item">{{ _item }}</slot>
            </div>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import { ComputedRef, PropType, Ref, computed, onMounted, ref } from 'vue'
import { TimelineItemWrapper } from './types.js'

const items = [
  'item 1',
  'item 2',
  'item 3',
  'item 4',
  'item 5',
  'item 6',
  'item 7',
  'item 8',
  'item 9',
  'item 10',
  'item 11',
  'item 12',
  'item 13',
]

const itemWidth = 300
const itemHeight = 300
const gapWidth = 50
const marginWidth = 100
const cssVars = {
  '--item-height': `${itemHeight}px`,
  '--item-width': `${itemWidth}px`,
  '--gap-width': `${gapWidth}px`,
  '--margin-width': `${marginWidth}px`,
}
const appStore = useAppStore()
const itemsPerRow = computed(() => Math.max(Math.floor((appStore.width - 2 * marginWidth) / (itemWidth + gapWidth)), 1))
const rows = computed(() => Math.ceil(items.length / itemsPerRow.value))

const displayItems = computed(() => {
  const dItems: TimelineItemWrapper[][] = []
  for (let r = 0, ti = 0; r < rows.value; r++) {
    const dRow: TimelineItemWrapper[] = []
    for (let i = 0; i < itemsPerRow.value && ti < items.length; i++, ti++) {
      const _item = items[r * itemsPerRow.value + i]
      const _class = r % 2 === 0 ? 'item right' : 'item left'
      dRow.push({ _item, _class })
    }
    dRow[dRow.length - 1]._class += ' last'
    dItems.push(r % 2 === 0 ? dRow : dRow.reverse())
  }
  dItems[0][0]._class += ' start'
  const lastItemIndex = dItems.length % 2 === 0 ? 0 : dItems[dItems.length - 1].length - 1
  dItems[dItems.length - 1][lastItemIndex]._class += ' end'

  console.log(dItems)
  return dItems
})

const emit = defineEmits(['click'])
</script>

<style lang="scss" scoped>
@import './style.scss';
//  :style="{ margin: `0 ${gapWidth}px`, width: `${itemWidth}px` }"
.timeline {
  margin: var(--margin-width) auto;

  .row {
    display: flex;
    align-items: center;
    justify-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 10px 0;

    .item {
      margin: 0 var(--gap-width) 0 0;
      width: var(--item-width);
      height: var(--item-height);
      background-color: rgb(202, 230, 255);
      position: relative;
      &:last-of-type {
        margin: 0;
      }
      &.left {
        ::before {
          content: '';
          position: absolute;
          left: calc(-1 * var(--gap-width));
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          border-right: 10px solid blue;
        }
        ::after {
          content: '';
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: calc(-1 * var(--gap-width));
          width: calc(var(--gap-width) - 10px);
          height: 5px;
          background-color: blue;
        }
      }
      &.right {
        ::before {
          content: '';
          position: absolute;
          left: -10px;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          border-left: 10px solid red;
        }
        ::after {
          content: '';
          position: absolute;
          top: 50%;
          transform: translate(-10px, -100%);
          right: calc(-1 * var(--gap-width));
          width: calc(var(--gap-width) - 10px);
          height: 5px;
          background-color: red;
        }
      }
    }
    .arrow {
      display: inline-block;
      width: 100px;
      background-color: rgb(255, 218, 218);
    }
  }
}
</style>
