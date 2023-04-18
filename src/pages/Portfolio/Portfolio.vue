<template>
  <section id="Portfolio">
    <div class="projects">
      <template v-for="h in projects" :key="h.title">
        <ProjectCardVue :title="h.title" :summary="h.summary" :date="h.date" :img-url="h.imgUrl" :icon="h.icon" />
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCardVue from './ProjectCard.vue'
import projects from './projects.ts'
</script>

<style lang="scss" scoped>
@use '@/styles/helpers' as *;

#Portfolio {
  background-color: $green-bg;
}

.projects {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  width: 100%;
  padding: 5rem;
}
</style>
