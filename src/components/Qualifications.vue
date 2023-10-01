<template>
	<h3 class="mb-1 mt-8 text-gray-400">Qualifications</h3>
	<ul class="relative border-gray-200 dark:border-gray-700 list-none p-0 ml-2">
		<template v-for="{ endDate, institution, grade, title } in qualifications">
			<li class="mb-2">
				<h4 class="-mb-1">{{ title }}</h4>
				<p class="mb-0">{{ institution }} {{ endDate }}</p>
				<p class="mt-0 leading-none text-gray-400">{{ grade }}</p>
			</li>
		</template>
	</ul>
</template>

<script setup lang="ts">
import qualifications from '@/data/qualifications';
</script>
