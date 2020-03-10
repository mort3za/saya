<template>
  <v-footer padless class="page-footer light--text position-relative py-8">
    <div class="d-flex mx-auto">
      <a class="mx-1 px-1 py-2" href="https://instagram.com/sayaTODO"
        ><v-img contain width="24" height="24" src="img/svg/instagram.svg"></v-img
      ></a>
      <a class="mx-1 px-1 py-2" href="https://google.com/sayaTODO"
        ><v-img contain width="24" height="24" src="img/svg/google.svg"></v-img
      ></a>
      <a class="mx-1 px-1 py-2" href="https://facebook.com/sayaTODO"
        ><v-img contain width="24" height="24" src="img/svg/facebook.svg"></v-img
      ></a>
      <a class="mx-1 px-1 py-2" href="https://github.com/sayaTODO"
        ><v-img contain width="24" height="24" src="img/svg/github.svg"></v-img
      ></a>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: 'page-footer'
};
</script>

<style lang="scss">
@import '@/styles/utility.scss';
</style>
