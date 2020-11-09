<template>
  <div class="container">
    <div class="grid">
      <div v-for="item in 100" :key="item">
        <div class="item" :style="`--i:${item}`"></div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
  export default {
    name: "ColorWave",
    mounted() {
      // this.init()
    },
    methods: {
      init() {
        // 获取容器元素
        let grid = document.querySelector('.grid');

        // 循环创建100个 item
        for (let index = 1; index < 101; index++) {
          // 创建item元素
          let item = document.createElement('div');
          // 增加样式
          item.classList.add('item');
          // 增加变量
          item.style = '--i:' + index;
          grid.appendChild(item);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/styles/helper.scss";

  .container {
    background: #1f6f8b;
  }

  .grid {
    display: grid;
    grid-gap: 1vmin;
    grid-template-columns: repeat(10, 3vmin);
  }

  .item {
    width: 3vmin;
    height: 3vmin;
    background-color: slategrey;
    /* 函数 setps()， 让动画不再连贯的变化，而是呈现有步调的跳动变化*/
    animation: animate_color 1s steps(1, end) infinite,
               animate 0.6s linear infinite;
    animation-delay: calc(var(--i) * -0.066s);
  }

  @keyframes animate_color {
    0% {
      background-color: $color2;
    }
    33% {
      background-color: $color3;
    }
    66.66% {
      background-color: $color4;
    }
    100% {
      background-color: $color2;
    }
  }

  @keyframes animate {
    0% {
      transform: scale(1) translateY(0px);
    }
    33% {
      transform: scale(0.05) translateY(24px);
    }
    66.66% {
      transform: scale(0.05) translateY(-24px);
    }
    100% {
      transform: scale(1) translateY(0px);
    }
  }
</style>
