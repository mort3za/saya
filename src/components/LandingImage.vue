<template>
  <v-img
    :data-aos="model.animation"
    :alt="model.image.alt"
    eager
    :src="transformCloudinaryUrl(model.image.src, 'f_auto')"
  ></v-img>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'landing-image',
  props: ['model']
});
</script>

<style lang="scss" scoped>
//
</style>
