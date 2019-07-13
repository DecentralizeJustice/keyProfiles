import Vue from 'vue'
import Router from 'vue-router'
import store from './state/store'
const myfunction = () => {}

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/', redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      beforeEnter: (to, from, next) => {
        next()
      },
      component: () => import('./views/Home.vue')
    },
    {
      path: '/tutorial',
      name: 'tutorial',
      beforeEnter: (to, from, next) => {
        store.dispatch('tutorialnav/showBar')
        next()
      },
      component: () => import('./views/Tutorial.vue')
    },
    {
      path: '/tool',
      name: 'tool',
      beforeEnter: (to, from, next) => {
        next()
      },
      component: () => import('./views/Customtool.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  store.dispatch('tutorialnav/hideBar')
  next()
})

export default router
