<template>
  <div class="cartoon-fan">
    <!-- 风扇 -->
    <div class="fan">
      <!-- 头部 -->
      <div class="head">
        <!-- 扇叶组合 -->
        <section class="blades">
          <!-- 扇叶 -->
          <div class="blade" style="--i:1;--color: #fd79a8;"></div>
          <div class="blade" style="--i:2;--color: #fdcb6e;"></div>
          <div class="blade" style="--i:3;--color: #BDC581;"></div>
          <!-- 扇叶中心logo区域 -->
          <div class="logo"></div>
        </section>
      </div>
      <!-- 支架 -->
      <div class="body"></div>
      <!-- 底座 -->
      <div class="base"></div>
    </div>
  </div>
</template>

<script lang="js">
export default {
  name: "CartoonFan"
}
</script>

<style lang="scss" scoped>
@import "~@/styles/helper.scss";

.cartoon-fan {
  width: 100%;
  height: 100%;
  background: #091921;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 风扇 */
.fan {
  position: absolute;
  width: 160px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: khaki; */
}

/* 头部 */
.head {
  position: absolute;
  box-sizing: border-box;
  width: 160px;
  height: 160px;
  /* background-color: lightcoral; */
  top: 0;
  z-index: 1;
  border-radius: 50%;
  border: 5px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  animation: animate_head 5s linear infinite;
}

@keyframes animate_head {
  0% {
    transform: rotate3d(1, 1, 0, 40deg);
  }
  25% {
    transform: rotate3d(1, 0, 0, 15deg);
  }
  50% {
    transform: rotate3d(1, -1, 0, 40deg);
  }
  75% {
    transform: rotate3d(1, 0, 0, 15deg);
  }
  100% {
    transform: rotate3d(1, 1, 0, 40deg);
  }
}

.head::before {
  position: absolute;
  box-sizing: border-box;
  content: "";
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 4px solid #fff;
  transform: scale(0.85) translateZ(-5px);
}

.head::after {
  position: absolute;
  box-sizing: border-box;
  content: "";
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 3px solid #fff;
  transform: scale(0.7) translateZ(-10px);
}

/* 扇叶组合 */
.blades {
  width: 160px;
  height: 160px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: animate_blades 1s linear infinite;
}

@keyframes animate_blades {
  0% {
    transform: translateZ(20px) rotate(0deg);
  }
  100% {
    transform: translateZ(20px) rotate(360deg);
  }
}

/* 扇叶 */
.blade {
  position: absolute;
  width: 50%;
  height: 25%;
  background-color: var(--color);
  border-radius: 50%;
  transform: rotate(calc(var(--i) * 120deg)) translateX(40%);
  box-shadow: inset -4px -8px 3px 2px rgba(0, 0, 0, 0.2);
}

/* 扇叶中心logo区域 */
.logo {
  position: absolute;
  width: 10%;
  height: 10%;
  background-color: var(--color4);
  border: 8px solid #f5f5f5;
  border-radius: 50%;
}

/* 支架 */
.body {
  position: absolute;
  width: 15px;
  height: 110px;
  bottom: 15px;
  background-color: #fff;
  z-index: 0;
}

/* 底座 */
.base {
  position: absolute;
  width: 80px;
  height: 15px;
  bottom: 0px;
  border-radius: 15px;
  background-color: #fff;
  z-index: 0;
}
</style>
