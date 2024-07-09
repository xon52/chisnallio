<template>
	<h3 class="section-title">Experiences</h3>
	<ul
		class="relative border-l border-gray-200 dark:border-gray-700 list-none ml-4 print:ml-0 print:border-l-0 print:p-0">
		<template v-for="{ company, description, endDate, startDate, title, years } in experiences">
			<li class="mb-6 ml-0">
				<div
					class="absolute w-3 h-3 bg-gray-200 rounded-full mt-2.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700 print:hidden"></div>
				<p class="m-0 font-bold text-gray-800 dark:text-white">{{ title }} ({{ years }} years)</p>
				<p class="m-0 italic font-medium">{{ company }}</p>
				<p class="m-0 text-gray-500">
        <ul class="list-disc">
          <template v-for="point in description">
            <li class="my-0">{{ point }}</li>
          </template>
        </ul>
				</p>
			</li>
		</template>
	</ul>
</template>

<script setup lang="ts">
import { experiences } from '@/data';
</script>
