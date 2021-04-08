<template>
  <div class="sun-nav">
    <router-link to="/hypnosis-circle">
      <div class="sun-item">
        <i class="el-icon-help"></i>
      </div>
    </router-link>
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
        <i class="el-icon-time"></i>
      </div>
    </router-link>
    <router-link to="/type-writer">
      <div class="sun-item">
        <i class="el-icon-edit"></i>
      </div>
    </router-link>
    <router-link to="/rotate-petals">
      <div class="sun-item">
        <i class="el-icon-magic-stick"></i>
      </div>
    </router-link>
    <router-link to="/color-wave">
      <div class="sun-item">
        <i class="el-icon-s-grid"></i>
      </div>
    </router-link>
    <router-link to="/cartoon-fan">
      <div class="sun-item">
        <i class="el-icon-wind-power"></i>
      </div>
    </router-link>
    <router-link to="/naruto-eyes">
      <div class="sun-item">
        <i class="el-icon-view"></i>
      </div>
    </router-link>
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
