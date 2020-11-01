<template>
  <div id="app">

    <el-container style="height: 100%">
      <el-aside style="background-color: salmon;">
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

<style>
  @import "~@/assets/styles/reset.scss";
  @import "~@/assets/styles/helper.scss";

  #app {
    height: 100vh;
    width: 100vw;
  }
</style>
