<template>
  <v-footer padless class="page-footer surface em-medium light--text position-relative py-8">
    <div class="d-flex mx-auto">
      <a v-for="item in socialItems" :key="item.name" class="mx-1 px-1 py-2" :href="item.url"
        ><v-img contain width="24" height="24" :src="`img/svg/${item.icon}.svg`"></v-img
      ></a>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: 'page-footer',
  props: ['socialItems']
};
</script>

<style lang="scss">
@import '@/styles/utility.scss';
</style>
