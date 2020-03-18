<template>
  <div :class="component.container.className">
    <div :class="[component.container.type === 'limited' && 'container', component.container.noPadding && 'py-0']">
      <vnode-renderer :vnodes="$slots.default[0]"></vnode-renderer>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

const VnodeRenderer = {
  functional: true,
  render: (h, ctx) => ctx.props.vnodes
};

export default Vue.extend({
  name: 'landing-component-container',
  components: { VnodeRenderer },
  props: ['component']
});
</script>
