<template>
  <div class="cube-album">
    <div class="album">
      <img class="front" src="../assets/images/album/front.jpg" />
      <img class="back" src="../assets/images/album/back.jpg" />
      <img class="left" src="../assets/images/album/left.jpg" />
      <img class="right" src="../assets/images/album/right.jpg" />
      <img class="top" src="../assets/images/album/top.jpg" />
      <img class="bottom" src="../assets/images/album/bottom.jpg" />
    </div>
  </div>
</template>

<script lang="js">
export default {
  name: "CubeAlbum"
}
</script>

<style lang="scss" scoped>
.cube-album {
  width: 100%;
  height: 100%;
  background-color: #091921;
  display: flex;
  justify-content: center;
  align-items: center;
  .album {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transform-style: preserve-3d;
    transform: rotateX(-20deg) rotateY(-20deg);
    animation: rotate 5s linear alternate infinite;
    img {
      width: 300px;
      height: 300px;
      position: absolute;
      opacity: 0.9;
    }
    .front {
      transform: translateZ(150px);
    }
    .back {
      transform: rotateY(180deg) translateZ(150px);
    }
    .left {
      transform: rotateY(-90deg) translateZ(150px);
    }
    .right {
      transform: rotateY(90deg) translateZ(150px);
    }
    .top {
      transform: rotateX(90deg) translateZ(150px);
    }
    .bottom {
      transform: rotateX(-90deg) translateZ(150px);
    }
    @keyframes rotate {
      0%,
      5% {
        transform: rotateY(90deg);
      }
      20%,
      25% {
        transform: rotateY(180deg);
      }
      40%,
      45% {
        transform: rotateY(270deg);
      }
      60%,
      65% {
        transform: rotateX(-90deg);
      }
      80%,
      85% {
        transform: rotateX(0deg);
      }
      95%,
      100% {
        transform: rotateX(90deg);
      }
    }
  }
}
</style>
