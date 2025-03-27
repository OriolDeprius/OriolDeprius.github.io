import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/home-view.vue';
import AboutView from '@/views/about-view.vue';
import HabilitiesView from '@/views/habilities-view.vue';
import ContactView from '@/views/contact-view.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/#about', component: AboutView },
  { path: '/#habilities', component: HabilitiesView },
  { path: '/#contact', component: ContactView },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      };
    }
    return { top: 0, behavior: 'smooth' };
  }
});

export default router;
