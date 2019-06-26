import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Player from './components/Player.vue';
import Profile from './components/Profile.vue';
import Map from './components/Map.vue';
import Card from './components/Card.vue';
import Navigation from './components/Navigation.vue';

// CRUD
import Create from './components/Create.vue';
import Update from './components/Update.vue';
import Veteran from './components/Veteran.vue';

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
      path: '/veteran',
      name: 'veteran',
      component: Veteran,
    },
    {
      path: '*',
      redirect: { name: 'profile' },
    },
  ],
});

export default router;
