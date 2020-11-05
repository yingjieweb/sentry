import Vue from 'vue'
import VueRouter from 'vue-router'

import Spacecraft from "@/views/Spacecraft"
import CubeAlbum from "@/views/CubeAlbum"
import ProgressBar from "@/views/ProgressBar"
import TimeClock from "@/views/TimeClock"
import TypeWriter from "@/views/TypeWriter"

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
  },
  {
    path: '/time-clock',
    name: 'TimeClock',
    component: TimeClock
  },
  {
    path: '/type-writer',
    name: 'TypeWriter',
    component: TypeWriter
  }
]

const router = new VueRouter({
  routes
})

export default router
