<template>
  <banner-text-full :title="model.body"></banner-text-full>
</template>

<script lang="ts">
import Vue from 'vue';
import BannerTextFull from '@/components/BannerTextFull.vue';

export default Vue.extend({
  name: 'landing-banner-text',
  components: { BannerTextFull },
  props: ['model']
});
</script>

<style lang="scss" scoped>
//
</style>
