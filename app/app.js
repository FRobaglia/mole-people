import './assets/scss/styles.scss';
import Vue from 'vue';
import router from './router';
import AudioVisual from 'vue-audio-visual';

Vue.use(AudioVisual);

new Vue({ router: router }).$mount('#root');
