<template>
  <a href="#" title="Return to the top" :class="{ show: show }" rel="noopener">
    <i class="fas fa-chevron-up"></i>
    <span>To Top</span>
  </a>
</template>

<script>
export default {
  name: 'ToTop',
  data: () => ({
    show: false,
    minPos: 200
  }),
  methods: {
    handleScroll() {
      this.show = window.pageYOffset > this.minPos
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
$button-size: 50px;
a {
  background: #fffa;
  border-radius: 10px 0 0 10px;
  border: none;
  box-shadow: 2px 2px 8px #000a;
  color: dodgerblue;
  cursor: pointer;
  height: $button-size;
  position: fixed;
  bottom: 100px;
  right: -$button-size;
  width: $button-size;
  transition: right 0.3s ease-in-out;
  &:hover {
    text-shadow: 0 0 5px #eee;
    box-shadow: 1px 1px 8px #000;
    img {
      filter: drop-shadow(0 0 5px #eee);
    }
  }
  i {
    position: absolute;
    font-size: $button-size * 0.6;
    width: 100%;
    text-align: center;
    bottom: $button-size * 0.3;
  }
  span {
    width: 100%;
    position: absolute;
    font-size: $button-size * 0.2;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    text-align: center;
    bottom: $button-size * 0.1;
  }
}
@media screen and (min-width: 500px) {
  .show {
    right: 0;
  }
}
</style>
