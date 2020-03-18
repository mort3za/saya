<template>
  <component
    class="mb-0"
    :is="model.tagName"
    :class="[model.className, [$vuetify.breakpoint.smAndDown ? 'py-2' : 'py-10']]"
  >
    {{ model.body }}
  </component>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'landing-title',
  props: ['model']
});
</script>

<style lang="scss" scoped>
//
</style>
