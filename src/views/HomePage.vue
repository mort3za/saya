<template>
  <div>
    <!-- <page-header></page-header> -->
    <div class="page">
      <div class="page-content">
        <div class="page-home--content">
          <div class="home--hero">
            <h1 class="pt-30 pb-20 text-center" :class="[$vuetify.breakpoint.smAndUp ? 'display-4' : 'display-3']">Saya</h1>
          </div>
        </div>
      </div>
      <!-- <page-footer></page-footer> -->
    </div>
  </div>
</template>

<script lang="ts">
// const PageFooter = () => import(/* webpackMode: "eager" */ '@/components/PageFooter.vue');
// const MarkdownBlock = () => import(/* webpackMode: "eager" */ '@/components/MarkdownBlock.vue');

export default {
  name: 'home-page',
  components: {
    // PageFooter
    // PageHeader
    // MarkdownBlock
  },
  methods: {
    hideSplashScreen() {
      (this as any).$store.commit('loading/updateIsSplashScreenVisible', false);
    }
  }
};
</script>

<style lang="scss">
@import '@/styles/utility.scss';
</style>
<style lang="scss" scoped>
.home--hero {
  background: map-get($red, 'base');
}
</style>
