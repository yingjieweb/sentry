<template>
  <div class="progress-container">
    <div class="progress_bar">
      <div class="progress_grow"></div>
    </div>
  </div>
</template>

<script lang="js">
export default {
  name: "ProgressBar"
}
</script>

<style lang="scss" scoped>
.progress-container {
  width: 100%;
  height: 100%;
  background-color: #091921;
  display: flex;
  align-items: center;
  justify-content: center;
  .progress_bar {
    width: 500px;
    height: 30px;
    border-radius: 5px;
    border: 2px solid snow;
    cursor: pointer;
    &:hover .progress_grow {
      width: 100%;
    }
    .progress_grow {
      width: 30%;
      height: 100%;
      background: repeating-linear-gradient(
        45deg,
        #eee 0px,
        #eee 15px,
        #3158c4 16px,
        #3158c4 30px
      );
      background-size: 42px 30px;
      background-position: 0, 0;
      animation: grow 1s linear infinite;
      transition: 1s;
    }
    @keyframes grow {
      0% {
        background-position: 0, 0;
      }
      100% {
        background-position: 42px, 0;
      }
    }
  }
}
</style>
