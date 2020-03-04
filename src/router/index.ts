import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';

const routes = [
  // {
  //   path: '/testing',
  //   component: () => import(/* webpackChunkName: "Test" */ '@/views/KitchenSink.vue')
  // },
  {
    name: 'home',
    path: '/',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/HomePage.vue')
  },
  {
    path: '/*/',
    redirect: '/'
  }
];

Vue.use(VueRouter);

let unsubscribeStore: any = null;
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return new Promise(resolve => {
      const loading = store.getters['loading/isLoading'];
      if (loading) {
        unsubscribeStore = store.subscribe((mutation, state) => {
          if (mutation.type === 'loading/loading' && store.getters['loading/isLoading'] === false) {
            resolve(savedPosition || { x: 0, y: 0 });
            unsubscribeStore();
          }
        });
      } else {
        resolve(savedPosition || { x: 0, y: 0 });
      }
    });
  }
});

// Auth guard
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const isAuthenticated = store.getters['auth/isAuthenticated'];
    if (isAuthenticated) {
      next();
    } else {
      // if we have /login later, route to login page
      next('/');
    }
  } else {
    next();
  }
});

// set/unset loading
router.beforeResolve((to, from, next) => {
  store.commit('loading/loading', true);
  next();
});

router.afterEach((to, from) => {
  const alwaysShowLoadingAtFirst = 700;
  setTimeout(() => {
    store.commit('loading/loading', false);
  }, alwaysShowLoadingAtFirst);
});

export default router;
