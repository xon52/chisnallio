<template>
  <base-section title="Skills" name="skills">
    <!-- TODO: Capability statement -->
    <div class="skills">
      <template v-for="({ name, icon, img, link }, index) in skills">
        <tile-skill :key="index" :name="name" :icon="icon" :img="img" :link="link" @click="open(index)" />
      </template>
    </div>
  </base-section>
</template>

<script>
import BaseSection from './BaseSection'
import ModalSkill from './ModalSkill'
import TileSkill from './TileSkill.vue'
import skills from '@/data/skills.json'

export default {
  name: 'Skills',
  components: { BaseSection, TileSkill },
  data: () => ({ skills }),
  methods: {
    open(index) {
      this.$x5.openModal('skill', {}, index)
    }
  },
  created() {
    this.$x5.registerModal('skill', ModalSkill)
  }
}
</script>

<style scoped>
.skills {
  margin-top: 20px;
  text-align: center;
}
.skills-icon {
  font-size: 50px;
  padding-bottom: 10px;
  width: 100%;
}
.skills-name {
  white-space: pre-wrap;
}
</style>
