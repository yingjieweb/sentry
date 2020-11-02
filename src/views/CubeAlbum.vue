<template>
  <div class="container">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
  </div>
</template>

<script lang="js">
  export default {
    name: "CubeAlbum"
  }
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    .item {
      height: 50%;
      width: 50%;
      border: 1px solid red;
    }
  }
</style>
