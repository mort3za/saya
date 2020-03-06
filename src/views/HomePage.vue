<template>
  <div>
    <!-- <page-header></page-header> -->
    <div class="page">
      <div class="page-content">
        <div class="page-home--content">
          this is homepage
        </div>
      </div>
      <page-footer></page-footer>
    </div>
  </div>
</template>

<script lang="ts">
const PageFooter = () => import(/* webpackMode: "eager" */ '@/components/PageFooter.vue');
// const MarkdownBlock = () => import(/* webpackMode: "eager" */ '@/components/MarkdownBlock.vue');
// const PageHeader = () => import(/* webpackMode: "eager" */ '@/components/PageHeader.vue');

export default {
  name: 'home-page',
  components: {
    PageFooter
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
<style lang="scss" scoped></style>
