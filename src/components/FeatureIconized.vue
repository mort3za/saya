<template>
  <div class="d-flex flex-column" :data-aos="model.animation">
    <div class="d-flex align-center mb-8">
      <div class="mr-6">
        <v-img height="48" width="48" :src="`img/svg/${model.icon}.svg`" contain></v-img>
      </div>
      <h3 class="mb-0 background em-high has-no-background text-transform-uppercase">{{ model.title }}</h3>
    </div>
    <p class="mb-0 body-1 background em-medium has-no-background">{{ model.description }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'feature-iconized',
  props: ['model']
});
</script>

<style lang="scss">
@import '@/styles/utility.scss';
</style>
<style lang="scss" scoped>
//
</style>
