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

            dispatch('PagesNumeric', Page)
        },
        PagesNumeric({ commit }, Page) {
            let NumPages = []
            let p = Page

            if(p == 1){
              for(let i = 7; p <= i; p++){
                NumPages.push(p)
              }
            } else {
              if(p == 2){
                p = p - 1;
                for(let i = 7; p <= i; p++){
                  NumPages.push(p)
                }
              }else {
                if(p == 3){
                  p = p - 2;
                  for(let i = 7; p <= i; p++){
                    NumPages.push(p)
                  }
                }else {
                    p = p - 3;
                    for(let i = p+6; p <= i; p++){
                      NumPages.push(p)
                    }
                  }
                }
              }

              commit('updatePagesNumeric', NumPages)
          }
    },
    mutations: {
        updateImages(state, images) {
            state.Images = images
        },
        updatePagesNumeric(state, NumPages) {
            state.NumPages = NumPages
        },
        PageNow(state, PageNow){
            state.PageNow = PageNow
        }
    },
    state: {
        Images: [],
        NumPages: [],
        PageNow: 1
    },
    getters: {
        allImages(state) {
            return state.Images
        },
        getPagesNumeric(state) {
            return state.NumPages
        },
        Page(state){
            return state.PageNow
        }
    }
}