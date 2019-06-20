import Vue from 'vue';
import Router from 'vue-router';

import Slider from './components/Slider.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Slider,
    },
    {
      path: '*',
      redirect: { name: 'home' },
    },
  ],
});

export default router;
