<template>
  <div class="container">
    <div class="text">
      <span class="word">
        前端小白一只，希望自己能不忘初心，踏踏实实学点前端 👻
      </span>
      <span class="cursor">|</span>
    </div>
  </div>
</template>

<script lang="js">
  export default {
    name: "TypeWriter",
    mounted() {
      this.init()
    },
    methods: {
      init() {
        let str = '前端小白一只，希望自己能不忘初心，踏踏实实学点前端 👻'

        const word = document.querySelector('.word')
        for (let i=1; i<str.length; i++){
          setTimeout(() => {
            word.innerHTML = str.substr(0, i)
          }, (i-1) * 300)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    background: radial-gradient(#233, rgb(144, 158, 62));
  }

  .text .word {
    font-size: 48px;
    color: #ffffff;
  }
  .text .cursor {
    font-size: 48px;
    color: #000000;
    animation: flash 0.8s linear infinite;
  }

  @keyframes flash {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
