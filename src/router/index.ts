import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Reddit from '../views/Reddit.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Reddit',
    component: Reddit,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
