<template>
  <div class="timeline">
    <template v-for="row in displayItems">
      <div class="row">
        <template v-for="{ type, content } in row">
          <div v-if="type === 'ITEM'" class="block-item">
            <slot name="item" :content="content">{{ content }}</slot>
          </div>
          <div v-else-if="type === 'START'" class="block-start"></div>
          <div v-else-if="type === 'DOWN-LEFT'" class="block-down-left"></div>
          <div v-else-if="type === 'DOWN-RIGHT'" class="block-down-right"></div>
          <div v-else-if="type === 'LEFT'" class="block-left"></div>
          <div v-else-if="type === 'LEFT-DOWN'" class="block-left-down"></div>
          <div v-else-if="type === 'RIGHT'" class="block-right"></div>
          <div v-else-if="type === 'RIGHT-DOWN'" class="block-right-down"></div>
          <div v-else-if="type === 'END'" class="block-end"></div>
          <div v-else class="block-error">Error</div>
        </template>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import { ComputedRef, PropType, Ref, computed, onMounted, ref } from 'vue'
import type { TimelineBlockType } from './types.js'

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

const rowSpanWidth = 220
const arrowWidth = 100
const appStore = useAppStore()
const itemsPerRow = computed(() => Math.max(Math.floor((appStore.width - arrowWidth) / (rowSpanWidth + arrowWidth)), 1))
const rows = computed(() => Math.ceil(items.length / itemsPerRow.value))

const displayItems = computed(() => {
  const dItems: TimelineBlockType[][] = []
  for (let r = 0, ti = 0; r < rows.value; r++) {
    const dRow: TimelineBlockType[] = []
    for (let i = 0; i < itemsPerRow.value && ti < items.length; i++, ti++) {
      r % 2 === 0 ? dRow.push({ type: 'RIGHT' }) : dRow.push({ type: 'LEFT' })
      dRow.push({ type: 'ITEM', content: items[r * itemsPerRow.value + i] })
    }
    dRow[0] = r % 2 === 0 ? { type: 'RIGHT-DOWN' } : { type: 'DOWN-RIGHT' }
    dRow.push(r % 2 === 0 ? { type: 'DOWN-LEFT' } : { type: 'LEFT-DOWN' })
    dItems.push(r % 2 === 0 ? dRow : dRow.reverse())
  }
  dItems[0][0] = { type: 'START' }
  const lastItemIndex = dItems.length % 2 === 0 ? 0 : dItems[dItems.length - 1].length - 1
  dItems[dItems.length - 1][lastItemIndex] = { type: 'END' }

  console.log(dItems)
  return dItems
})

const emit = defineEmits(['click'])

const formatArr = (array: Record<string, string>[], subGroupLength: number) => {
  let index = 0
  const newArray: Record<string, string>[][] = []
  while (index < array.length) {
    newArray.push(array.slice(index, (index += subGroupLength)))
  }
  return newArray
}
</script>

<style lang="scss" scoped>
@import './style.scss';

.timeline {
  display: flex;
  align-items: center;
  justify-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  .item {
    display: inline-block;
    width: 220px;
    background-color: rgb(202, 230, 255);
  }
  .arrow {
    display: inline-block;
    width: 100px;
    background-color: rgb(255, 218, 218);
  }
}
</style>
