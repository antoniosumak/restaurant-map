import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import ApiService from './Axios/ApiService';
import 'primeicons/primeicons.css';

const app = createApp(App);
ApiService.init(
  'https://travel-advisor.p.rapidapi.com/restaurants',
  '616640333amsh97428b5db2765d1p100d2cjsndc34c3b5e8db'
);
app.mount('#app');
