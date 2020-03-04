<template>
  <v-app class="wrapper" id="app">
    <router-view />
    <!-- <page-progress-bar-global v-if="shouldShowProgressBar"></page-progress-bar-global> -->
    <transition name="fade">
      <page-splash-screen v-if="isSplashScreenVisible"></page-splash-screen>
    </transition>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import store from '@/store';
import { appTitle } from '@/constants/app';
const PageSplashScreen = () => import(/* webpackMode: "eager" */ '@/components/PageSplashScreen.vue');

export default Vue.extend({
  name: 'app',
  metaInfo: {
    title: appTitle
  },
  components: { PageSplashScreen },
  computed: {
    isSplashScreenVisible(): boolean {
      return (this as any).$store.getters['loading/isSplashScreenVisible'];
    }
  }
});
</script>

<style lang="scss">
// global style
@import '@/styles/global-main.scss';
</style>
