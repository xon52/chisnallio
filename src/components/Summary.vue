<template>
	<h3 class="mb-1 text-gray-400">Summary</h3>
	<p class="ml-2 text-justify text-gray-800 dark:text-white font-medium">{{ summary }}</p>
</template>

<script setup lang="ts">
import { useDataStore } from '@/store';
import { storeToRefs } from 'pinia';

const { summary } = storeToRefs(useDataStore());
</script>
