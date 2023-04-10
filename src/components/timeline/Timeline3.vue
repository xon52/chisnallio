<template>
  <div class="vue-snake-timeline" :style="setTimelineStyles" ref="snake">
    <section class="timeline" v-if="visible">
      <ol
        :style="{
          width: `${rowSpanWidth * rowSpan}px`,
        }"
        v-for="(k, j) in rowItems"
        :key="j"
      >
        <!-- 起始原点 -->
        <li class="start-pot" v-if="j === 0"></li>
        <li v-for="(item, i) in k" :key="i" :style="setStyle" @click="clickEvent(item)">
          <div class="top text-ellipsis">
            {{ item.top }}
          </div>
          <div class="middle text-ellipsis">
            {{ item.middle }}
          </div>
          <div class="bottom text-ellipsis">
            {{ item.bottom }}
          </div>
        </li>
        <!-- 判断是否为最后一行 -->
        <template v-if="j < rowItems.length - 1">
          <!-- 如果不是最后一行,并且是奇数行,需要显示右侧圆弧边框 -->
          <template v-if="j % 2 === 0">
            <!-- 右侧圆弧 -->
            <div class="circle-right"></div>
          </template>
          <template v-else>
            <!-- 左侧圆弧 -->
            <div class="circle-left"></div>
          </template>
        </template>
        <template v-else>
          <div class="end-icon" :style="getEndIconStyle(j, k.length)"></div>
        </template>
      </ol>
    </section>
  </div>
</template>

<script setup lang="ts">
import { PropType, Ref, computed, onMounted, ref } from 'vue'

const rowSpanWidth = 220
const snake: Ref<HTMLElement | undefined> = ref()
let rowSpan = 6
let visible = true

const props = defineProps({
  items: {
    type: Array as PropType<Record<string, string>[]>,
    required: true,
  },
  timelinePadding: {
    type: String as PropType<string>,
    default: '',
  },
  timelineBackground: {
    type: String as PropType<string>,
    default: '',
  },
  lineColor: {
    type: String as PropType<string>,
    default: '#03A9F4',
  },
})

const emit = defineEmits(['click'])

const rowItems = computed(() => formatArr(props.items, rowSpan))
const setTimelineStyles = computed(() => {
  const styleObj: Record<string, string> = {}
  if (props.timelinePadding) {
    styleObj.padding = props.timelinePadding
  }
  if (props.timelineBackground) {
    styleObj.background = props.timelineBackground
  }
  return styleObj
})

const clickEvent = (item: Record<string, string>) => {
  emit('click', item)
}

const formatArr = (array: Record<string, string>[], subGroupLength: number) => {
  let index = 0
  const newArray: Record<string, string>[][] = []
  while (index < array.length) {
    newArray.push(array.slice(index, (index += subGroupLength)))
  }
  return newArray
}

const setStyle = () => {
  const { lineColor } = props
  return {
    background: lineColor,
  }
}

const getEndIconStyle = (index: number, length: number) => {
  if (index % 2 === 1) {
    const right = `${length * rowSpanWidth}px`
    return {
      right,
    }
  }
  const left = `${length * rowSpanWidth}px`
  return {
    left,
  }
}

onMounted(() => {
  if (snake.value === undefined) return
  rowSpan = Math.floor(snake.value.offsetWidth / 260)
  window.addEventListener('resize', resizeHandler)
  visible = true
})

const resizeHandler = () => {
  if (snake.value === undefined) return
  rowSpan = Math.floor(snake.value.offsetWidth / 260)
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
