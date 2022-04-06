import Vue from 'vue';
import VueRouter from 'vue-router';
import Testpage from '../components/Testpage.vue';
import HelloWorld from '../components/HelloWorld.vue';


const routes = [
  {
    path: '/',
    name: 'Index',
    component: HelloWorld
  },
  {
    path: '/test',
    name: 'Testpage',
    component: Testpage
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

Vue.use(VueRouter);

export default router;
