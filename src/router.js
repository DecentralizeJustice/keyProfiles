import Vue from 'vue'
import Router from 'vue-router'

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
  next()
})

export default router
