import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'

Vue.use(Router)
const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import ('./components/About.vue')

    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('./components/Login.vue')

    },
    {
        path: '/register',
        name: 'register',
        component: () =>
            import ('./components/Register.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () =>
            import ('./components/Dashboard.vue')

    },
    {
        path: '/modules',
        name: 'modules',
        component: () =>
            import ('./components/Modules.vue')

    }
]
export default new Router({
    routes
})