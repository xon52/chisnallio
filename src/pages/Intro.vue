<template>
  <section id="Intro">
    <div class="hero">
      <div class="quote">
        <h2>👋 I'm <span class="highlight">Keagan</span></h2>
        <h4>
          I'm <span class="highlight">passionate</span> about <span class="highlight">people </span> and
          <span class="highlight">products</span> that <span class="highlight">challenge</span>
          <span class="highlight">💓👥🚀✨</span>
        </h4>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@use '@/styles/helpers' as *;

#Intro {
  background-color: $black-bg;
}

.hero {
  display: flex;
  background-attachment: scroll;
  background-clip: padding-box;
  background-image: url(@/assets/Profile.png);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: contain;
  height: calc(100vh - #{$nav-height-top});
  margin-top: $nav-height-top;
  width: 100vw;
}

.quote {
  align-self: start;
  color: $light-text;
  justify-self: start;
  margin-left: 50vw;
  margin-top: 25vh;
  text-align: left;
  width: auto;
  max-width: 35%;
  user-select: none;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: 40px;
  animation: slide-left 1s linear forwards;
}

.highlight {
  text-shadow: 0 0 2px $light-text;
  transition: all 0.3s ease-in-out;
  display: inline-block;
  &:hover {
    text-shadow: 0 0 5px $light-text;
  }
}

@include sm-and-down {
  .quote {
    margin: 3rem 1rem;
    align-self: first baseline;
    text-align: center;
    max-width: 100vw;
  }
}
</style>
