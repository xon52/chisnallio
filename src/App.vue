<template>
	<div :class="{ dark: darkMode }" class="min-h-screen">
		<div class="min-h-screen bg-slate-50 max-w-full format dark:format-invert dark:bg-gray-900 p-2 sm:p-6">
			<div
				class="container max-w-screen-lg mx-auto border bg-slate-50 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 sm:p-6 print:border-0 print:p-0 print:shadow-none print:text-sm">
				<MyControls />
				<div>
					<MyContact />
				</div>
				<div class="flex flex-col mt-4 sm:flex-row-reverse">
					<aside class="flex-shrink pl-0 max-w-none sm:max-w-[40%] sm:pl-4">
						<MySummary />
						<MySkills />
						<MyQualifications />
						<MyReferences />
					</aside>
					<main class="flex-grow w-full sm:w-1/2">
						<MyExperiences />
					</main>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import MyControls from './components/controls/Controls.vue';
import MyContact from './components/contact/Contact.vue';
import MyExperiences from './components/Experiences.vue';
import MyQualifications from './components/Qualifications.vue';
import MyReferences from './components/References.vue';
import MySkills from './components/Skills.vue';
import MySummary from './components/Summary.vue';
import { useAppStore } from './store';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const { darkMode } = storeToRefs(useAppStore());

onMounted(() => console.log('Last updated:', new Date(__VITE_BUILD_DATE__)));
</script>
