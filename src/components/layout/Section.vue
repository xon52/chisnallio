<template>
  <section>
    <div id="heading"></div>
    <slot></slot>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@use '@/styles/3-helpers' as *;

section {
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
