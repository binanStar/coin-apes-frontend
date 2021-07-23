import { createPinia, PiniaPluginContext } from 'pinia';
import { createApp, ref } from 'vue';
import App from './App.vue';
import router from './router';
import './styles/index.css';
import './styles/multiselect.css';
import VueProgressBar from '@aacassandra/vue3-progressbar';
import VTooltipPlugin from 'v-tooltip';
import 'v-tooltip/dist/v-tooltip.css';
import { VueClipboard } from '@soerenmartius/vue3-clipboard';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import * as Sentry from '@sentry/vue';
import { Integrations } from '@sentry/tracing';

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
app.use(VueToast);
app.provide('toast', app.config.globalProperties.$toast);

// pinia
const pinia = createPinia();
pinia.use(({ store }) => {
  store.toast = app.config.globalProperties.$toast;
});
app.use(pinia);

// sentry
Sentry.init({
  app,
  dsn: 'https://809b226370af4a81870f7824180b8406@o442033.ingest.sentry.io/5875750',
  integrations: [
    new Integrations.BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: ['localhost', 'my-site-url.com', /^\//],
    }),
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

app.use(router);
app.use(VueProgressBar, options);
app.provide('progressBar', app.config.globalProperties.$Progress);
app.use(VueClipboard);
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
    'copy-tooltip': {
      $extend: 'tooltip',
      $resetCss: false,
      triggers: ['click'],
      autoHide: true,
      placement: 'bottom',
    },
  },
});
app.mount('#app');
