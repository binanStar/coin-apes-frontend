import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Reddit from '../views/Reddit.vue';
import NotFound from '../views/NotFound.vue';
import About from '../views/About.vue';
import Support from '../views/Support.vue';
import Privacy from '../views/Privacy.vue';
import Terms from '../views/Terms.vue';
import Cookies from '../views/Cookies.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Reddit',
    component: Reddit,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/support',
    name: 'Support',
    component: Support,
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy,
  },
  {
    path: '/terms',
    name: 'terms',
    component: Terms,
  },
  {
    path: '/cookies',
    name: 'cookies',
    component: Cookies,
  },
  { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
