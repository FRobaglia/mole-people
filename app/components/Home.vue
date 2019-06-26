<template>
  <div>
    <First></First>
    <Navigation></Navigation>
    <Scroll></Scroll>
    <Veteran2></Veteran2>
    <Third></Third>
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
      let zoom = document.querySelector('.zoom');
      let scroll
      let per
      let zoomTop = zoom.getBoundingClientRect().top + window.scrollY

    window.addEventListener("scroll", function() {
      scroll = window.scrollY - zoomTop;
      per = (scroll / zoomTop) * 100;

      console.log(window.scrollY);

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
        console.log("e");
      }
      })
    }
  };
</script>
