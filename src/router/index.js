import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import App1Container from '@/views/App1Container.vue';
import App2Container from '@/views/App2Container.vue';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/app1',
      name: 'app1',
      component: App1Container,
    },
    {
      path: '/app2',
      name: 'app2',
      component: App2Container,
    },
  ],
});
