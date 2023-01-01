<template>
  <div class="layout-wrapper">
    <div class="layout-header">
      <slot name="header"></slot>
    </div>
    <div class="layout-main">
      <div class="layout-sidebar">
        <slot name="sidebar"></slot>
      </div>
      <div class="layout-content">
        <slot>No content</slot>
      </div>
    </div>
    <div class="layout-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.layout-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.layout-header {
  justify-self: flex-start;
  flex-shrink: 1;
}
.layout-footer {
  justify-self: flex-end;
  flex-shrink: 1;
}
.layout-main {
  display: flex;
  flex-grow: 1;
}
.layout-sidebar {
  align-self: flex-start;
  flex-shrink: 1;
  height: 100%;
}
.layout-content {
  flex-grow: 1;
}
</style>
