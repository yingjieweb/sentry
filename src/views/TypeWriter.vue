<template>
  <div class="type-writer">
    <div class="text">
      <span class="word">
        前端小白一只,希望自己能不忘初心,踏踏实实学点前端 👻
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

      /*for (let i=1; i<str.length; i++){
        setTimeout(() => {
          word.innerHTML = str.substr(0, i)
        }, (i-1) * 300)
      }*/

      //async await
      //1.封装一个函数
      function setText(t) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            word.innerHTML = t
            resolve()
          }, 300)
        })
      }

      //2.声明一个函数
      async function main(flag) {
        if (flag) {
          //遍历字符制I
          for (let i = 1; i <= str.length; i++) {
            await setText(str.substr(0, i))
          }
        } else {
          for (let i = str.length; i > 0; i--) {
            await setText(str.substr(0, i))
          }
        }
        setTimeout(() => {
          main(!flag)
        }, 1000)
      }
      main(1)
    }
  }
}
</script>

<style lang="scss" scoped>
.type-writer {
  width: 100%;
  height: 100%;
  padding: 20px;
  background: #091921;
  display: flex;
  justify-content: center;
  align-items: center;
  .text {
    .word {
      font-size: 48px;
      color: #ffffff;
    }
    .cursor {
      font-size: 48px;
      color: #fff;
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
  }
}
</style>
