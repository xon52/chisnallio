<template>
	<div class="w-full sm:w-1/2 lg:w-full">
		<h3 class="section-title">Qualifications</h3>
		<ul class="relative border-gray-200 dark:border-gray-700 list-none p-0 ml-2">
			<template v-for="{ endDate, institution, grade, title } in qualifications">
				<li>
					<h4 class="-mb-1">{{ title }}</h4>
					<p class="mb-0">{{ institution }} {{ endDate }}</p>
					<p class="my-0 leading-none text-gray-500">{{ grade }}</p>
				</li>
			</template>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { qualifications } from '@/data';
</script>
