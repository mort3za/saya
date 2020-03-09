<template>
  <v-app class="wrapper" id="app">
    <router-view />
    <!-- <page-progress-bar-global v-if="shouldShowProgressBar"></page-progress-bar-global> -->
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { appTitle } from '@/constants/app';

export default Vue.extend({
  name: 'app',
  metaInfo: {
    title: appTitle
  },
  computed: {
    isSplashScreenVisible(): boolean {
      return this.$store.getters['loading/isSplashScreenVisible'];
    }
  }
});
</script>

<style lang="scss">
// global style
@import '@/styles/global-main.scss';
</style>
