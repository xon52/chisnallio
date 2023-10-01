<template>
	<h3 class="mb-1 mt-8 text-gray-400">Skills</h3>
	<ul class="md:p-0 list-disc">
		<li
			v-for="skill in skills"
			class="m-1 bg-blue-200 text-gray-800 py-0 px-2 rounded-full break-inside-avoid md:inline-block cursor-default font-medium dark:bg-blue-700 dark:text-white">
			{{ skill }}
		</li>
	</ul>
</template>

<script setup lang="ts">
import { useDataStore } from '@/store';
import { storeToRefs } from 'pinia';

const { skills } = storeToRefs(useDataStore());
</script>
