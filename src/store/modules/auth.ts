import API from '@/api'

export const api = {
  namespaced: true,
  state: () => ({
    user: null
  }),
  actions: {
    login: (state, payload) => {
      return API.sendRequest({
        method: 'post',
        url: '/login',
        data: payload
      })
    },

    register: (state, payload) => {
      return API.sendRequest({
        method: 'post',
        url: '/register',
        data: payload
      })
    },

    check: () => {
      return API.sendRequest({
        method: 'get',
        url: '/auth'
      })
    },

    setUser: ({ commit }, payload) => {
      commit('USER_UPDATE', payload)
    }
  },
  mutations: {
    USER_UPDATE: (state, user) => {
      state.user = user
    }
  },
  getters: {}
}

export default api
