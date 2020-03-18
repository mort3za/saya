<template>
  <div class="landing-spacer">
    <!-- responsive -->
    <template v-if="model.sizes">
      <div v-for="(size, mediaQuery) in model.sizes" :key="mediaQuery">
        <div v-if="$vuetify.breakpoint[mediaQuery]" :style="{ height: `${size}px` }"></div>
      </div>
    </template>

    <!-- non-responsive -->
    <div v-else :style="{ height: `${model.size}px` }"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'landing-spacer',
  props: ['model']
});
</script>

<style lang="scss" scoped>
//
</style>
