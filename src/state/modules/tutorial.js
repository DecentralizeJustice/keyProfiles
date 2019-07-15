export default {
  namespaced: true,
  state: {
    budget: 0
  },
  actions: {
    changeBudget ({ commit }, newChoice) {
      commit('UPDATE_BUDGET', newChoice)
    }
  },
  mutations: {
    UPDATE_BUDGET (state, newChoice) {
      state.budget = newChoice
    }
  }
}
