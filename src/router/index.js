import { createRouter,createWebHashHistory } from "vue-router";

let router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'index',
      component: () => import('@/views/Index.vue')
    },
  ]
})

export default router;