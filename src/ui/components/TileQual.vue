<template>
  <a :href="link" target="_blank">
    <div class="tile-qual-wrapper" @click="visit">
      <p class="tile-qual-name">{{ name }}</p>
      <p class="tile-qual-org">{{ org }}</p>
      <p class="tile-qual-year">({{ year }})</p>
    </div>
  </a>
</template>

<script>
export default {
  name: 'QualTile',
  props: {
    name: { type: String, required: true },
    link: { type: String, default: null },
    org: { type: String, default: null },
    year: { type: String, default: null }
  },
  methods: {
    visit() {
      window.open(this.link, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
.tile-qual-wrapper {
  position: relative;
  display: inline-block;
  align-self: start;
  width: 160px;
  margin: 20px;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  * {
    transition: all 0.3s ease-in-out;
  }
}
.tile-qual-name {
  margin: 0;
  color: #666;
  font-size: 20px;
  vertical-align: baseline;
}
.tile-qual-org {
  margin: 0;
  color: #999;
  font-size: 16px;
}
.tile-qual-year {
  margin: 0;
  color: #999;
  font-size: 14px;
}
</style>