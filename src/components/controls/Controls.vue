<template>
	<div class="rounded-md shadow-sm fixed right-2 top-2 hidden lg:inline-flex print:hidden" role="group">
		<PrintButton />
		<PictureButton />
		<PdfButton />
		<DarkButton />
	</div>
</template>

<script setup lang="ts">
import DarkButton from './Dark.vue';
import PictureButton from './Picture.vue';
import PdfButton from './Pdf.vue';
import PrintButton from './Print.vue';
</script>
