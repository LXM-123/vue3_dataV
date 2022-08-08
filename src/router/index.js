import { createRouter,createWebHistory } from "vue-router";

let router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/index',
      component: () => import('@/views/Index.vue')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/views/Index.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
  ]
})

export default router;