import { createStore } from 'vuex'

import auth from '@/store/modules/auth'
import modals from '@/store/modules/modals'

const store = createStore({
  state: () => ({}),
  actions: {},
  mutations: {},
  modules: { auth, modals }
})

export default store
