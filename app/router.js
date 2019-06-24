import Vue from 'vue';
import Router from 'vue-router';

import Slider from './components/Slider.vue';
import Home from './components/Home.vue';
import Player from './components/Player.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/player', 
      name: 'player', 
      component: Player,
    },
    {
      path: '*',
      redirect: { name: 'home' },
    },
  ],
});

export default router;
