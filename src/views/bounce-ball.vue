<template>
  <div class="bounce-ball">
    <div class="ball">
      <i class="el-icon-basketball"></i>
    </div>
    <div class="ground">
      <div class="shadow bounce-shadow"></div>
    </div>
  </div>
</template>

<script lang="js">
export default {
  name: "BounceBall"
}
</script>

<style lang="scss" scoped>
.bounce-ball {
  width: 100%;
  height: 100%;
  background: #091921;
  position: relative;
  .ball {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    animation: bounce 2s infinite;
    .el-icon-basketball {
      font-size: 50px;
      color: #ff7f00;
    }
  }
  .ground {
    width: 20%;
    height: 2px;
    border-radius: 2px;
    background: rgba(255, 127, 0, 0.2);
    position: absolute;
    top: calc(50% + 100px);
    left: 50%;
    transform: translate(-50%, -50%);
    .shadow {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 50px;
      height: 10px;
      background: rgba(255, 127, 0, 0.8);
      border-radius: 50%;
      filter: blur(3px);
    }
    .bounce-shadow {
      animation: shadow 2s cubic-bezier(0.36, 0, 0.66, 1) infinite;
    }
  }
}

@keyframes bounce {
  0% {
    transform: translate(-50%, -150px);
  }
  20% {
    transform: translate(-50%, 50px);
  }
  40% {
    transform: translate(-50%, -50px);
  }
  60% {
    transform: translate(-50%, 50px);
  }
  75% {
    transform: translate(-50%, 0);
  }
  85% {
    transform: translate(-50%, 50px);
  }
  92% {
    transform: translate(-50%, 35px);
  }
  96% {
    transform: translate(-50%, 50px);
  }
  98% {
    transform: translate(-50%, 45px);
  }
  100% {
    transform: translate(-50%, 50px);
  }
}

@keyframes shadow {
  0% {
    transform: translateX(-50%) scale(0.5);
    opacity: 0.1;
  }
  20% {
    transform: translateX(-50%) scale(1);
    opacity: 0.3;
  }
  40% {
    transform: translateX(-50%) scale(0.7);
    opacity: 0.2;
  }
  60% {
    transform: translateX(-50%) scale(1);
    opacity: 0.3;
  }
  75% {
    transform: translateX(-50%) scale(0.8);
    opacity: 0.25;
  }
  85%,
  96%,
  100% {
    transform: translateX(-50%) scale(1);
    opacity: 0.3;
  }
  92% {
    transform: translateX(-50%) scale(0.9);
    opacity: 0.27;
  }
  98% {
    transform: translateX(-50%) scale(0.95);
    opacity: 0.28;
  }
}
</style>
