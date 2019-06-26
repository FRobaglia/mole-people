<template>
  <div>
    <First></First>
    <Navigation ref="nav" currentChapter=1></Navigation>
    <Scroll></Scroll>
    <Veteran2></Veteran2>
    <Third></Third>
    <Horizontal></Horizontal>
    <Abime></Abime>
  </div>
</template>

<script>
  import First from './First';
  import Navigation from './Navigation';
  import Scroll from './Scroll';
  import Veteran2 from './Veteran2';
  import Third from './Third';
  import Horizontal from './Horizontal';
  import Abime from './Abime';

  export default {
    components: {
      First,
      Navigation,
      Scroll,
      Veteran2, 
      Third,
      Horizontal,
      Abime
    },
    data() {
      return {
      };
    },
    mounted: function () {
      let uri = 'http://localhost:4000/profiles';
      this.axios.get(uri).then(response => {
        let profiles = JSON.stringify(response.data);
        localStorage.setItem('profiles', profiles);
      });

      console.log(JSON.parse(localStorage.getItem('profiles')));
      let zoom = document.querySelector('.zoom');
      let scroll
      let per
      let zoomTop = zoom.getBoundingClientRect().top + window.scrollY
      let nav = this.$refs.nav.$el;

      let body = document.querySelector('body');
      let skipButton = document.querySelector('.skip');

      setTimeout(() => {
        skipButton.style.right = '48px';
      }, 3000);
      body.style.overflowY = 'hidden';
      nav.style.display = 'none'

      setTimeout(() => {
        skipButton.style.opacity = '0';
        nav.style.display = 'flex';
        body.style.overflowY = 'initial';
      }, 20000);

      window.addEventListener("scroll", function() {
        scroll = window.scrollY - zoomTop;
        per = (scroll / zoomTop) * 100;

      // console.log(window.scrollY);

      if (
        window.scrollY > zoomTop &&
        window.scrollY < zoomTop + zoom.offsetHeight * 2
      ) {
        zoom.classList.add("zoom--isFixed");
        zoom.style.backgroundSize = per * 8 + window.innerWidth + "px";
      } else {
        zoom.classList.remove("zoom--isFixed");
      }

      if (window.scrollY >= 1440) {
        // console.log("e");
      }
      })
    }
  };
</script>
