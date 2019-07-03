export default {
  namespaced: true,
  state: {
    contentTypeVideo: 'true'
  },
  actions: {
    changeContentType ({ commit }) {
      commit('CHANGE_CONTENT_TYPE')
    }
  },
  mutations: {
    CHANGE_CONTENT_TYPE (state) {
      state.contentTypeVideo = !state.contentTypeVideo
    }
  }
}
