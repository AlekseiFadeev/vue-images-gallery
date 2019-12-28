import Vue from 'vue'
import Router from 'vue-router'
import Gallery from '@/components/Gallery.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Gallery
        },
        {
            path: '/page/:id',
            name: 'PageNow',
            component: Gallery
        }
    ]
})