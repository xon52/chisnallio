<template>
  <div class="tile-project-wrapper">
    <div class="tile-project-side">
      <div class="tile-project-img-wrapper hide-mobile">
        <img v-if="project.img" class="tile-project-img" :src="project.img" :alt="`${project.name} pic`" />
        <i v-else-if="project.icon" :class="`tile-project-icon ${project.icon}`" :style="`color:${project.color}`" />
      </div>
    </div>
    <div class="tile-project-side">
      <p class="tile-project-name">
        {{ project.name }} <span class="tile-project-status">({{ project.status }})</span>
        <a v-if="project.repo" class="tile-project-small-icon" :href="project.repo" target="_blank"><i class="fab fa-github"/></a>
        <a v-if="project.link" class="tile-project-small-icon" :href="project.link" target="_blank"><i class="fas fa-link"/></a>
      </p>
      <p class="tile-project-desc">{{ project.desc }}</p>
      <p v-if="project.tech" class="tile-project-tech">{{ project.tech }}</p>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectTile',
  props: { project: { type: Object, required: true } },
  methods: {}
}
</script>

<style lang="scss" scoped>
.tile-project-wrapper {
  display: flex;
  margin: 10px;
  padding: 10px 0;
}
.tile-project-side {
  align-self: center;
}
.tile-project-small-icon {
  font-size: 25px;
  margin: 0 10px;
  transition: all 0.3s ease-in-out;
  color: dodgerblue;
  &:hover {
    text-shadow: rgba(30, 143, 255, 0.7) 0 0 5px;
  }
}
.tile-project-img-wrapper {
  display: flex;
  width: 80px;
  margin-right: 20px;
}
.tile-project-img {
  border-radius: 10px;
  max-height: 80px;
  max-width: 80px;
}
.tile-project-icon {
  font-size: 60px;
  width: 100%;
  text-align: center;
}
.tile-project-name {
  color: #666;
  font-size: 18px;
  margin: 0;
}
.tile-project-status {
  color: #999;
  font-size: 14px;
  margin: 0;
}
.tile-project-desc {
  color: #777;
  font-size: 16px;
  margin: 0;
}
.tile-project-tech {
  color: #999;
  font-size: 14px;
  margin: 0;
}
@media screen and (max-width: 400px) {
  .hide-mobile {
    display: none;
  }
}
</style>