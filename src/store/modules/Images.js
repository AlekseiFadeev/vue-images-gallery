import axios from 'axios'

axios.defaults.baseURL = 'https://api.unsplash.com'
const key = "9404ae5ed465bacd0a7946af14a336d213fc0211605817fce330ba83886ce9a4"

export default {
    actions: {
        getImages({ commit, dispatch }, Page = 1, PerPage = 9){
            axios.get('/photos/' + '?page=' + Page + '&per_page=' + PerPage + '&client_id=' + key)
            .then(response => {
                console.log(response.data)
                let Images = response.data
                commit('updateImages', Images)
                commit('PageNow', Page)
            })
            .catch(error => {
                console.log(error)
            })

            dispatch('PagesNumeric', Page, {root:true})
        }
    },
    mutations: {
        updateImages(state, images) {
            state.Images = images
        },
        PageNow(state, PageNow) {
            state.PageNow = PageNow
        }
    },
    state: {
        Images: [],
        PageNow: 1
    },
    getters: {
        allImages(state) {
            return state.Images
        },
        Page(state) {
            return state.PageNow
        }
    }
}