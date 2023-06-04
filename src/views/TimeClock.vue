<template>
  <div class="time-clock">
    <div class="clock">
      <div class="hour" id="hour">
        <!--<div class="hr"></div>-->
      </div>
      <div class="minute" id="minute">
        <!--<div class="mn"></div>-->
      </div>
      <div class="second" id="second">
        <!--<div class="sc"></div>-->
      </div>
    </div>
  </div>
</template>

<script lang="js">
export default {
  name: "TimeClock",
  mounted() {
    this.getCurrentTime()
  },
  methods: {
    getCurrentTime() {
      let hour = document.getElementById('hour');
      let minute = document.getElementById('minute');
      let second = document.getElementById('second');

      setInterval(() => {
        let day = new Date()
        let hh = day.getHours() * 30
        let mn = day.getMinutes() * 6
        let sc = day.getSeconds() * 6
        hour.style.transform = `rotateZ(${(hh) + (mn/12)}deg)`
        minute.style.transform = `rotateZ(${mn}deg)`
        second.style.transform = `rotateZ(${sc}deg)`
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.time-clock {
  width: 100%;
  height: 100%;
  background: #091921;
  display: flex;
  justify-content: center;
  align-items: center;
  .clock {
    width: 350px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("../assets/images/clock/clock.png");
    background-size: cover;
    border: 4px solid #091921;
    border-radius: 50%;
    box-shadow: 0 -15px 15px rgba(255, 255, 255, 0.05),
      inset 0 -15px 15px rgba(255, 255, 255, 0.05),
      0 15px 15px rgba(0, 0, 0, 0.3), inset 0 15px 15px rgba(0, 0, 0, 0.3);
    &:before {
      content: "";
      position: absolute;
      width: 15px;
      height: 15px;
      background: #fff;
      border-radius: 50%;
      z-index: 10;
    }
    /* 钟的内轴 */
    .hour,
    .minute,
    .second {
      position: absolute;
      display: flex;
      justify-content: center;
    }
    .hour {
      width: 160px;
      height: 160px;
      &:before {
        content: "";
        position: absolute;
        width: 8px;
        height: 80px;
        background-color: #ff105e;
        border-radius: 6px 6px 0 0;
        z-index: 2;
      }
    }
    .minute {
      width: 190px;
      height: 190px;
      &:before {
        content: "";
        position: absolute;
        width: 4px;
        height: 90px;
        background-color: #ffffff;
        border-radius: 6px 6px 0 0;
        z-index: 3;
      }
    }
    .second {
      width: 230px;
      height: 230px;
      &:before {
        content: "";
        position: absolute;
        width: 2px;
        height: 150px;
        background-color: #ffffff;
        border-radius: 6px 6px 0 0;
        z-index: 4;
      }
    }
  }
}
</style>
