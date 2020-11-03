<template>
  <div class="sun-nav">
    <router-link to="/spacecraft">
      <div class="sun-item">
        <i class="el-icon-s-promotion"></i>
      </div>
    </router-link>
    <router-link to="/cube-album">
      <div class="sun-item">
        <i class="el-icon-menu"></i>
      </div>
    </router-link>
    <router-link to="/progress-bar">
      <div class="sun-item">
        <i class="el-icon-s-unfold"></i>
      </div>
    </router-link>
    <router-link to="/time-clock">
      <div class="sun-item">
        <i class="el-icon-loading"></i>
      </div>
    </router-link>
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

    a {
      width: 100%;
      cursor: pointer;
    }

    .sun-item {
      border: 1px solid red;
      height: 60px;
      width: 95%;
      margin: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: seagreen;

      &:hover {
        i {
          transform: translateX(50px) rotate(360deg) scale(1.2);
          transition: all 0.8s;
        }
      }

      i {
        font-size: 40px;
        color: lightblue;
      }
    }
  }
</style>
