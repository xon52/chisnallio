<template>
	<div class="w-full sm:w-1/2 lg:w-full">
		<h3 class="section-title">Contact</h3>
		<ul class="list-none space-y-0 lg:space-y-2 p-0">
			<li></li>
			<li>
				<MyCity />
			</li>
			<li>
				<MyEmail />
			</li>
			<li>
				<MyPhone />
			</li>
			<li>
				<MyLinkedin />
			</li>
			<li>
				<MyGithub />
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import MyCity from './City.vue';
import MyEmail from './Email.vue';
import MyPhone from './Phone.vue';
import MyLinkedin from './Linkedin.vue';
import MyGithub from './Github.vue';
</script>
