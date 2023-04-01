import Vue from 'vue'
import VueRouter from 'vue-router'
import Music from '../views/Home.vue'
import '../public-path'

Vue.use(VueRouter)

const routes = [{
        path: '/Music',
        name: 'Music',
        component: Music
    },
    {
        path: '/Dome',
        name: 'Dome',
     
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: window.__POWERED_BY_QIANKUN__ ? '/vue' : '/',
    routes
})

export default router