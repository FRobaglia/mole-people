<template>
  <div>
    <div class="teaser">
      <video src="../assets/video/videoIntro.mp4" autoplay></video>
      <h1>QUAND LA VIE SE TERRE</h1>
      <h2>CHAPITRE 1 - NEW YORK</h2>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      };
    },
    mounted: function () {
      // let zoom = document.querySelector('.zoom');
      // let scroll;
      // let per;
      // let hidden = document.querySelector('.hidden');
      // let zoomTop = zoom.getBoundingClientRect().top + window.scrollY;

      // window.addEventListener('scroll', function () {

      //   scroll = window.scrollY - zoomTop
      //   per = scroll / zoomTop * 100

      //   if (window.scrollY > zoomTop && window.scrollY < zoomTop + zoom.offsetHeight * 2) {
      //     zoom.classList.add('zoom--isFixed')
      //     hidden.style.display = 'block';
      //     zoom.style.backgroundSize = per * 8 +window.innerWidth +'px'

      //   } else {
      //     zoom.classList.remove('zoom--isFixed')
      //     hidden.style.display = 'none';
      //   }
      // })
    }
  };
</script>