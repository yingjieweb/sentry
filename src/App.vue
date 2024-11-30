<template>
  <div id="app">
    <div class="swiper-screen" style="--swiper-navigation-color: #fff;">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in routes" :key="item.icon">
          <component :is="item.component"></component>
        </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
    <div class="swiper-thumbs">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in routes" :key="item.icon">
          <div class="thumbs-item">
            <i :class="item.icon"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { routes } from '@/routes/index.js';

export default {
  name: "App",
  data() {
    return {
      routes: routes,
    };
  },
  mounted() {
    const swiperThumbs = new Swiper(".swiper-thumbs", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    const swiper2 = new Swiper(".swiper-screen", {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiperThumbs,
      },
    });
  },
};
</script>

<style lang="scss" scoped>
@import "~@/styles/reset.scss";
@import "~@/styles/helper.scss";

#app {
  width: 100vw;
  height: 100vh;
  padding: 10px;
  background-color: #1f262a;
  overflow: hidden;
  .swiper-screen {
    height: 80%;
    width: 100%;
    padding-bottom: 10px;
    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
    }
  }
  .swiper-thumbs {
    height: 20%;
    box-sizing: border-box;
    .swiper-slide {
      width: 25%;
      height: 100%;
      opacity: 0.4;
      .thumbs-item {
        width: 100%;
        height: 100%;
        background-color: #091921;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        &:hover {
          i {
            transform: rotate(360deg) scale(1.2);
            transition: all 0.8s;
          }
        }
        i {
          font-size: 50px;
          color: lightblue;
        }
      }
    }
    .swiper-slide-thumb-active {
      opacity: 1;
    }
  }
}
</style>
