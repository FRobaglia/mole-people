<template>
<vue-plyr>
    <div class="plyr__video-embed">
      <iframe
        src="https://player.vimeo.com/video/76979871?loop=false&byline=false&portrait=false&title=false&speed=true&transparent=0&gesture=media&autoplay=true"
        allowfullscreen autoplay allowtransparency allow="autoplay">
      </iframe>
    </div>
  </vue-plyr>
</template>

<style lang="scss">
  .plyr {
    width: 100vw;
    height: 100vh;

    iframe {
      width: 100%;
      height: 100%;
    }
  }
</style>


<script>

const Plyr = require('plyr');
export default {
  data() {
    return {
    };
  },
  mounted() {
    const player = new Plyr('#player');
  }
};
</script>
