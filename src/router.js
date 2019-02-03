import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/spinners',
      name: 'spinners',
      component: () => import(/* webpackChunkName: "spinners" */ '@/views/spinners/Spinners.vue'),
      alias: ['/', '*'],
      meta: {
        title: 'Pure CSS spinners by Kenneth Aamås'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/about/About.vue'),
      meta: {
        title: 'Kenneth Aamås'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (Object(to.meta).title) document.title = Object(to.meta).title;
  else document.title = 'Kenneth Aamås'
  next()
})

export default router