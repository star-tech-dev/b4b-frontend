import type { GetterTree, MutationTree, ActionTree } from 'vuex'
import API from '@/api'

class State {
  user: any
}

const actions = <ActionTree<State, any>>{
  login: (context, payload) => {
    return API.sendRequest({
      method: 'post',
      url: '/login',
      data: payload
    })
  },

  register: (context, payload) => {
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
}

const mutations = <MutationTree<State>>{
  USER_UPDATE: (state, user) => {
    state.user = user
  }
}

const getters = <GetterTree<State, any>>{
}

const APIModule = {
  namespaced: true,
  state: new State(),
  actions: actions,
  mutations: mutations,
  getters: getters
}

export default APIModule
