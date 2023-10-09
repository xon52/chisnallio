<template>
	<h3 class="mb-1 mt-6 text-gray-400">References</h3>
	<p class="mb-0">By request; but happy to provide any desired.</p>

	<ul class="md:p-0 my-0 print:hidden">
		<li
			v-for="reference in references"
			class="m-0.5 md:bg-blue-200 text-gray-800 py-1 px-2 rounded-full break-inside-avoid md:inline-block cursor-default text-sm md:dark:bg-blue-600 dark:text-white">
			{{ reference }}
		</li>
	</ul>
</template>

<script setup lang="ts">
import { useDataStore } from '@/store';
import { storeToRefs } from 'pinia';

const { references } = storeToRefs(useDataStore());
</script>
