<template>
  <base-section title="Technologies" name="technologies">
    <div v-for="tech in techs" :key="tech.title">
      <h3 class="tech-heading">
        {{ tech.title }} <span class="tech-desc">({{ tech.desc }})</span>
      </h3>
      <div class="tech-list">
        <template v-for="{ name, img, icon, link } in tech.items">
          <tile-tech :key="name" :name="name" :img="img" :icon="icon" :link="link" />
        </template>
      </div>
    </div>
  </base-section>
</template>

<script>
import BaseSection from './BaseSection.vue'
import TileTech from './TileTech.vue'
import techCurrent from '@/data/techCurrent.json'
import techNext from '@/data/techNext.json'
import techPast from '@/data/techPast.json'

export default {
  name: 'Technologies',
  components: { BaseSection, TileTech },
  data: () => ({
    techs: [
      {
        title: 'Current',
        desc: `I use everyday`,
        items: techCurrent
      },
      {
        title: 'Next',
        desc: `I'm learning`,
        items: techNext
      },
      {
        title: 'Past',
        desc: `I have used`,
        items: techPast
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.tech-heading {
  text-align: center;
  margin: 40px 0 10px 0;
}
.tech-desc {
  color: #aaa;
  font-weight: normal;
  font-size: medium;
}
.tech-list {
  text-align: center;
}
</style>
