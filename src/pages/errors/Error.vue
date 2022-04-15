<template>
  <div class="flex items-center justify-center full-page">
    <div class="flex flex-col items-center justify-center">
      <h1 class="m-0 text-center">{{ title }}</h1>
      <h3>{{ description }}</h3>
      <div>
        <button @click="router.push({ name: 'home' })">Go Home</button>
        <button v-if="goback" @click="router.go(-1)">Go Back</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const { title, description, goback } = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  goback: { type: Boolean, default: false },
})
</script>

<style lang="scss" scoped>
.full-page {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
