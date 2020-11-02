<template>
  <div class="container">
    <div class="album">
      <img class="front" src="../assets/images/cubeAlbum/front.jpg" alt="">
      <img class="back" src="../assets/images/cubeAlbum/back.jpg" alt="">
      <img class="left" src="../assets/images/cubeAlbum/left.jpg" alt="">
      <img class="right" src="../assets/images/cubeAlbum/right.jpg" alt="">
      <img class="top" src="../assets/images/cubeAlbum/top.jpg" alt="">
      <img class="bottom" src="../assets/images/cubeAlbum/bottom.jpg" alt="">
    </div>
  </div>
</template>

<script lang="js">
  export default {
    name: "CubeAlbum"
  }
</script>

<style lang="scss" scoped>
  .container {
    background: radial-gradient(#CCFF99, #FFCC99);
  }

  .album {
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    transform-style: preserve-3d;
    transform: rotateX(-20deg) rotateY(-20deg);
    animation: rotate 5s linear alternate infinite;
  }

  .container img {
    width: 300px;
    height: 300px;
    position: absolute;
    opacity: 0.9;
  }

  .container .front {
    transform: translateZ(150px);
  }
  .container .back {
    transform: rotateY(180deg) translateZ(150px);
  }
  .container .left {
    transform: rotateY(-90deg) translateZ(150px);
  }
  .container .right {
    transform: rotateY(90deg) translateZ(150px);
  }
  .container .top {
    transform: rotateX(90deg) translateZ(150px);
  }
  .container .bottom {
    transform: rotateX(-90deg) translateZ(150px);
  }

  @keyframes rotate {
    0%, 5% {transform: rotateY(90deg)}
    20%, 25% {transform: rotateY(180deg)}
    40%, 45% {transform: rotateY(270deg)}
    60%, 65% {transform: rotateX(-90deg)}
    80%, 85% {transform: rotateX(0deg)}
    95%, 100% {transform: rotateX(90deg)}
  }
</style>
