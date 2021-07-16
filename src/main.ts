import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './styles/index.css';
import './styles/multiselect.css';
import VueProgressBar from '@aacassandra/vue3-progressbar';

const options = {
  color: '#7067CF',
  failedColor: '#D62828',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300,
  },
  autoRevert: true,
  location: 'top',
  inverse: false,
};

export default createApp(App)
  .use(createPinia())
  .use(router)
  .use(VueProgressBar, options)
  .mount('#app');
