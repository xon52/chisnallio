<template>
  <div class="sidebar-wrapper">
    <div class="sidebar-start">
      <slot name="start"></slot>
    </div>
    <div class="sidebar-center">
      <slot name="center"></slot>
    </div>
    <div class="sidebar-end">
      <slot name="end"></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.sidebar-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
}
.sidebar-start {
  justify-self: flex-start;
  flex-shrink: 1;
}
.sidebar-end {
  justify-self: flex-end;
  flex-shrink: 1;
}
.sidebar-center {
  flex-grow: 1;
}
</style>
