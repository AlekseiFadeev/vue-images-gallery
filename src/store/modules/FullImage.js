export default {
    actions: {
        getFullImage({ commit, dispatch }, link) {
            commit('updateFullImage', link)
            dispatch('showFullImage')
        },
        showFullImage({ commit }) {
            commit('updateShowFullImage')
        }
    },
    mutations: {
        updateFullImage(state, FullImage) {
            state.FullImageLink = FullImage
        },
        updateShowFullImage(state) {
            state.FullImageView = !state.FullImageView
        }
    },
    state: {
        FullImageView: false,
        FullImageLink: ''
    },
    getters: {
        FullImage(state) {
            return state.FullImageLink
        },
        getShowFullImage(state) {
            return state.FullImageView
        }
    }
}