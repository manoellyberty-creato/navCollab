import AboutView from '@/views/AboutView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes=[
  {path:'/about',
    name:'about',
    component:AboutView
  }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
