<template>
  <markdown-block :content="model.body"></markdown-block>
</template>

<script lang="ts">
import Vue from 'vue';
import MarkdownBlock from '@/components/MarkdownBlock.vue';
export default Vue.extend({
  name: 'landing-markdown',
  components: { MarkdownBlock },
  props: ['model']
});
</script>

<style lang="scss" scoped>
//
</style>
