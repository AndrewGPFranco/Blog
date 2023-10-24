import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './Views/Home.vue'
import Backend from './Views/Backend.vue'

import 'primeicons/primeicons.css'

import './assets/main.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/backend',
      name: 'Backend',
      component: Backend
    }
  ]
})


createApp(App).use(router).mount('#app')
