<template>
  <transition name="fade">
    <!-- overlay -->
    <v-overlay
      :z-index="zindexSplashScreen"
      :value="overlay"
      color="primary"
      :opacity="1"
      class="splash-screen text-center"
    >
      <div>
        <img
          class="splash-logo mb-8"
          src="https://res.cloudinary.com/whynotearth/image/upload/v1584099679/Saya/Logo%20with%20lines.svg"
          :alt="title"
        />

        <h1 class="splash-screen--title display-3 font-weight-bold secondary--text mb-12">{{ title }}</h1>
        <p class="mb-0 body-1 secondary--text mb-8">{{ slogan }}</p>
        <v-progress-circular
          indeterminate
          color="secondary"
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
    title: (process.env.VUE_APP_PROJECT_NAME_SHORT as string).toLowerCase(),
    slogan: process.env.VUE_APP_PROJECT_SLOGAN,
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

<style lang="scss" scoped>
.splash-screen ::v-deep {
  .splash-logo {
    width: rem(266px);
    max-width: 80vw;
  }
  .splash-screen--title {
    line-height: rem(64px);
  }
}
</style>
