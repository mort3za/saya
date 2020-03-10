<template>
  <div class="primary em-high">
    <v-container class="py-9">
      <h2 class="display-3 mb-0 text-transform-uppercase" v-html="title"></h2>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: ['title']
});
</script>

<style lang="scss" scoped>
//
</style>
