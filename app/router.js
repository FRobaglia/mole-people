import Vue from 'vue';
import Router from 'vue-router';

import Slider from './components/Slider.vue';
import Home from './components/Home.vue';
import Profile from './components/Profile.vue';
import Card from './components/Card.vue';
import Navigation from './components/Navigation.vue';
import Player from './components/Player.vue';

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
      name: 'player',
      component: Player,
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
      path: '*',
      redirect: { name: 'profile' },
    },
  ],
});

export default router;
