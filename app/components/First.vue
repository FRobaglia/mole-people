<template>
  <div>

    <div class="video">
      <video src="../assets/video/videoIntro.mp4" autoplay></video>
      <h1>QUAND LA VIE SE TERRE</h1>
      <h2>CHAPITRE 1 - NEW YORK</h2>
    </div>

    <div class="zoom"></div>

    <div style="height: 100vh; z-index: 10; background: rgba(0,0,0,0);">
      <div class="zoom__desc">
        <h1>Manhattan</h1>
        <h2>NEW YORK</h2>
        <p class="zoom__content">" lls ont enlevé les bancs publics pour qu'on ne dorme pas dessus. Où voulez-vous qu'ils dorment, les sans-abris, s'ils ne descendent pas dans les tunnels ? "
        </p>
      </div>
    </div>

    <div class="hidden" style="height: 100vh; z-index: 10; background: rgba(0,0,0,0); position: relative;">
      <div class="zoom__final">
        <p>L’île de Manhattan cache sous ses rues un labyrinthe de couloirs sombres et humides. Dans, habités par quelques invisibles de la société.</p>
      </div>
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
      let zoom = document.querySelector('.zoom');
      let scroll
      let per
      let hidden = document.querySelector('.hidden')
      let zoomTop = zoom.getBoundingClientRect().top + window.scrollY

      window.addEventListener('scroll', function () {

        scroll = window.scrollY - zoomTop
        per = scroll / zoomTop * 100

        if (window.scrollY > zoomTop && window.scrollY < zoomTop + zoom.offsetHeight * 2) {
          zoom.classList.add('zoom--isFixed')
          hidden.style.display = 'block';
          zoom.style.backgroundSize = per * 8 +window.innerWidth +'px'

        } else {

          zoom.classList.remove('zoom--isFixed')
          hidden.style.display = 'none';

        }
      })
    }
  };
</script>