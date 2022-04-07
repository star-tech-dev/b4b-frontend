import type { GetterTree, MutationTree, ActionTree } from 'vuex'

type ModalID = string

interface State {
  openedModals: ModalID[]
}

const state = () => ({
  openedModals: []
})

const actions = <ActionTree<State, any>>{
  open: ({ state, commit }, modalID) => {
    document.body.classList.add('-modal-opened')
    const list = [...state.openedModals, modalID]
    commit('SET_OPENED_MODALS', list)
  },

  close: ({ state, commit }, modalID) => {
    if (state.openedModals.length === 1) {
      document.body.classList.remove('-modal-opened')
    }
    const list = state.openedModals.filter(i => i !== modalID)
    commit('SET_OPENED_MODALS', list)
  },

  closeLast: ({ state, commit }) => {
    if (state.openedModals.length === 1) {
      document.body.classList.remove('-modal-opened')
    }
    const list = state.openedModals.slice(0, -1)
    commit('SET_OPENED_MODALS', list)
  },

  closeAll: ({ commit }) => {
    document.body.classList.remove('-modal-opened')
    const list = [] as ModalID[]
    commit('SET_OPENED_MODALS', list)
  }
}

const mutations = <MutationTree<State>>{
  SET_OPENED_MODALS: (state, list) => {
    state.openedModals = list
  }
}

const getters = <GetterTree<State, any>>{
  isOpened: state => (modalID: ModalID) => state.openedModals.includes(modalID)
}

const APIModule = {
  namespaced: true,
  state,
  actions: actions,
  mutations: mutations,
  getters: getters
}

export default APIModule
