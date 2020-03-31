<template>
  <page-footer :social-items="model.socialItems"></page-footer>
</template>

<script lang="ts">
import Vue from 'vue';
import PageFooter from '@/components/PageFooter.vue';
export default Vue.extend({
  name: 'landing-page-footer',
  components: { PageFooter },
  props: ['model']
});
</script>

<style lang="scss" scoped>
//
</style>
