<template>
  <v-row no-gutters="" class="py-9">
    <v-col cols="8">
      <h2 class="mb-0 text-transform-uppercase typography-h2" v-html="title"></h2>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: ['title']
});
</script>
