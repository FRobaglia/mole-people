import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Player from './components/Player.vue';
import Map from './components/Map.vue';
import Profile from './components/Profile.vue';
import Card from './components/Card.vue';
import Navigation from './components/Navigation.vue';
import Final from './components/Final.vue';

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
      path: '/videos/:id',
      name: 'player',
      component: Player,
    },
    {
      path: '/map',
      name: 'map',
      component: Map,
    },
    {
      path: '/final',
      name: 'final',
      component: Final,
    },
    {
      path: '*',
      redirect: { name: 'home' },
    },
  ],
});

export default router;
