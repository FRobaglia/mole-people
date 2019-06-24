<template>
<div class="player">
  <section class="player__info">
    <div class="info__goBack">
      <svg v-on:click="closeMenu()" class="arrow" aria-hidden="true"><use xlink:href="#arrow"></use></svg>
      <p>Continuer la lecture</p>
    </div>
    <p class="info__title"> {{ title }} </p>
    <p class="info__content info__content--text">{{ content1 }}</p>
    <p class="info__content info__content--subtitle">{{ subtitle1 }}</p>
    <p class="info__content info__content--text">{{ content2 }}</p>
    <p class="info__content info__content--subtitle">{{ subtitle2 }}</p>
    <p class="info__content info__content--text">{{ content3 }}</p>
    <p class="info__content info__content--text">{{ content4 }}</p>
    <div class="info__menu" v-on:click="openMenu()" >
    </div>
    <p></p>
  </section>
</div>  
</template>

<script>

import data from '../data.js'
import SliderItem from './SliderItem.vue';

export default {
  data() {
    return {
      title: 'Brooklyn',
      content1: 'Brooklyn vit depuis plus de 35 ans dans les tunnels de River Park. C’est l’une des habitantes les plus connus des souterrain de New York. Elle raconte comment elle a trouvé refuge dans un recoin des sous-sols, à l’abri de la police, des vols, de la lumière et du regard des gens',
      subtitle1: 'LA FEMME AUX CHATS',
      content2: 'Son surnom, Brooklyn le doit à son histoire, et à comment elle est arrivée ici. En effet, ce sont les chats érants de la ville qui lui ont montré le chemin jusqu’à son nouveau foyer, alors qu’elle dormait dans la rue. Elle leur donne son éternelle reconnaissance. Dans un coin de sa chambre il y a toujours une gamelle remplie de nourriture pour les 49 chats avec qui elle partagerait son tunnel.',
      subtitle2: '“J’ADORE CUISINER”',
      content3: 'Comme beaucoup de résidents des sous-terrain, Brooklyn cuisine sa propre nourriture. Il est très important pour eux de conserver des activités de leur passé dans ces ténèbres. C’est sans doute le meilleur moyens de garder l’esprit. Pour Brooklyn en tout cas c’est un passe temps et une veritable passion:',
      content4: '“ J’aimerais avoir une grande cuisine avec toutes sortes de couverts et d\'équipements “',
    };
  },
  mounted() {
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
  }
};
</script>
