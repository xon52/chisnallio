<template>
  <footer>
    <base-footer-button
      :color="button.color"
      :icon="button.icon"
      :image="button.image"
      :key="button.title"
      :title="button.title"
      :url="button.url"
      v-for="button in buttons"
    />
  </footer>
</template>

<script>
import BaseFooterButton from './BaseFooterButton'

export default {
  name: 'BaseFooter',
  components: { BaseFooterButton },
  data: () => ({
    buttons: [
      {
        title: 'GitHub',
        url: 'https://github.com/xon52',
        icon: 'fab fa-github',
        color: '#24292E'
      },
      {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/keagan-chisnall/',
        icon: 'fab fa-linkedin-in',
        color: '#0073B0'
      },
      {
        title: 'Medium',
        url: 'https://medium.com/@xon5',
        icon: 'fab fa-medium-m',
        color: '#292929'
      },
      {
        title: 'Buy me a coffee',
        url: 'https://www.buymeacoffee.com/chisnallio',
        image: 'https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg',
        icon: 'fas fa-coffee',
        color: '#5F7FFF'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  text-align: center;
  padding: 20px 0;
}
</style>