<template>
  <div class="sun-nav">
    <div class="sun-item"></div>
    <div class="sun-item"></div>
    <div class="sun-item"></div>
    <div class="sun-item"></div>
    <div class="sun-item"></div>
    <div class="sun-item"></div>
  </div>
</template>

<script>
  export default {
    name: "SunNav"
  }
</script>

<style lang="scss" scoped>
  .sun-nav {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .sun-item {
      height: 60px;
      width: 95%;
      margin: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 40px;
      color: lightblue;
      background-color: seagreen;
    }
  }
</style>
