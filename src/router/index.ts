import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path:'/',
      redirect:'/main'
    },
    {
      path:'/login',
     component:()=> import('../views/login/mlogin.vue')
    },
    {
      path:'/main',
     component:()=> import ('../views/main/main.vue')
    },
  ]
})

export default router
