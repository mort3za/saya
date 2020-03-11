<template>
  <v-form name="Contact" method="post" netlify ref="form" action="/thanks" v-model="valid" data-netlify="true">
    <input type="hidden" name="form-name" value="Contact" />

    <p class="mb-6 body-1">We really want to hear from you...</p>

    <v-text-field v-model="name" outlined label="Name" name="name" color="light" required dark :rules="nameRules">
      <v-icon slot="append" color="light">person</v-icon>
    </v-text-field>

    <v-text-field v-model="email" outlined color="light" label="E-Mail" name="email" required dark :rules="emailRules">
      <v-icon slot="append" color="light">email</v-icon>
    </v-text-field>

    <v-textarea
      outlined
      class="mb-6"
      rows="5"
      hide-details
      dark
      v-model="message"
      color="light"
      name="message"
      label="Message"
      no-resize
    >
    </v-textarea>

    <div class="text-center">
      <v-btn class="mx-auto px-10" height="40" color="primary" dark type="submit" :disabled="!valid">
        Send Message
      </v-btn>
    </div>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'contact-form',
  data() {
    return {
      valid: false,
      name: '',
      email: '',
      phone: '',
      message: '',
      nameRules: [v => !!v || 'Name is required'],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
        v => (v || '').indexOf(' ') < 0 || 'No spaces are allowed'
      ],
      phoneRules: [
        v => !!v || 'Phone no. is required',
        v => (v || '').length <= 10 || 'A maximum of 10 characters is allowed',
        v => (v || '').length >= 9 || 'A minimum of 9 characters is needed',
        v => (v || '').indexOf(' ') < 0 || 'No spaces are allowed'
      ]
    };
  }
});
</script>

<style lang="scss" scoped>
//
</style>
