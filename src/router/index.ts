import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Reddit from '../views/Reddit.vue';
import NotFound from '../views/NotFound.vue';
import About from '../views/About.vue';
import Support from '../views/Support.vue';

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
  { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
