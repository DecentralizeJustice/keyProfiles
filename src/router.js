import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/', redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
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
      component: () => import('./views/Customtool.vue')
    }
  ]
})
