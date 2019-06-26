<template>
  <nav @mouseleave="mouseLeave">
    <div class="line">
      <div ref="indicator" class="indicator"> </div>
    </div>

    <div class="numbers">
      <ol>
        <li  @mouseover="mouseEnter(i)" v-for="i in 3" :key="i"> {{ i }} </li>
      </ol>
    </div>
  </nav>
</template>

<style lang='scss' scoped>

body {
  background: black;
}

nav {
  padding-top: 30vh;
  font-weight: lighter;
  justify-content: space-between;
  display: flex;
  width: 5%;
  height: 100vh;
  position: fixed;
  z-index: 10;
  right: 0;
  top: 0;
  background: linear-gradient(270deg, #000000 20%, rgba(0, 0, 0, 0) 75%);

  .numbers {
    height: 40%;
    width: 60%;

    ol {
      height: 100%;
      justify-content: space-between;
      display: flex;
      flex-flow: column wrap;
      list-style: none;

      li {
        cursor: pointer;
        color: white;
        font-size: 24px;
      }
    }
  }
  
  .line {
    position: relative;
    width: 1px;
    height: 40%;
    border-radius: 10px;

    .indicator {
      transition: top .5s;
      height: 50px;
      position: absolute;
      top: -12.5px;
      border-radius: 1px;
      left: -25%;
      width: 150%;
      background: white;
    }
  }
}

</style>

<script>

export default {
  data() {
    return {
      currentChapter: 1,
      positions: ['-12.5px', 'calc(50% - 25px)', 'calc(100% - 37.5px']
    }
  },
  methods: {
    mouseEnter(i) {
      let indicator = this.$refs.indicator;
      indicator.style.top = this.positions[i - 1];
    },
    mouseLeave() {
      let indicator = this.$refs.indicator;
      indicator.style.top = this.positions[this.currentChapter - 1];
    }
  }
};

</script>