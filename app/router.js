import Vue from 'vue';
import Router from 'vue-router';

import Slider from './components/Slider.vue';
import Home from './components/Home.vue';
import Player from './components/Player.vue';
import Profile from './components/Profile.vue';
import Card from './components/Card.vue';
import Navigation from './components/Navigation.vue';

// CRUD
import Create from './components/Create.vue';
import Update from './components/Update.vue';

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
      path: '/create',
      name: 'create',
      component: Create,
    },
    {
      path: '/update/:id',
      name: 'update',
      component: Update,
    },
    {
      path: '/player', 
      name: 'player', 
      component: Player,
    },
    {
      path: '*',
      redirect: { name: 'profile' },
    },
  ],
});

export default router;
