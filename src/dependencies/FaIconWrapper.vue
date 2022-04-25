<template>
  <font-awesome-icon :icon="icon.split(' ')" />
</template>

<script setup lang="ts">
import './icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const { icon } = defineProps({
  icon: { type: String, required: true },
})
</script>
