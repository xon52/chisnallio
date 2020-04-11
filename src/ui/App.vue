<template>
  <div>
    <base-toolbar></base-toolbar>
    <base-sections></base-sections>
    <base-footer></base-footer>
    <base-to-top-button></base-to-top-button>
    <x5-modals></x5-modals>
    <x5-notify></x5-notify>
  </div>
</template>

<script>
import BaseFooter from './components/BaseFooter'
import BaseSections from './components/BaseSections'
import BaseToTopButton from './components/BaseToTopButton'
import BaseToolbar from './components/BaseToolbar'

export default {
  name: 'App',
  components: {
    BaseFooter,
    BaseSections,
    BaseToTopButton,
    BaseToolbar
  }
}
</script>

<style lang="scss" scoped>
@import url('./assets/style.scss');
</style>
