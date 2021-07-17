import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './styles/index.css';
import './styles/multiselect.css';
import VueProgressBar from '@aacassandra/vue3-progressbar';
import VTooltipPlugin from 'v-tooltip';
import 'v-tooltip/dist/v-tooltip.css';

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

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(VueProgressBar, options);
app.use(VTooltipPlugin, {
  themes: {
    'info-tooltip': {
      $extend: 'tooltip',
      $resetCss: true,
      triggers: ['click', 'hover'],
      delay: {
        show: 0,
        hide: 200,
      },
      autoHide: true,
      eagerMount: false,
      placement: 'bottom',
    },
  },
});
app.mount('#app');
