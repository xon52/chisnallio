<template>
	<div
		:class="{ dark: darkMode }"
		class="min-h-screen">
		<div class="min-h-screen bg-slate-50 max-w-full format dark:format-invert dark:bg-gray-900 p-2 sm:p-6 print:p-2">
			<div
				class="container max-w-screen-lg mx-auto border bg-slate-50 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 sm:p-6 md:px-12 print:border-0 print:p-2 print:shadow-none print:text-sm">
				<MyControls />
				<div class="flex flex-col mt-4 print:m-0 lg:flex-row">
					<aside class="flex-shrink max-w-none lg:max-w-[35%] lg:px-4">
						<MyTitle />
						<div class="flex flex-wrap">
							<MyContact />
							<MyQualifications />
						</div>
						<MySkills />
						<MyReferences />
					</aside>
					<main class="flex-grow w-full lg:w-1/2">
						<MyExperiences />
					</main>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import MyControls from './components/controls/Controls.vue';
import MyTitle from './components/Title.vue';
import MyContact from './components/contact/Contact.vue';
import MyExperiences from './components/Experiences.vue';
import MyQualifications from './components/Qualifications.vue';
import MyReferences from './components/References.vue';
import MySkills from './components/Skills.vue';
import { useAppStore } from './store';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const { darkMode } = storeToRefs(useAppStore());

onMounted(() => console.log('Last updated:', new Date(__VITE_BUILD_DATE__)));
</script>
