<template>
  <div>
    <Navigation ref="nav" currentChapter=1></Navigation>
    <Header></Header>
    <Zoom></Zoom>
    <Scroll></Scroll>
    <Veterans></Veterans>
    <Testimony></Testimony>
    <Horizontal></Horizontal>
    <Deep></Deep>
  </div>
</template>

<script>
  import Navigation from './Navigation';
  import Header from './Header';
  import Scroll from './Scroll';
  import Veterans from './Veterans';
  import Testimony from './Testimony';
  import Horizontal from './Horizontal';
  import Deep from './Deep';
  import Zoom from './Zoom';

  export default {
    components: {
      Navigation,
      Header,
      Zoom,
      Scroll,
      Veterans,
      Testimony,
      Horizontal,
      Deep
    },
    data() {
      return {
      };
    },
    mounted: function () {
    //   let uri = 'http://localhost:4000/profiles';
    //   this.axios.get(uri).then(response => {
    //     let profiles = JSON.stringify(response.data);
    //     localStorage.setItem('profiles', profiles);
    //   });
    //   let zoom = document.querySelector('.zoom');
    //   let scroll
    //   let per
    //   let zoomTop = zoom.getBoundingClientRect().top + window.scrollY
    //   let nav = this.$refs.nav.$el;

    //   let body = document.querySelector('body');
    //   body.style.overflowY = 'hidden';
    //   nav.style.display = 'none'

    //   setTimeout(() => {
    //     nav.style.display = 'flex';
    //     body.style.overflowY = 'initial';
    //   }, 200);

    //   window.addEventListener("scroll", function() {
    //     scroll = window.scrollY - zoomTop;
    //     per = (scroll / zoomTop) * 100;

    //   if (
    //     window.scrollY > zoomTop &&
    //     window.scrollY < zoomTop + zoom.offsetHeight * 2
    //   ) {
    //     zoom.classList.add("zoom--isFixed");
    //     zoom.style.backgroundSize = per * 8 + window.innerWidth + "px";
    //   } else {
    //     zoom.classList.remove("zoom--isFixed");
    //   }

    //   if (window.scrollY >= 1440) {
    //   }
    //   })
    }
  };
</script>
