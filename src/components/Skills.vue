<template>
	<div class="hidden lg:inline-block">
		<h3 class="section-title">Skills</h3>
		<ul class="md:p-0 list-disc">
			<li
				v-for="skill in skills"
				class="m-0.5 md:bg-blue-200 text-gray-800 py-1 px-2 rounded-full break-inside-avoid md:inline-block text-sm md:dark:bg-blue-600 dark:text-white print:m-0 print:p-0 cursor-default">
				{{ skill }}
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { skills } from '@/data';
</script>
