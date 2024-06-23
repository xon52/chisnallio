<template>
	<div class="flex flex-col sm:flex-row mb-4">
		<div class="grow">
			<h1 class="font-normal mt-2 mb-2">{{ name }}</h1>
		</div>
	</div>
</template>

<script setup lang="ts">
import { details } from '@/data';

const { name } = details;
</script>
