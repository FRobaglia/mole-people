<template>
  <div>
    <First></First>
    <Navigation></Navigation>
    <Scroll></Scroll>
    <Veteran2></Veteran2>
    <Third></Third>

    <div class="test"></div>
  </div>
</template>

<script>
import First from './First';
import Navigation from './Navigation';
import Scroll from './Scroll'
import Veteran2 from './Veteran2'
import Third from './Third'

export default {
  components: {
    First,
    Navigation,
    Scroll,
    Veteran2, 
    Third
  }
}
</script>
