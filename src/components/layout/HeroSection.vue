<template>
  <div id="hero">
    <div id="head-line"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import '@/styles/colors';
@import '@/styles/layout';

#hero {
  align-items: center;
  display: flex;
  justify-content: center;
  background-attachment: scroll;
  background-clip: padding-box;
  background-image: url(@/assets/Profile.png);
  background-position: 50% 100%;
  background-repeat: no-repeat;
  background-size: contain;
  height: calc(100vh - #{$nav-height-top});
  margin-top: $nav-height-top;
  object-fit: fill;
  opacity: 1;
  width: 100vw;
}

#head-line {
  width: 520px;
  height: 30px;
  background: $accent;
  border-radius: 90px;
  position: relative;
  &:before,
  &:after {
    content: '';
    height: 30px;
    border-radius: 90px;
  }
  &:before {
    width: 360px;
    background: $accent;
    position: absolute;
    top: -60px;
    bottom: 50%;
    transform: translate(-50%, 0);
  }
  &:after {
    width: 200px;
    background: $accent;
    position: absolute;
    right: -60px;
    bottom: 50%;
    transform: translate(-50%, 0);
  }
}

@media screen and (max-width: 767px) {
  #head-line {
    transform: scale(0.8);
  }
}
</style>
