import Vue from 'vue'
import App from './ui/App.vue'
import store from './store'

import x5Notify from 'x5-notify'
Vue.use(x5Notify, store)

import x5Modal from 'x5-modal'
Vue.use(x5Modal, store)

Vue.config.productionTip = false

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app')
