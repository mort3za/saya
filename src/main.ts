import Vue from 'vue';
import App from './App.vue';
import '@/connection/init';
import VueMeta from 'vue-meta';
import './registerServiceWorker';
import '@/mixins.global';
import router from './router';
import store from './store';
import Fragment from 'vue-fragment';
import vuetify from './plugins/vuetify';
import PortalVue from 'portal-vue';
import configureModerator from './store/store-moderator';

Vue.use(PortalVue);
Vue.use(Fragment.Plugin);
Vue.use(VueMeta);

Vue.config.productionTip = false;

async function main() {
  await configureModerator(store, router);
  new Vue({
    // @ts-ignore
    vuetify,
    router,
    store,
    render: h => h(App)
  }).$mount('#app');
}

main();
