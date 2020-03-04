import Vue from 'vue';
import App from './App.vue';
import '@/connection/init';
import VueMeta from 'vue-meta';
import './registerServiceWorker';
import '@/mixins.global';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.use(VueMeta);

Vue.config.productionTip = false;

new Vue({
  // @ts-ignore
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app');
