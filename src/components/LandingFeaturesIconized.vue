<template>
  <v-row>
    <v-col cols="12" sm="4" v-for="item in model.items" :key="item.id" class="py-10">
      <feature-iconized :data-aos="model.animation" :model="item"></feature-iconized>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import FeatureIconized from '@/components/FeatureIconized.vue';

export default Vue.extend({
  name: 'landing-features-iconized',
  components: { FeatureIconized },
  props: ['model']
});
</script>

<style lang="scss" scoped>
//
</style>
