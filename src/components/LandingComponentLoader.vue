<template>
  <landing-markdown v-if="type === 'Markdown'" :data-aos="model.animation" :model="model" />
  <landing-title v-else-if="type === 'Title'" :data-aos="model.animation" :model="model"></landing-title>
  <landing-image v-else-if="type === 'Image'" :model="model"></landing-image>
  <landing-images-row v-else-if="type === 'ImagesRow'" :model="model"></landing-images-row>
  <landing-banner-text v-else-if="type === 'BannerText'" :model="model"></landing-banner-text>
  <landing-features-iconized v-else-if="type === 'FeatureIconized'" :model="model"></landing-features-iconized>
  <landing-spacer v-else-if="type === 'Spacer'" :model="model"></landing-spacer>
  <landing-contact-form v-else-if="type === 'ContactForm'" :model="model"></landing-contact-form>
  <landing-page-footer v-else-if="type === 'PageFooter'" :model="model"></landing-page-footer>
</template>

<script lang="ts">
import Vue from 'vue';
import LandingTitle from '@/components/LandingTitle.vue';
import LandingImage from '@/components/LandingImage.vue';
import LandingImagesRow from '@/components/LandingImagesRow.vue';
import LandingMarkdown from '@/components/LandingMarkdown.vue';
import LandingBannerText from '@/components/LandingBannerText.vue';
import LandingFeaturesIconized from '@/components/LandingFeaturesIconized.vue';
import LandingSpacer from '@/components/LandingSpacer.vue';
import LandingContactForm from '@/components/LandingContactForm.vue';
import LandingPageFooter from '@/components/LandingPageFooter.vue';

export default Vue.extend({
  name: 'landing-component-loader',
  props: ['model', 'type'],
  // TODO load async
  components: {
    LandingMarkdown,
    LandingTitle,
    LandingImage,
    LandingImagesRow,
    LandingBannerText,
    LandingFeaturesIconized,
    LandingSpacer,
    LandingContactForm,
    LandingPageFooter
  }
});
</script>

<style lang="scss" scoped>
//
</style>
