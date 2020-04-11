<template>
  <div class="tile-skill-wrapper" @click="$emit('click')">
    <div v-if="img" class="tile-skill-img-wrapper">
      <img class="tile-skill-img" :src="img" :alt="`${name} pic`" />
    </div>
    <i v-else-if="icon" :class="`tile-skill-icon ${icon}`" />
    <p class="tile-skill-name">{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: 'SkillTile',
  props: {
    name: { type: String, required: true },
    img: { type: String, default: null },
    icon: { type: String, default: null },
    link: { type: String, default: null }
  }
}
</script>

<style lang="scss" scoped>
.tile-skill-wrapper {
  position: relative;
  display: inline-block;
  align-self: start;
  width: 160px;
  margin: 20px;
  text-align: center;
  cursor: pointer;
  * {
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    .tile-skill-img {
      box-shadow: dodgerblue 0 0 10px;
    }
    .tile-skill-name {
      text-shadow: dodgerblue 0 0 1px;
    }
  }
}
.tile-skill-img-wrapper {
  display: block;
  height: 100px;
  width: 100%;
}
.tile-skill-img {
  border-radius: 10px;
  max-height: 100px;
  max-width: 100px;
}
.tile-skill-icon {
  font-size: 50px;
}
.tile-skill-name {
  color: #666;
  font-size: 18px;
  height: 50px;
  margin-top: 10px;
}
</style>