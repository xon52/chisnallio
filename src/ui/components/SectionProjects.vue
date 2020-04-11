<template>
  <base-section title="Projects" name="projects">
    <div v-for="project in projects" class="project-wrapper" :key="project.title">
      <h3 class="project-heading">
        {{ project.title }} <span class="project-desc">({{ project.desc }})</span>
      </h3>
      <div class="project-list">
        <template v-for="project in project.items">
          <tile-project :key="project.name" :project="project" />
        </template>
      </div>
    </div>
  </base-section>
</template>

<script>
import BaseSection from './BaseSection.vue'
import TileProject from './TileProject.vue'
import projectsCommercial from '@/data/projectsCommercial.json'
import projectsPublic from '@/data/projectsPublic.json'
import projectsVentures from '@/data/projectsVentures.json'

export default {
  name: 'Projects',
  components: { BaseSection, TileProject },
  data: () => ({
    projects: [
      {
        title: 'Public',
        desc: `Primary projects I maintain publicly`,
        items: projectsPublic
      },
      {
        title: 'Ventures',
        desc: `Major ventures I have founded/co-founded`,
        items: projectsVentures
      },
      {
        title: 'Commercial',
        desc: `Major projects I have undertaken professionally`,
        items: projectsCommercial
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.project-wrapper {
  margin: 0 20px;
}
.project-heading {
  text-align: center;
  margin: 40px 0 10px 0;
}
.project-desc {
  color: #aaa;
  font-weight: normal;
  font-size: medium;
}
</style>
