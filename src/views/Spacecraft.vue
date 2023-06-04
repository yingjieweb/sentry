<template>
  <div class="space-craft">
    <div class="rocket">
      <img src="../assets/images/rocket/rocket.png" />
    </div>
    <i></i>
  </div>
</template>

<script lang="js">
export default {
  name: "Spacecraft",
  mounted(){
    this.newLine()
  },
  methods: {
    random(m, n) {
      return Math.ceil(Math.random() * (n - m + 1))
    },
    newLine() {
      let starCount = 60;
      for (let i = 0; i < starCount; i++) {
        const i = document.createElement('i')
        i.style.height = this.random(30, 100) + 'px'
        i.style.left = this.random(1, 99) + '%'
        i.style.animationDuration = this.random(5, 30) / 10 + 5 + 's'
        document.querySelector('.space-craft').appendChild(i)
      }
    }
  }
}
</script>

<style lang="scss">
.space-craft {
  width: 100%;
  height: 100%;
  background-color: #091921;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  .rocket {
    z-index: 2;
    animation: shake 0.8s linear infinite;
    &::after {
      content: "";
      width: 10px;
      height: 120px;
      background: linear-gradient(rgb(10, 158, 194), transparent);
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -120px;
    }
    @keyframes shake {
      0%,
      100% {
        transform: translateY(-16px);
      }
      40% {
        transform: translateY(6px);
      }
    }
  }
  i {
    width: 1px;
    height: 20px; /*30 - 100px*/
    position: absolute;
    top: 0;
    left: 20px; /*1 - 100vw*/
    background-color: #fff;
    animation: line 5s linear infinite;
    @keyframes line {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(88vh);
      }
    }
  }
}
</style>
