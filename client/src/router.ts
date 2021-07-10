import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('./views/Home.vue')

const routes = [
  { path: '/', component: Home }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})