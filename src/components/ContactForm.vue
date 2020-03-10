<template>
  <v-form name="Contact" method="post" netlify ref="form" action="/thanks" v-model="valid" data-netlify="true">
    <input type="hidden" name="form-name" value="Contact" />

    <v-text-field v-model="name" outlined label="Full Name" name="name" color="light" required dark :rules="nameRules">
      <v-icon slot="append" color="light">person</v-icon>
    </v-text-field>

    <v-text-field v-model="email" outlined color="light" label="E-Mail" name="email" required dark :rules="emailRules">
      <v-icon slot="append" color="light">email</v-icon>
    </v-text-field>

    <v-text-field
      v-model="phone"
      outlined
      label="Phone Number"
      name="phone"
      color="light"
      required
      dark
      :rules="phoneRules"
    >
      <v-icon slot="append" color="light">local_phone</v-icon>
    </v-text-field>

    <v-textarea
      outlined
      hide-details
      dark
      v-model="message"
      color="light"
      name="message"
      label="Write message here..."
      height="128px"
      no-resize
    >
    </v-textarea>

    <v-btn
      color="primary"
      dark
      block
      large
      depressed
      style="padding:0; margin-top:30px; margin-bottom:25px; box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25); border-radius: 4px; text-transform:capitalize; font-size: 16px; height:74px;"
      type="submit"
      class="dark--text"
      :disabled="!valid"
    >
      Send<v-icon>keyboard_arrow_right</v-icon>
    </v-btn>
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
