<template>
	<ClickToReveal text="email">
		<a
			class="flex hover:text-blue-700 dark:hover:text-blue-400 no-underline font-normal"
			:href="`mailto:${email}`"
			target="_blank">
			<svg
				class="w-4 h-4 my-auto mr-2"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 20 16">
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="m19 2-8.4 7.05a1 1 0 0 1-1.2 0L1 2m18 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m18 0v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2" />
			</svg>
			{{ email }}
		</a>
		<template v-slot:icon>
			<svg
				class="w-4 h-4 my-auto mr-2"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 20 16">
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="m19 2-8.4 7.05a1 1 0 0 1-1.2 0L1 2m18 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m18 0v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2" />
			</svg>
		</template>
	</ClickToReveal>
</template>

<script setup lang="ts">
import details from '@/data/details';
import ClickToReveal from './ClickToReveal.vue';

const { email } = details;
</script>
