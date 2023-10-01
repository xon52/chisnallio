<template>
	<div class="flex flex-col sm:flex-row mb-4">
		<img
			v-if="showPicture"
			class="rounded-xl w-36 h-36 m-0 mr-4 shrink hidden sm:inline-block"
			src="/images/headshot.jpg"
			alt="Extra large avatar" />
		<div class="grow">
			<h1 class="font-normal mt-2 mb-2">{{ name }}</h1>
			<h2 class="font-light mt-4 mb-2">{{ title }}</h2>
			<p class="mt-4 hidden print:sm:hidden sm:flex">
				<MyLinkedin class="mr-2" />
				<MyGithub class="mr-2" />
			</p>
		</div>
		<ul class="list-none shrink m-0 sm:[&>li]:mb-4 p-0 mr-4">
			<li>
				<MyCity />
			</li>
			<li>
				<MyEmail />
			</li>
			<li>
				<MyPhone />
			</li>
			<li></li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import details from '@/data/details';
import { useDataStore, useFormatStore } from '@/store';
import { storeToRefs } from 'pinia';
import MyCity from './City.vue';
import MyEmail from './Email.vue';
import MyPhone from './Phone.vue';
import MyLinkedin from './Linkedin.vue';
import MyGithub from './Github.vue';

const { name } = details;

const { title } = storeToRefs(useDataStore());
const { showPicture } = storeToRefs(useFormatStore());
</script>
