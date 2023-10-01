<template>
	<button
		type="button"
		aria-label="Print page"
		title="Print page"
		class="px-4 py-2 text-sm font-medium bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
		@click="print">
		<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
			<path d="M5 20h10a1 1 0 0 0 1-1v-5H4v5a1 1 0 0 0 1 1Z" />
			<path
				d="M18 7H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2v-3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-1-2V2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3h14Z" />
		</svg>
	</button>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store';

const { setDarkMode, setIsPrinting } = useAppStore();

const print = async () => {
	await setDarkMode('light', false);
	await setIsPrinting(true);
	globalThis.print();
};
</script>
