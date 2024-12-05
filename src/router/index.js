import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import Page2 from '../views/Page2.vue';
import Page3 from '../views/Page3.vue';

const routes = [
  { path: '/', component: LandingPage },
  { path: '/page2', component: Page2 },
  { path: '/page3', component: Page3 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
