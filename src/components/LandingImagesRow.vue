<template>
  <v-row>
    <v-col v-for="image in model.images" :key="image.id">
      <v-img
        :data-aos="model.animation"
        :alt="image.alt"
        eager
        :src="transformCloudinaryUrl(image.src, 'f_auto')"
      ></v-img>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'landing-images-row',
  props: ['model']
});
</script>

<style lang="scss" scoped>
//
</style>
