import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const init = () => ({
  openSections: [],
})

export default new Vuex.Store({
  state: init(),
  getters: {
    openSections: (state) => state.openSections,
  },
  mutations: {
    RESET: (state) => Object.assign(state, init()),
    OPEN_SECTION: (state, payload) => (state.openSections.includes(payload) ? null : state.openSections.push(payload)),
  },
  actions: {
    reset: ({ commit }) => commit('RESET'),
    openSection: ({ commit }, payload) => commit('OPEN_SECTION', payload),
  },
})
