<template>
  <section id="Skills">
    <div class="skills">
      <template v-for="h in skills" :key="h.title">
        <SkillCardVue :title="h.title" :summary="h.summary" :date="h.date" :img-url="h.imgUrl" :icon="h.icon" />
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import SkillCardVue from './SkillCard.vue'
import skills from './skills.js'
</script>

<style lang="scss" scoped>
@use '@/styles/helpers' as *;

#Skills {
  background-color: $blue-bg;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  width: 100%;
  padding: 5rem;
}
</style>
