import { createStore } from 'vuex'

import auth from '@/store/modules/auth'

// Create a new store instance.
const store = createStore({
  state () {
    return {}
  },
  mutations: {},
  modules: { auth }
})

export default store
