<template>
  <!-- TODO: Open this with store, and hide it when a modal is open -->
  <div class="toolbar" :class="{ hide: hideToolbar }">
    <!-- Home -->
    <a class="home" href="#">chisnall.io</a>
    <!-- Links -->
    <a
      v-for="{ label, anchor } in links"
      :key="label"
      class="link"
      @click="openSection(anchor)"
      :class="{ active: active === `#${anchor}` }"
    >
      {{ label }}
    </a>
    <!-- Menu Button -->
    <button class="menu-button" @click="menuOpen ? closeMenu() : openMenu()">
      <i :class="menuOpen ? 'fa fa-times' : 'fa fa-bars'"></i>
    </button>
    <!-- Menu -->
    <div class="menu" :class="{ 'menu-open': menuOpen }" @click="closeMenu">
      <!-- Links -->
      <a v-for="{ label, anchor } in links" :key="label" class="menu-item" @click="openSection(anchor)">
        {{ label }}
      </a>
    </div>
  </div>
</template>

<script>
const wait = seconds => new Promise(resolve => setTimeout(() => resolve(), seconds * 1000))

export default {
  name: 'BaseToolbar',
  data: () => ({
    active: null,
    menuOpen: false,
    scrollPos: null,
    hideToolbar: false,
    links: [
      // NOTE: These are reversed in order by CSS float
      { label: 'Contact', anchor: 'contact' },
      { label: 'Projects', anchor: 'projects' },
      { label: 'Technologies', anchor: 'technologies' }
    ],
    options: {
      minHidePos: 200,
      activePosRng: 200,
      bottomPosRng: 20,
      mouseShowPos: 30
    }
  }),
  methods: {
    async openSection(name) {
      if (!this.$store.getters.openSections.includes(name)) {
        await this.$store.dispatch('openSection', name)
        await wait(0.5)
      }
      const target = document.querySelector(`#${name}`)
      const yPos = target.offsetTop
      window.scrollTo(0, yPos)
    },
    openMenu() {
      this.menuOpen = true
    },
    closeMenu() {
      this.menuOpen = false
    },
    handleScroll() {
      // Vars
      const newPos = window.pageYOffset
      const oldPos = this.scrollPos
      // Set active anchor
      const active = this.links.find(link => {
        const targetAnchor = document.querySelector(link.anchor)
        if (!targetAnchor) return false
        const linkPos = targetAnchor.offsetTop
        const result = linkPos > newPos - this.options.activePosRng && linkPos < newPos + this.options.activePosRng
        return result
      })
      this.active = active ? active.anchor : null
      // Check if at bottom of page (stops bouncing when contact form is focused)
      const atBottom = window.innerHeight + newPos >= document.body.offsetHeight + this.options.bottomPosRng
      // Hide toolbar when scrolling down
      this.hideToolbar = atBottom || (newPos > oldPos && newPos > this.options.minHidePos)
      // Close menu on scroll down
      if (this.menuOpen && newPos > oldPos) this.closeMenu()
      // Update new scroll position
      this.scrollPos = newPos
    },
    handleClick(event) {
      // Close menu if outside click
      if (this.menuOpen && event.target instanceof HTMLElement && !this.$el.contains(event.target)) this.closeMenu
    },
    handleMouseMove(event) {
      // Show toolbar if mouse moves near top
      if (this.hideToolbar && event.clientY < this.options.mouseShowPos) this.hideToolbar = false
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
    document.addEventListener('click', this.handleClick)
    document.addEventListener('mousemove', this.handleMouseMove)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    document.removeEventListener('click', this.handleClick)
    document.removeEventListener('mousemove', this.handleMouseMove)
  }
}
</script>
<style lang="scss" scoped>
// TODO: Change all these to variables
.toolbar {
  background-color: #333;
  box-shadow: 0 2px 5px #000a;
  left: 0;
  margin-bottom: 5px;
  padding: 0 5px;
  position: fixed;
  right: 0;
  top: 0;
  transition: all 0.3s ease-in-out;
  z-index: 1;
  &.hide {
    box-shadow: none;
    top: -60px;
  }
  a,
  button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    text-decoration: none;
    transition: background 0.3s ease-in-out;
    &:hover,
    &.active {
      background: dodgerblue;
      text-shadow: 0px 0px 5px #999;
    }
  }
}
.home {
  float: left;
  font-family: 'Source Code Pro', monospace;
  font-size: 23px;
  padding: 14px 10px;
}
.link {
  float: right;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  letter-spacing: 1px;
  padding: 20px 10px;
  text-transform: uppercase;
}
.menu-button {
  display: none;
  float: right;
  font-family: 'Source Code Pro', monospace;
  font-size: 26px;
  height: 100%;
  padding: 12px 0;
  text-align: center;
  text-transform: uppercase;
  width: 60px;
}
.menu {
  background: #333;
  display: block;
  height: 100vh;
  left: 0;
  max-height: 0;
  overflow: hidden;
  padding: 0;
  position: absolute;
  right: 0;
  top: 100%;
  transition: all 0.3s ease-in-out;
  a {
    display: block;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    letter-spacing: 1px;
    margin: 0 10px;
    opacity: 0;
    padding: 20px;
    text-transform: uppercase;
    transition: inherit;
    &:first-of-type {
      margin-top: 10px;
    }
    &:last-of-type {
      margin-bottom: 10px;
    }
  }
}

@media screen and (max-height: 300px) {
  .toolbar {
    position: sticky;
    top: 0;
  }
}
@media screen and (max-width: 500px) {
  .link {
    display: none;
  }
  .menu-button {
    display: block;
  }
  .menu-open {
    max-height: 190px;
    a {
      opacity: 1;
    }
  }
}
</style>