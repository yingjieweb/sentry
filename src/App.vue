<template>
  <div id="app">

    <el-container style="height: 100%">
      <el-aside style="background-color: salmon; display: flex; justify-content: center; align-items: center;">
        <sun-nav></sun-nav>
      </el-aside>
      <el-main style="background-color:sandybrown;">
        <sun-body></sun-body>
      </el-main>
    </el-container>

  </div>
</template>

<script>
  import SunNav from "./views/SunNav"
  import SunBody from "./views/SunBody"

  export default {
    name: 'App',
    components: {
      'sun-nav': SunNav,
      'sun-body': SunBody
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
