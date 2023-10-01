import { defineStore } from 'pinia';
import { ref } from 'vue';

const isShowPicture = () => (localStorage.getItem('show-picture') === 'false' ? false : true);

export const useFormatStore = defineStore('format', () => {
	const showPicture = ref(isShowPicture());

	const setShowPicture = (show: boolean) => {
		showPicture.value = show;
		localStorage.setItem('show-picture', show.toString());
	};

	return { showPicture, setShowPicture };
});
