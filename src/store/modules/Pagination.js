export default {
    actions: {
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
        updatePagesNumeric(state, NumPages) {
            state.NumPages = NumPages
        }
    },
    state: {
        NumPages: []
    },
    getters: {
        getPagesNumeric(state) {
            return state.NumPages
        }
    }
}