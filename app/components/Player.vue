<template>
<div :key="profile._id" class="player">
<Navigation currentChapter=2> </Navigation>
  <vue-plyr :options="{
    controls: [
    'play',
    'captions',
    'progress',
  ] }" ref="plyr">
    <div v-if="profile" class="plyr__video-embed">
      <!-- <iframe v-if="profile.vimeoId"
        :src="`https://player.vimeo.com/video/${profile.vimeoId}?byline=false&portrait=false&title=false&speed=true&transparent=0&gesture=media&autoplay=true`"
        allowfullscreen autoplay allowtransparency allow="autoplay">
      </iframe> -->
      <iframe 
        :src="`https://player.vimeo.com/video/344272014?byline=false&portrait=false&title=false&speed=true&transparent=0&gesture=media&autoplay=true`"
        allowfullscreen autoplay allowtransparency allow="autoplay">
      </iframe>
    </div>
  </vue-plyr>
  <section class="player__info">
    <div v-on:click="closeMenu()" class="info__goBack">
      <svg class="arrow" aria-hidden="true"><use xlink:href="#arrow"></use></svg>
      <p class="continue">Continuer la lecture</p>
    </div>
      <!-- <p class="info__title"> {{ profile.name }} </p>
      <p class="info__content info__content--text">{{ profile.intro }}</p>
      <p class="info__content info__content--subtitle">{{ profile.firstArticleTitle }}</p>
      <p class="info__content info__content--text">{{ profile.firstArticleContent }}</p>
      <p class="info__content info__content--subtitle">{{ profile.secondArticleTitle }}</p>
      <p class="info__content info__content--text">{{ profile.secondArticleContent }}</p>
      <p class="info__content info__content--text">{{ profile.outside }}</p> -->
      <p class="info__title"> BROOKLYN </p>
      <p class="info__content info__content--text">Brooklyn vit depuis plus de 35 ans dans les tunnels de River Park. C’est l’une des habitantes les plus connus des souterrain de New York. Elle raconte comment elle a trouvé refuge dans un recoin des sous-sols, à l’abri de la police, des vols, de la lumière et du regard des gens.</p>
      <p class="info__content info__content--subtitle">LA FEMME AUX CHATS</p>
      <p class="info__content info__content--text">Son surnom, Brooklyn le doit à son histoire, et à comment elle est arrivée ici. En effet, ce sont les chats érants de la ville qui lui ont montré le chemin jusqu’à son nouveau foyer, alors qu’elle dormait dans la rue. Elle leur donne son éternelle reconnaissance. Dans un coin de sa chambre il y a toujours une gamelle remplie de nourriture pour les 49 chats avec qui elle partagerait son tunnel.</p>
      <p class="info__content info__content--subtitle">“J’ADORE CUISINER”</p>
      <p class="info__content info__content--text">Comme beaucoup de résidents des sous-terrain, Brooklyn cuisine sa propre nourriture. Il est très important pour eux de conserver des activités de leur passé dans ces ténèbres. C’est sans doute le meilleur moyens de garder l’esprit. Pour Brooklyn en tout cas c’est un passe temps et une veritable passion.</p>
      <p class="info__content info__content--text">“ J’aimerais avoir une grande cuisine avec toutes sortes de couverts et d'équipements “</p>
    <div class="info__menu" v-on:click="openMenu()" >
      <div class="info__menu--circle">
      </div>
      <p>?</p>
    </div>
    <!-- <svg v-on:click="openMenu()" class="info__menu" aria-hidden="true"><use xlink:href="#infomenu"></use></svg> -->
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
      this.player.embed.on('ended', this.onVideoEnd);
      this.player.toggleCaptions(true);
    }, 2000);
  },
  computed: {
    player () { return this.$refs.plyr.player }
  },
  methods: {
    onVideoEnd() {
      let index = this.videosLeftToWatch.findIndex(profile => profile._id == this.$route.params.id);

      if (Number.isInteger(index)) {
        this.videosLeftToWatch.splice(index, 1)
      }

      localStorage.setItem('profiles', JSON.stringify(this.videosLeftToWatch));

      if (this.videosLeftToWatch.length > 0) {
        let nextVideo = JSON.parse(localStorage.getItem('profiles'))[0];
        this.profile = nextVideo;
        this.$forceUpdate();
        this.$router.push({name: 'player', params: { id: nextVideo._id }})
      } else {
        this.$router.push({name: '/home'});
      }
    },
    openMenu() {
      let menu = document.querySelector('.info__menu'), 
          playerinfo = document.querySelector('.player__info');
          
      menu.classList.add('is-open');
      playerinfo.classList.add('is-open');

      this.player.pause();
    }, 
    closeMenu() {
      let menu = document.querySelector('.info__menu'), 
          playerinfo = document.querySelector('.player__info'),
          goBack = document.querySelector('.info__goBack');
          
      menu.classList.remove('is-open');
      playerinfo.classList.remove('is-open');

      this.player.play();
    }
  },
  components: {
    Navigation
  }
};

</script>
