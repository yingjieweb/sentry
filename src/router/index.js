import Vue from 'vue'
import VueRouter from 'vue-router'

import Spacecraft from "@/views/Spacecraft"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/spacecraft'
  },
  {
    path: '/spacecraft',
    name: 'Spacecraft',
    component: Spacecraft
  }
]

const router = new VueRouter({
  routes
})

export default router
