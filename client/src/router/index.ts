import { createRouter, createWebHistory } from 'vue-router'

const routes = [{ path: '/', component: () => import('@/views/HomePage.vue') }]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
