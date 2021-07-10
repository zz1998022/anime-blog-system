import { createRouter, createWebHistory } from 'vue-router'
const HomePage = () => import('./views/HomePage.vue')

const routes = [
  { path: '/', component: HomePage }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
