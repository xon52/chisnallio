<template>
  <button :style="`background-color:${color};`" @click="visit" :title="title" target="_blank" rel="noopener">
    <img v-if="img" :src="img" @error="imageError" />
    <i v-else :class="icon" />
  </button>
</template>

<script>
export default {
  name: 'BaseFooterButton',
  props: {
    color: { type: String, required: true },
    icon: { type: String, required: true },
    image: { type: String, default: null },
    url: { type: String, required: true },
    title: { type: String, required: true }
  },
  data() {
    return {
      img: this.image
    }
  },
  methods: {
    imageError() {
      this.img = null
    },
    visit() {
      window.open(this.url, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
$button-size: 60px;
button {
  border-radius: 50%;
  border: none;
  box-shadow: 2px 2px 8px #000a;
  color: white;
  cursor: pointer;
  font-size: $button-size * 0.6;
  height: $button-size;
  margin: 4px;
  position: relative;
  width: $button-size;
  transition: all 0.3s ease-in-out;
  &:hover {
    text-shadow: 0 0 5px #eee;
    box-shadow: 1px 1px 8px #000;
    img {
      filter: drop-shadow(0 0 5px #eee);
    }
  }
  i,
  img {
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease-in-out;
  }
}
</style>
