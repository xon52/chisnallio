import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import emData from '../data/em';

export const useDataStore = defineStore('data', () => {
	const mode = ref('em');

	const title = computed(() => {
		switch (mode.value) {
			case 'em':
				return emData.title;
		}
	});
	const summary = computed(() => {
		switch (mode.value) {
			case 'em':
				return emData.summary;
		}
	});
	const skills = computed(() => {
		switch (mode.value) {
			case 'em':
				return emData.skills;
		}
	});
	const references = computed(() => {
		switch (mode.value) {
			case 'em':
				return emData.references;
		}
	});
	const experiences = computed(() => {
		switch (mode.value) {
			case 'em':
				return emData.experiences;
		}
	});

	const switchMode = (_mode: 'em') => {
		mode.value = _mode;
	};

	return {
		experiences,
		skills,
		summary,
		title,
		references,
		switchMode,
	};
});
