<template>
  <div class="sun-body">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "SunBody"
  }
</script>

<style lang="scss" scoped>
  .sun-body {
    height: 100%;
    border: 1px solid seagreen;
  }
</style>
