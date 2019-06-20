<template>
<div>
  <ul ref="slider"> 
    <SliderItem v-for="people in peoples" v-bind:people="people" :key="people.name" >
    </SliderItem>    
  </ul>
  <div 
    @mouseover="hover.right = true; slideRight()"
    @mouseleave="hover.right = false"
    class="slide slide-right"> 
    </div>
    <div 
    @mouseover="hover.left = true; slideLeft()"
    @mouseleave="hover.left = false"
    class="slide slide-left"> 
    </div>
</div>
</template>

<style scoped>

ul {
  display: inline-flex;
  height: 100vh;
}

.slide {
  cursor: e-resize;
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100px;
  background-color: transparent;

}
.slide.slide-left {
  left: 0;
}

.slide.slide-right {
  right: 0;
}

</style>

<script>

import data from '../data.json'
import SliderItem from './SliderItem.vue';

export default {
  data() {
    return {
      translate: 0,
      hover: {
        left: false,
        right: false
      },
      peoples: data.peoples,
    };
  },
  methods: {
    slideRight() {
      let itemWidth = window.innerWidth / 4;
      let itemNumber = this.peoples.length;
      let maxTranslate = -(itemNumber - 4) * itemWidth + 1;
      if (this.hover.right && this.translate > maxTranslate) {
        this.translate -= 1;
        this.$refs.slider.style.transform = `translateX(${this.translate}px)`
        setTimeout(this.slideRight, )
      }
    },
    slideLeft() {
      if (this.hover.left && this.translate < 0) {
        this.translate += 1;
        this.$refs.slider.style.transform = `translateX(${this.translate}px)`
        setTimeout(this.slideLeft, 5)
      }
    }
  },
  components: {
    SliderItem
  }
};
</script>
