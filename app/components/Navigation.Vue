<template>
  <nav @mouseleave="mouseLeave">
    <div class="line">
      <div ref="indicator" class="indicator"> </div>
    </div>

    <div class="numbers">
      <ol>
        <li class="nav-item" @mouseover="mouseEnter(item.chapter)" v-for="item in navItems" :key="item.chapter"> 
          <router-link class="nav-link" :to="item.path"> 
            {{ item.chapter }}
          </router-link>
        </li>
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
  
  background: linear-gradient(269.55deg, #000000 4.63%, rgba(0, 0, 0, 0) 96.92%);

  .numbers {
    height: 40%;
    width: 60%;

    ol {
      height: 100%;
      justify-content: space-between;
      display: flex;
      flex-flow: column wrap;
      list-style: none;

      .nav-item {
        cursor: pointer;
        color: white;
        font-size: 24px;

        .nav-link {
          color: white;
          text-decoration: none;
        }
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
      navItems: [
        {
          chapter: 1,
          path: '/home'
        },
        {
          chapter: 2,
          path: '/map'
        },
        {
          chapter: 3,
          path: '/end'
        }
      ],
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
  },
  props: ['currentChapter'],
};

</script>