<template>
  <div class="tile-tech-wrapper">
    <div v-if="img" class="tile-tech-img-wrapper">
      <img class="tile-tech-img" :src="img" :alt="`${name} logo`" />
    </div>
    <i v-else-if="icon" :class="`tile-tech-icon ${icon}`" />
    <p class="tile-tech-name">{{ name }}</p>
    <a class="tile-tech-link" title="What is this?" :href="link" target="_blank">
      <i class="fas fa-question-circle" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'TileTech',
  props: {
    name: { type: String, required: true },
    img: { type: String, default: null },
    icon: { type: String, default: null },
    link: { type: String, default: null }
  }
}
</script>

<style lang="scss" scoped>
.tile-tech-wrapper {
  position: relative;
  display: inline-block;
  align-self: start;
  width: 80px;
  margin: 10px;
  text-align: center;
  &:hover .tile-tech-link {
    display: block;
  }
}
.tile-tech-link {
  display: none;
  position: absolute;
  top: -10px;
  right: 10px;
  i {
    font-size: 16px;
    color: dodgerblue;
    background: white;
    border: 1px white solid;
    border-radius: 50%;
  }
}
.tile-tech-img-wrapper {
  position: relative;
  display: block;
  height: 50px;
}
.tile-tech-img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 50px;
  max-width: 50px;
}
.tile-tech-icon {
  font-size: 50px;
}
.tile-tech-name {
  margin: 0;
  color: #ccc;
}
</style>