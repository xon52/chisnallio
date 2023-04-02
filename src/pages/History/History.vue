<template>
  <section id="History">
    <div class="history-container">
      <div class="history-list">
        <template v-for="row in histories">
          <div class="history-row">
            <template v-for="item in row">
              <div class="history-item">{{ item.date }} - {{ item.title }}</div>
            </template>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import historiesRaw from './histories.ts'
import { computed } from 'vue'

const tileWidth = 300
const appStore = useAppStore()

const histories = computed(() => {
  const tilesPerRow = Math.floor(appStore.width / tileWidth)
  console.log('tilesPerRow', tilesPerRow)
  const totalRows = Math.ceil(historiesRaw.length / tilesPerRow)
  console.log('totalRows', totalRows)
  const result = []

  for (let r = 0; r < totalRows; r++) {
    const slice = historiesRaw.slice(r * tilesPerRow, (r + 1) * tilesPerRow)
    result.push(slice)
  }
  return [...result, ...result]
})
</script>

<style lang="scss" scoped>
@use '@/styles/helpers' as *;

#History {
  background-color: $orange-bg;
}

.history-container {
}

.history-list {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}
.history-row {
  display: flex;
  width: 100%;
  position: relative;

  .history-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px black solid;
    border-radius: 3rem;
    padding: 1rem;
    margin: 2rem;
    width: 200px;

    &::after {
      content: ' ';
      position: absolute;
      top: 60px;
      left: -20px;
      height: 100px;
      width: 50px;
      border-top: 1px blue solid;
      border-left: 1px blue solid;
      border-top-left-radius: 50%;
    }
  }

  &:nth-of-type(even) {
    flex-direction: row-reverse;
    justify-items: end;
    .history-item:first-of-type {
      background-color: blue;
      border-top: 5px green solid;
    }
    .history-item:last-of-type {
      background-color: red;
      border-bottom: 5px green solid;
    }
    &::after {
      content: ' ';
      position: absolute;
      top: 60px;
      left: -20px;
      height: 100px;
      width: 50px;
      border-top: 1px blue solid;
      border-left: 1px blue solid;
      border-top-left-radius: 50%;
    }
  }
  &:nth-of-type(odd) {
    flex-direction: row;
    justify-items: start;
    .history-item:first-of-type {
      background-color: blue;
      border-top: 5px green solid;
    }
    .history-item:last-of-type {
      background-color: red;
      border-bottom: 5px green solid;
    }
  }

  &:first-of-type {
    .history-item:first-of-type {
      border-top: none;
    }
  }

  &:last-of-type {
    .history-item:last-of-type {
      border-bottom: none;
    }
  }
}
</style>
