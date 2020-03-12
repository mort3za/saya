<template>
  <div class="primary em-high">
    <v-container class="py-9">
      <v-row no-gutters="">
        <v-col cols="8">
          <h2 class="mb-0 text-transform-uppercase typography-h2" v-html="title"></h2>
        </v-col>
      </v-row>
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
