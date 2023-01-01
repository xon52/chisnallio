import { reactive } from 'vue'

// Initial State
const initialState = {
  sidePanelOpen: false,
}

// State
const state = reactive({ ...initialState })

// Getters
const getters = {}

// Actions
const actions = {
  setSidePanelOpen: (payload: boolean) => (state.sidePanelOpen = payload),
}

export default { state, ...getters, ...actions }
