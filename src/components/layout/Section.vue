<template>
  <section>
    <div id="heading"></div>
    <slot></slot>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import '@/styles/colors';
@import '@/styles/layout';

section {
  width: 100vw;
  height: calc(100vh - #{$nav-height-scroll});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  scroll-snap-align: center;
  &:nth-child(odd) {
    background: $pink;
  }
  &:nth-child(even) {
    background: $aqua;
  }
}

#heading {
  width: 120px;
  height: 20px;
  background: $accent;
  border-radius: 90px;
  margin-top: 40px;
}
</style>
