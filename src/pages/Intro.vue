<template>
  <div class="hero">
    <div class="quote">
      <h1>👋 I'm <span class="highlight">Keagan</span></h1>
      <h3>
        I'm an <span class="highlight">Engineering Manager</span><br />
        and I love to <span class="highlight">learn 📚</span>, <span class="highlight">lead 👨‍🏫</span>,<br />
        and
        <span class="highlight">collaborate 🤝</span>
      </h3>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@use '@/styles/3-helpers' as *;

.hero {
  display: flex;
  background-color: $header-bg;
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
  user-select: none;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: 40px;
}

.highlight {
  text-shadow: 0 0 2px $light-text;
  transition: all 0.3s ease-in-out;
  &:hover {
    text-shadow: 0 0 5px $light-text;
  }
}

@include sm-and-down {
  .quote {
    margin: 3rem 1rem;
    align-self: first baseline;
    text-align: center;
    width: 100vw;
  }
}
</style>
