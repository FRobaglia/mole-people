<template>
  <div>
    <First></First>
    <Navigation></Navigation>
    <Scroll></Scroll>
  </div>
</template>

<script>
import First from './First';
import Navigation from './Navigation';
import  Scroll from './Scroll'
import Veteran from './Veteran'

export default {
  components: {
    First,
    Navigation,
    Scroll,
    Veteran
  }
}
</script>
