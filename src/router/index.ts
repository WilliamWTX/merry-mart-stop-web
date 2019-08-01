/** *
 * @author created by william
 * @author updated by william
 * @Created date is 2019/8/1 19:21
 * @Updated date is 2019/8/1 19:21
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '../views/home/Home.vue'),
    },
  ],
});

export default Router;
