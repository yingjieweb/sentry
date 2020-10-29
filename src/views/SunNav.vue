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
    width: 80%;
    background-color: darkkhaki;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .sun-item {
      height: 100px;
      width: 100px;
      background-color: seagreen;
      margin: 10px;
    }
  }
</style>
