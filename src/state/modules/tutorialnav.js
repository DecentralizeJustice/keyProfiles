export default {
  namespaced: true,
  state: {
    navVisible: true
  },
  actions: {
    hideBar ({ commit }) {
      commit('hideBar')
    },
    showBar ({ commit }) {
      commit('showBar')
    }
  },
  mutations: {
    hideBar (state) {
      state.navVisible = false
    },
    showBar (state) {
      state.navVisible = true
    }
  }
}
