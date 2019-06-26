<template>
<div :key="profile._id" class="player">
<Navigation> </Navigation>
  <vue-plyr :options="{
    controls: [
    'play',
    'captions',
    'progress',
  ] }" ref="plyr">
    <div v-if="profile" class="plyr__video-embed">
      <iframe v-if="profile.vimeoId"
        :src="`https://player.vimeo.com/video/${profile.vimeoId}?loop=true&byline=false&portrait=false&title=false&speed=true&transparent=0&gesture=media&autoplay=true`"
        allowfullscreen autoplay allowtransparency allow="autoplay">
      </iframe>
    </div>
  </vue-plyr>
  <section class="player__info">
    <div v-on:click="closeMenu()" class="info__goBack">
      <svg class="arrow" aria-hidden="true"><use xlink:href="#arrow"></use></svg>
      <p>Continuer la lecture</p>
    </div>
    <p class="info__title"> {{ profile.name }} </p>
    <p class="info__content info__content--text">{{ profile.intro }}</p>
    <p class="info__content info__content--subtitle">{{ profile.firstArticleTitle }}</p>
    <p class="info__content info__content--text">{{ profile.firstArticleContent }}</p>
    <p class="info__content info__content--subtitle">{{ profile.secondArticleTitle }}</p>
    <p class="info__content info__content--text">{{ profile.secondArticleContent }}</p>
    <p class="info__content info__content--text">{{ profile.outside }}</p>
    <div class="info__menu" v-on:click="openMenu()" >
    </div>
    <p></p>
  </section>
</div>  
</template>


<style lang="scss">
  .plyr {
    width: 100vw;
    height: 100vh;
  }
</style>

<script>

import data from '../data.js'
import Navigation from './Navigation.vue';


export default {
  data() {
    return {
      videosLeftToWatch: [],
      profile: {}
    };
  },
  mounted() {
    let uri = `http://localhost:4000/profiles/getProfile/${this.$route.params.id}`;
      this.axios.get(uri).then(response => {
        this.profile = response.data;
      });

    this.videosLeftToWatch = JSON.parse(localStorage.getItem('profiles'));
    setTimeout(() => {

      let index = this.videosLeftToWatch.findIndex(profile => profile._id == this.$route.params.id);

      console.log(index);

      console.log(this.videosLeftToWatch.length);

      if (Number.isInteger(index)) {
        this.videosLeftToWatch.splice(index, 1)
      }

      localStorage.setItem('profiles', JSON.stringify(this.videosLeftToWatch));
      
      console.log(this.videosLeftToWatch.length);

      if (this.videosLeftToWatch.length > 0) {
        let nextVideo = JSON.parse(localStorage.getItem('profiles'))[0];
        this.profile = nextVideo;
        vm.$forceUpdate();
        this.$router.push({name: 'player', params: { id: nextVideo._id }})
      }

    }, 2000);
  },
  computed: {
    player () { return this.$refs.plyr.player }
  },
  methods: {
    openMenu() {
      let menu = document.querySelector('.info__menu'), 
          playerinfo = document.querySelector('.player__info');
          
      menu.classList.add('is-open');
      playerinfo.classList.add('is-open');
    }, 
    closeMenu() {
      let menu = document.querySelector('.info__menu'), 
          playerinfo = document.querySelector('.player__info'),
          goBack = document.querySelector('.info__goBack');
          
      menu.classList.remove('is-open');
      playerinfo.classList.remove('is-open');
    }
  },
  components: {
    Navigation
  }
};

</script>
