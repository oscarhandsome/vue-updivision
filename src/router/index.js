import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import LogIn from '@/components/Auth/LogIn'
import Register from '@/components/Auth/Register'
import Products from '@/components/Products'
import Product from '@/components/Product'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            props: false,
            name: 'login',
            component: LogIn
        },
        {
            path: '/register',
            props: false,
            name: 'register',
            component: Register
        },
        {
            path: '/products',
            props: true,
            name: 'products',
            component: Products
        },
        {
            path: '/product/:id',
            component: Product
        },
    ],
    mode: 'history'
})
