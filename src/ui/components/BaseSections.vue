<template>
  <div class="container">
    <section-header></section-header>
    <hr />
    <section-technologies></section-technologies>
    <hr />
    <section-skills></section-skills>
    <hr />
    <section-projects></section-projects>
    <hr />
    <section-contact></section-contact>
  </div>
</template>

<script>
import SectionContact from './SectionContact'
import SectionHeader from './SectionHeader'
import SectionProjects from './SectionProjects'
import SectionSkills from './SectionSkills'
import SectionTechnologies from './SectionTechnologies'

export default {
  name: 'App',
  components: {
    SectionContact,
    SectionHeader,
    SectionProjects,
    SectionSkills,
    SectionTechnologies
  },
  data: () => ({
    contactOpen: false,
    eductionOpen: false,
    employmentOpen: false,
    projectsOpen: false,
    skillsOpen: false,
    technologiesOpen: false
  })
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  padding-top: 60px;
  display: block;
  font-family: 'Poppins', sans-serif !important;
  hr {
    color: silver;
    margin: 10px auto;
    width: 500px;
    max-width: 75%;
  }
}
</style>
