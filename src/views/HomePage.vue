<template>
  <div>
    <!-- <page-header></page-header> -->
    <div class="page">
      <div class="page-content">
        <div class="page-home--content">
          <div class="primary em-high">
            <v-container class="pt-30 pb-10">
              <h1 class="pb-10 mb-0" :class="[$vuetify.breakpoint.smAndUp ? 'display-4' : 'display-3']">
                Saya
              </h1>
              <p class="body-1 py-8">
                Saya is the premier hotel software suite for Vietnam. Saya combines an end-to-end hotel management
                system with an AI-powered marketing and customer data platform designed to maximise your bookings.
              </p>
            </v-container>
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
  }
};
</script>

<style lang="scss">
@import '@/styles/utility.scss';
</style>
<style lang="scss" scoped></style>
