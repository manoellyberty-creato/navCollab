import AboutView from '@/views/AboutView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'


const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
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
