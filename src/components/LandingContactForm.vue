<template>
  <contact-form></contact-form>
</template>

<script lang="ts">
import Vue from 'vue';
import ContactForm from '@/components/ContactForm.vue';
export default Vue.extend({
  name: 'landing-contact-form',
  components: { ContactForm }
});
</script>

<style lang="scss" scoped>
//
</style>
