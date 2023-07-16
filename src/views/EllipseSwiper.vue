<template>
  <div class="ellipse-swiper">
    <div class="banner" ref="banner">
      <img
        class="banner-item"
        v-for="item in imgList"
        :key="item"
        :src="item"
        :style="{
          transform: `translateX(${left}px)`,
        }"
      />
    </div>
    <div class="btns">
      <i class="el-icon-back" @click="goLeft('last')"></i>
      <!-- <i class="el-icon-video-camera-solid"></i> -->
      <i class="el-icon-right" @click="goRight('next')"></i>
    </div>
  </div>
</template>

<script lang="js">
export default {
  name: "EllipseSwiper",
  data() {
    return {
      imgList: [
        require('../assets/images/album/front.jpg'),
        require('../assets/images/album/back.jpg'),
        require('../assets/images/album/left.jpg'),
        require('../assets/images/album/right.jpg'),
        require('../assets/images/album/top.jpg'),
        require('../assets/images/album/bottom.jpg'),
      ],
      currentIndex: 0,
      left: 0
    }
  },
  computed: {
    imageWidth() {
      return this.$refs.banner.children[0].width + 10
    }
  },
  methods: {
    goLeft() {
      if (this.currentIndex === -1) return
      this.currentIndex = this.currentIndex - 1
      this.left += this.imageWidth
    },
    goRight() {
      if (this.currentIndex === 4) return
      this.currentIndex = this.currentIndex + 1
      this.left -= this.imageWidth
    }
  }
}
</script>

<style lang="scss">
.ellipse-swiper {
  width: 100%;
  height: 100%;
  background: #091921;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .banner {
    width: 100%;
    height: 50vh;
    mask: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDQwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDE0NDAgNTAwIiBpZD0iaiI+CiAgPHBhdGggZmlsbD0icmdiKDIwMCwyMDAsMjAwKSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMCAwczI3NS4wNCAxMDAgNzIwIDEwMFMxNDQwIDAgMTQ0MCAwdjUwMHMtMjc1LjA0LTEwMC03MjAtMTAwUzAgNTAwIDAgNTAwVjB6Ii8+Cjwvc3ZnPgo=);
    mask-repeat: no-repeat;
    mask-position: center;
    position: absolute;
    display: flex;
    .banner-item {
      width: 500px;
      padding-right: 10px;
      transition: all 1s;
      animation: admission 3s;
    }
  }
  .btns {
    position: absolute;
    left: 50%;
    bottom: 10%;
    transform: translate(-50%, -50%);
    .el-icon-back,
    .el-icon-video-camera-solid,
    .el-icon-right {
      font-size: 40px;
      color: #34495e;
      cursor: pointer;
      &:hover {
        color: darkgray;
      }
    }
  }
  @keyframes admission {
    0% {
      transform: translateX(100vw);
    }
    100% {
      transform: translateX(0);
    }
  }
}
</style>
