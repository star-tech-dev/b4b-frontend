import { createStore } from 'vuex'

import auth from '@/store/modules/auth'
import API from '@/api'

// Create a new store instance.
const store = createStore({
  state () {
    return {}
  },
  actions: {
    login: (context, payload) => {
      return API.sendRequest({
        method: 'post',
        url: '/login',
        data: payload
      })
    }
  },
  mutations: {},
  modules: { auth }
})

export default store
