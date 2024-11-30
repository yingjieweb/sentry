<template>
  <div class="hypnosis-circle">
    <div class="circle" style="--i:1;--color:#EC3E27"></div>
    <div class="circle" style="--i:2;--color:#fd79a8"></div>
    <div class="circle" style="--i:3;--color:#0984e3"></div>
    <div class="circle" style="--i:4;--color:#00b894"></div>
    <div class="circle" style="--i:5;--color:#fdcb6e"></div>
    <div class="circle" style="--i:6;--color:#e056fd"></div>
    <div class="circle" style="--i:7;--color:#F97F51"></div>
    <div class="circle" style="--i:8;--color:#BDC581"></div>
    <div class="circle" style="--i:9;--color:#EC3E27"></div>
    <div class="circle" style="--i:10;--color:#fd79a8"></div>
    <div class="circle" style="--i:11;--color:#0984e3"></div>
    <div class="circle" style="--i:12;--color:#00b894"></div>
    <div class="circle" style="--i:13;--color:#fdcb6e"></div>
    <div class="circle" style="--i:14;--color:#e056fd"></div>
    <div class="circle" style="--i:15;--color:#F97F51"></div>
    <div class="circle" style="--i:16;--color:#BDC581"></div>
  </div>
</template>

<script lang="js">
export default {
  name: "HypnosisCircle",
  mounted() {
    this.init()
  },
  methods: {
    init() {
      let container = document.querySelector('.hypnosis-circle');
      let window_width = document.documentElement.clientWidth;
      let window_height = document.documentElement.clientHeight;
      // 监听鼠标移动事件，获取鼠标位置，计算鼠标在屏幕中的百分比
      container.addEventListener('mousemove', (e) => {
        // 鼠标坐标
        let left = e.clientX;
        let top = e.clientY;
        // 百分比
        let left_p = left / window_width * 100;
        let top_p = top / window_height * 100;
        // 透视基点
        container.style.perspectiveOrigin = left_p + "% " + top_p + "%";
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/helper.scss";

.hypnosis-circle {
  width: 100%;
  height: 100%;
  background-color: #091921;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transform-style: preserve-3d;
  perspective: 200px;
  overflow: hidden;
  .circle {
    position: absolute;
    box-sizing: border-box;
    width: 60vh;
    height: 60vh;
    border-radius: 50%;
    border: 15px solid var(--color);
    display: flex;
    justify-content: center;
    align-items: center;
    animation: animate 3.2s ease-in-out infinite reverse both;
    animation-delay: calc(var(--i) * 0.2s);
    @keyframes animate {
      0% {
        transform: translateZ(190px) scale(1);
        opacity: 0;
      }
      5% {
        opacity: 1;
      }
      95% {
        opacity: 1;
      }
      100% {
        transform: translateZ(-600px) scale(0.2);
        opacity: 0;
      }
    }
    &::before {
      position: absolute;
      content: "";
      box-sizing: border-box;
      width: 60vh;
      height: 60vh;
      border-radius: 50%;
      border: 15px solid var(--color);
      filter: blur(10px);
    }
    &::after {
      position: absolute;
      content: "";
      box-sizing: border-box;
      width: 60vh;
      height: 60vh;
      border-radius: 50%;
      border: 15px solid var(--color);
      filter: blur(15px);
    }
  }
}
</style>
