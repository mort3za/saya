<template>
  <div class="primary em-high">
    <v-container class="py-9" data-aos="fade-up">
      <v-row no-gutters="">
        <v-col cols="8">
          <h2 class="display-3 mb-0 text-transform-uppercase" v-html="title"></h2>
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
