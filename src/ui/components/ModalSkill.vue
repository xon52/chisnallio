<template>
  <x5-modal name="skill" buttons="Cancel" :title="skill.name">
    <div class="wrapper">
      <p class="desc"><img :src="skill.img" alt="" class="image" /> {{ skill.desc }}</p>
    </div>
    <div class="quals">
      <template v-for="{ name, link, org, year } in skill.quals">
        <tile-qual :key="name" :name="name" :link="link" :org="org" :year="year" />
      </template>
    </div>
  </x5-modal>
</template>

<script>
import skills from '@/data/skills.json'
import TileQual from './TileQual.vue'

export default {
  name: 'ModalSkill',
  components: { TileQual },
  props: { data: { type: Number, required: true } },
  computed: {
    skill() {
      return skills[this.data]
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
}
.image {
  max-height: 100px;
  max-width: 100px;
  margin: 0 20px 20px 0;
  float: left;
}
.desc {
  white-space: pre-line;
}
.quals {
  text-align: center;
}
</style>