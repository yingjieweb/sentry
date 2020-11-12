<template>
  <div id="app">

    <el-container style="height: 100%">
      <el-aside class="aside" style="background-color: salmon;">
        <SunNav></SunNav>
      </el-aside>
      <el-main style="background-color:sandybrown;">
        <SunBody></SunBody>
      </el-main>
    </el-container>

  </div>
</template>

<script>
  import SunNav from "./components/SunNav"
  import SunBody from "./components/SunBody"

  export default {
    name: 'App',
    components: {
      SunNav,
      SunBody
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/styles/reset.scss";
  @import "~@/assets/styles/helper.scss";

  #app {
    height: 100vh;
    width: 100vw;
  }

  @media only screen and (max-width: 500px) {
    .aside {
      display: none;
    }
  }
</style>
