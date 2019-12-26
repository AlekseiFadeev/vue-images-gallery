import Vue from 'vue'
import Vuex from 'vuex'
import Images from './modules/Images'
import Pagination from './modules/Pagination'
import FullImage from './modules/FullImage'

Vue.use(Vuex)

export default new Vuex.Store({
    namespaced: true,
    modules: {
        Images,
        Pagination,
        FullImage
    }
})