import Vue from 'vue'
import Vuex from 'vuex'
import Images from './modules/Images'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Images
    }
})