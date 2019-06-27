<template>
  <div>
    <audio class="backgroundSound" src="../assets/sounds/home-sound.mp3" loop></audio>
    <audio class="firstSound" src="../assets/sounds/onoublielehaut.mp3"></audio>
    <audio class="secondSound" src="../assets/sounds/veteran.mp3"></audio>
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
      let audioBackground = document.querySelector('.backgroundSound')
      let firstSound = document.querySelector('.firstSound')
      let secondSound =document.querySelector('.secondSound')
      audioBackground.volume = 0.3;

      let checker = false;
      let checker2 =  false;
      window.addEventListener('scroll', function() {
        if (window.scrollY === window.innerHeight) {
          audioBackground.play();
        }
        if (window.scrollY >= window.innerHeight*4) {
          if (!checker2) {
            secondSound.play();
          }
          checker2 = true;
        }
        if (window.scrollY >= window.innerHeight*5.5) {
          if (!checker) {
            firstSound.play();
          }
          checker = true;
        }
        console.log(window.scrollY);
      })




      let uri = 'http://localhost:4000/profiles';
      this.axios.get(uri).then(response => {
        let profiles = JSON.stringify(response.data);
        localStorage.setItem('profiles', profiles);
      });

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


    }
  };
</script>
