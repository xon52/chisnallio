<template>
	<h3 class="mb-1 mt-6 text-gray-400">Skills</h3>
	<ul class="md:p-0 list-disc">
		<li
			v-for="skill in skills"
			class="m-0.5 md:bg-blue-200 text-gray-800 py-1 px-2 rounded-full break-inside-avoid md:inline-block cursor-default text-sm md:dark:bg-blue-600 dark:text-white print:m-0 print:p-0">
			{{ skill }}
		</li>
	</ul>
</template>

<script setup lang="ts">
import { useDataStore } from '@/store';
import { storeToRefs } from 'pinia';

const { skills } = storeToRefs(useDataStore());
</script>
