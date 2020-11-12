import Vue from 'vue'
import VueRouter from 'vue-router'

import HypnosisCircle from "@/views/HypnosisCircle"
import Spacecraft from "@/views/Spacecraft"
import CubeAlbum from "@/views/CubeAlbum"
import ProgressBar from "@/views/ProgressBar"
import TimeClock from "@/views/TimeClock"
import TypeWriter from "@/views/TypeWriter"
import RotatePetals from "@/views/RotatePetals"
import ColorWave from "@/views/ColorWave"
import CartoonFan from "@/views/CartoonFan"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/hypnosis-circle'
  },
  {
    path: '/hypnosis-circle',
    name: 'HypnosisCircle',
    component: HypnosisCircle
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
  },
  {
    path: '/rotate-petals',
    name: 'RotatePetals',
    component: RotatePetals
  },
  {
    path: '/color-wave',
    name: 'ColorWave',
    component: ColorWave
  },
  {
    path: '/cartoon-fan',
    name: 'CartoonFan',
    component: CartoonFan
  }
]

const router = new VueRouter({
  routes
})

export default router
