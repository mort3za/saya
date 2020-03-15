<template>
  <transition name="fade">
    <v-overlay :z-index="zindexSplashScreen" :value="overlay" color="primary" :opacity="1" class="text-center">
      <div>
        <transition name="fade">
          <v-img
            v-if="shouldShowLogo"
            eager
            class="logo"
            contain
            max-width="95vw"
            max-height="80vh"
            :src="
              transformCloudinaryUrl(
                'https://res.cloudinary.com/whynotearth/image/upload/v1583918123/Saya/splash-screen-onloading_zgtap9.png',
                'f_auto'
              )
            "
          ></v-img>
        </transition>
        <img
          class="d-none"
          @load="shouldShowLogo = true"
          :src="
            transformCloudinaryUrl(
              'https://res.cloudinary.com/whynotearth/image/upload/v1583918123/Saya/splash-screen-onloading_zgtap9.png',
              'f_auto'
            )
          "
        />
        <v-progress-circular
          indeterminate
          color="white"
          :size="24"
          :width="2"
          class="mt-8"
          :class="{ 'visibility-hidden': !shouldShowLoading }"
        ></v-progress-circular>
      </div>
    </v-overlay>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';
// @ts-ignore
import { zindexSplashScreen } from '@/styles/variables.scss';
const waitingUntilShowingLoading = 3000;
const visibilityTimeout = 6000;

export default Vue.extend({
  name: 'page-splash-screen',
  data: () => ({
    shouldShowLogo: false,
    zindexSplashScreen,
    visibilityTimedOut: false,
    shouldShowLoading: false
  }),
  watch: {
    overlay(newValue) {
      if (!newValue) {
        this.removePageClass();
      }
    }
  },
  mounted() {
    this.timers();
    this.addPageClass();
  },
  destroyed() {
    this.removePageClass();
  },
  methods: {
    addPageClass() {
      document.body.classList.add('overflow-hidden');
      document.documentElement.classList.add('overflow-hidden');
    },
    removePageClass() {
      document.body.classList.remove('overflow-hidden');
      document.documentElement.classList.remove('overflow-hidden');
    },
    timers() {
      const loadingTimer = setTimeout(() => {
        this.shouldShowLoading = true;
      }, waitingUntilShowingLoading);

      const visibilityTimer = setTimeout(() => {
        this.visibilityTimedOut = true;
      }, visibilityTimeout);

      this.$once('hook:destroyed', () => {
        clearTimeout(loadingTimer);
        clearTimeout(visibilityTimer);
      });
    }
  },
  computed: {
    overlay(): boolean {
      if (this.visibilityTimedOut) {
        return false;
      }
      return true;
    }
  }
});
</script>

<style lang="scss">
@import '@/styles/utility.scss';
</style>
