import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import ApiService from './Axios/ApiService';

const app = createApp(App);
ApiService.init(
  'https://travel-advisor.p.rapidapi.com/restaurants',
  'd39b27b18fmsh0b2de00c3bd69c2p1d23d2jsnef78bd882591'
);
app.mount('#app');
