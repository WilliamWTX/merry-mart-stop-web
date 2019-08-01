import Vue from 'vue';
import { Button } from 'element-ui';
import App from './App.vue';
import router from './router/index';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';

Vue.component(Button.name, Button);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
