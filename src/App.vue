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
  @import "assets/styles/normalize.css";

  #app {
    height: 100vh;
    width: 100vw;
  }
</style>
