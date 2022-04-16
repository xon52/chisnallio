<template>
  <div class="vertical-wrapper">
    <div class="header-wrapper">
      <slot name="header"></slot>
    </div>
    <div class="horizontal-wrapper">
      <div class="sidebar-wrapper">
        <slot name="sidebar"></slot>
      </div>
      <div class="main-wrapper">
        <slot>No content</slot>
      </div>
    </div>
    <div class="footer-wrapper">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.vertical-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.header-wrapper {
  justify-self: flex-start;
  flex-shrink: 1;
}
.footer-wrapper {
  justify-self: flex-end;
  flex-shrink: 1;
}
.horizontal-wrapper {
  display: flex;
  flex-grow: 1;
}
.sidebar-wrapper {
  align-self: flex-start;
  flex-shrink: 1;
}
.main-wrapper {
  flex-grow: 1;
}
</style>
