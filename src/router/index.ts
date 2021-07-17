import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Reddit from '../views/Reddit.vue';
import NotFound from '../views/NotFound.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Reddit',
    component: Reddit,
  },
  { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
