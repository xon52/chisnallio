<template>
	<a class="flex" :href="linkedin" target="_blank" title="LinkedIn">
		<svg
			class="w-5 h-5 hover:text-blue-700 dark:hover:text-blue-400 my-auto mr-1"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 15 15">
			<path
				fill-rule="evenodd"
				d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
				clip-rule="evenodd" />
			<path d="M3 5.012H0V15h3V5.012Z" />
		</svg>
	</a>
</template>

<script setup lang="ts">
import details from '@/data/details';

const { linkedin } = details;
</script>
