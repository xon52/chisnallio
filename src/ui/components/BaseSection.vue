<template>
  <!-- TODO: @click should open and goto like toolbar -->
  <div :id="name" class="section" @click="open" :class="{ open: isOpen }">
    <h1 v-if="title" class="title">{{ title }}</h1>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Section',
  props: {
    name: { type: String, default: null },
    title: { type: String, default: null }
  },
  computed: {
    isOpen() {
      return this.name ? this.$store.getters.openSections.includes(this.name) : true
    }
  },
  methods: {
    open() {
      this.$store.dispatch('openSection', this.name)
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  margin: 0 auto;
  max-width: 800px;
  padding: 40px 0;
  width: 90vw;
  cursor: pointer;
  &:first-of-type {
    padding-top: 20px;
  }
  .title {
    text-align: center;
    font-size: 34px;
    font-weight: normal;
    letter-spacing: 2px;
    width: 100%;
    margin: 0;
  }
  .content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 2s ease-in-out;
  }
}
.open {
  cursor: default;
  .content {
    max-height: 5000px;
  }
}
</style>
