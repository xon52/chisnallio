<template>
	<h3 class="mb-1 mt-6 sm:mt-0 text-gray-400">Experiences</h3>
	<ul
		class="relative border-l border-gray-200 dark:border-gray-700 list-none ml-4 print:ml-0 print:border-l-0 print:p-0">
		<template v-for="{ company, description, endDate, startDate, title } in experiences">
			<li class="mb-6 ml-0">
				<div
					class="absolute w-3 h-3 bg-gray-200 rounded-full mt-2.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700 print:hidden"></div>
				<p class="m-0 font-bold text-gray-800 dark:text-white">{{ title }} ({{ startDate }} - {{ endDate }})</p>
				<p class="m-0 italic font-medium">{{ company }}</p>
				<p class="m-0 text-gray-400">
					{{ description }}
				</p>
			</li>
		</template>
	</ul>
</template>

<script setup lang="ts">
import { useDataStore } from '@/store';
import { storeToRefs } from 'pinia';

const { experiences } = storeToRefs(useDataStore());
</script>
