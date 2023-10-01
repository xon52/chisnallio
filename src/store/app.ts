import { defineStore } from 'pinia';
import { ref } from 'vue';

type DarkModeType = 'dark' | 'light' | undefined;

const getPrefersDark = () => globalThis.matchMedia?.('(prefers-color-scheme: dark)').matches;
const isDarkMode = () =>
	localStorage.getItem('color-theme') ? localStorage.getItem('color-theme') === 'dark' : getPrefersDark();

export const useAppStore = defineStore('app', () => {
	const darkMode = ref(isDarkMode());
	const isPrinting = ref(false);

	const setDarkMode = async (mode: DarkModeType, save = true) => {
		if (mode !== undefined) {
			darkMode.value = mode === 'dark';
			if (save) localStorage.setItem('color-theme', mode);
		} else {
			localStorage.removeItem('color-theme');
			darkMode.value = getPrefersDark();
		}
	};

	const setIsPrinting = async (v: boolean) => (isPrinting.value = v);

	const init = () => {
		globalThis.addEventListener('beforeprint', () => {
			isPrinting.value = true;
			setDarkMode('light', false);
		});
		globalThis.addEventListener('afterprint', () => {
			isPrinting.value = false;
			darkMode.value = isDarkMode();
		});
	};

	return { darkMode, isPrinting, setDarkMode, setIsPrinting, init };
});
