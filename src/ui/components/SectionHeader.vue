<template>
  <base-section>
    <div class="header">
      <div class="profile">
        <img class="headshot" src="../assets/profile-min.jpg" alt="🐒 There should be a picture of me here..." />
        <img class="shades" src="../assets/shades.png" alt="NVM" />
      </div>
      <h1>Keagan Chisnall</h1>
      <p>
        I am a software developer backed by a decade of engineering, management, and entrepreneurship. I am passionate
        about efficient and effective design and am always looking for new opportunities.
      </p>
    </div>
  </base-section>
</template>

<script>
import BaseSection from './BaseSection'

export default {
  name: 'Header',
  components: {
    BaseSection
  }
}
</script>

<style lang="scss" scoped>
.header {
  margin: 0 10px;
  font-family: 'Poppins', sans-serif !important;
  font-size: 1.3rem;
  text-align: center;
  transition: all 0.3s ease-in-out;
}
.profile {
  border-radius: 50%;
  border: 3px ridge silver;
  height: 100%;
  margin: 0 auto;
  max-width: 300px;
  min-width: 150px;
  overflow: hidden;
  position: relative;
  .headshot {
    max-height: 100%;
    max-width: 100%;
    margin-bottom: -8px;
  }
  &:hover .shades {
    top: 36%;
    left: 19%;
    transition: 2s ease-in-out 1s;
  }
}
.full {
  text-align: left;
}
.full .profile {
  width: 33%;
  float: left;
  margin-right: 5rem;
  shape-outside: circle();
}
.shades {
  width: 60%;
  position: absolute;
  top: -30px;
  left: -30px;
  transition: 0.2s ease-in-out 0s;
}
@media screen and (min-width: 500px) {
  .header {
    text-align: left;
  }
  .header .profile {
    width: 33%;
    float: left;
    margin-right: 5rem;
    shape-outside: circle();
  }
}
</style>