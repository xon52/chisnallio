<template>
	<template v-if="revealed || isPrinting">
		<slot></slot>
	</template>
	<template v-else>
		<span @click="reveal" class="flex cursor-pointer"><slot name="icon"></slot> Click for {{ props.text }}</span>
	</template>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const props = defineProps<{ text: string }>();

const { isPrinting } = storeToRefs(useAppStore());

const revealed = ref(false);
const reveal = () => (revealed.value = true);
</script>
