import Vue from 'vue'
import VueRouter from 'vue-router'

import Spacecraft from "@/views/Spacecraft"
import CubeAlbum from "@/views/CubeAlbum"
import ProgressBar from "@/views/ProgressBar"

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
  },
  {
    path: '/cube-album',
    name: 'CubeAlbum',
    component: CubeAlbum
  },
  {
    path: '/progress-bar',
    name: 'ProgressBar',
    component: ProgressBar
  }
]

const router = new VueRouter({
  routes
})

export default router
