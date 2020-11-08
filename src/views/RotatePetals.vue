<template>
  <div class="container">
    <div class="loader">
      <div class="petal" style="--i:1"></div> <!-- 在 style="--i:1" 中，--i 表示定义在 :root 中的变量-->
      <div class="petal" style="--i:2"></div>
      <div class="petal" style="--i:3"></div>
      <div class="petal" style="--i:4"></div>
      <div class="petal" style="--i:5"></div>
      <div class="petal" style="--i:6"></div>
      <div class="petal" style="--i:7"></div>
      <div class="petal" style="--i:8"></div>
    </div>

    <div class="progress"></div>
  </div>
</template>

<script lang="js">
  export default {
    name: "RotatePetals"
  }
</script>

<style lang="scss" scoped>
  .container {
    background: #2D3C50;
    flex-direction: column;
  }

  .loader {
    width: 30vh;
    height: 30vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: rotate_loader 3.8s linear infinite;
  }

  @keyframes rotate_loader {
    from {
      transform: rotateZ(0deg);
    }
    to {
      transform: rotateZ(360deg);
    }
  }

  .petal {
    width: 30%;
    height: 15%;
    position: absolute;
    border: 1px solid #e74c3c;
    box-shadow: 0 0 10vh #e74c3c;
    border-radius: 0 10vh 0 10vh;
    background-color: #FF9999;
    transform: rotate(calc(var(--i) * 45deg)) translateY(12vh);
    animation: animate_petal 2s linear infinite;
    animation-delay: calc(var(--i) * 200ms);
  }

  @keyframes animate_petal {
    0% {
      border: 2px solid #e74c3c;
      box-shadow: 0 0 10vh #e74c3c;
    }
    50% {
      border: 2px solid #99CCFF;
      box-shadow: 0 0 10vh #99CCFF;
    }
    100% {
      border: 2px solid #e74c3c;
      box-shadow: 0 0 10vh #e74c3c;
    }
  }
</style>
