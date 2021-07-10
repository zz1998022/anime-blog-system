import { createStore } from 'vuex'
import { actions } from './action'
import { mutations } from './mutations'

export const store = createStore({
  state: {},
  actions,
  mutations
})
