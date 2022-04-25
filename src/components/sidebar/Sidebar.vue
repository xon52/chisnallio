<template>
  <div class="sidebar-wrapper">
    <div class="sidebar-header">
      <slot name="header"></slot>
    </div>
    <div class="sidebar-main-wrapper">
      <div class="sidebar-main">
        <slot>No content</slot>
      </div>
    </div>
    <div class="sidebar-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.sidebar-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.sidebar-header {
  justify-self: flex-start;
  flex-shrink: 1;
}
.sidebar-footer {
  justify-self: flex-end;
  flex-shrink: 1;
}
.sidebar-main-wrapper {
  display: flex;
  flex-grow: 1;
  justify-content: center;
}
.sidebar-main {
  align-self: center;
  display: flex;
  flex-direction: column;
}
</style>
