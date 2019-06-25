<template>
<div>
  <Navigation> </Navigation>
  Hello world
</div>
</template>

<script>

import data from '../data.js'
import Navigation from './Navigation.vue';

export default {
  data() {
    return {
      message: 'Hello world'
    };
  },
  components: {
    Navigation
  }
};
</script>
