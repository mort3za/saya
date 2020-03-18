<template>
  <div>
    <div class="page">
      <div class="page-content">
        <div class="page-home--content">
          <!-- section 1 -->
          <landing-component-container
            v-for="component in filter(sortBy(landing.components, 'order'), ['section', 1])"
            :key="component.id"
            :component="component"
          >
            <landing-component-loader :type="component.type" :model="component.model"></landing-component-loader>
          </landing-component-container>

          <div data-aos="fade-up" class="background em-medium">
            <v-container class="py-20">
              <contact-form></contact-form>
            </v-container>
          </div>
        </div>
      </div>
      <page-footer></page-footer>
    </div>
  </div>
</template>

<script lang="ts">
import ContactForm from '@/components/ContactForm.vue';
import PageFooter from '@/components/PageFooter.vue';
import LandingComponentContainer from '@/components/LandingComponentContainer.vue';
import LandingComponentLoader from '@/components/LandingComponentLoader.vue';
import store from '@/store';
import aosAnimations from '@/mixins/aos-animations';
import { getFormattedMetaTitle } from '../helpers';
import { sortBy, filter } from 'lodash-es';
const slug = 'Home';

export default {
  name: 'home-page',
  mixins: [aosAnimations],
  components: {
    LandingComponentLoader,
    ContactForm,
    PageFooter,
    LandingComponentContainer
  },
  async beforeRouteEnter(to, from, next) {
    store.commit('loading/updateIsSplashScreenVisible', true);

    const promise1 = store.dispatch('page/getItemBySlug', slug);
    const promise2 = store.dispatch('landing/getItemBySlug', slug);

    await Promise.all([promise1, promise2]);

    next();
  },
  metaInfo() {
    return {
      title: getFormattedMetaTitle((this as any).page.title, { titleCase: false }),
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: (this as any).page.custom.description
        }
      ],
      script: [
        {
          vmid: 'jsonld',
          type: 'application/ld+json',
          json: (this as any).page.custom
        }
      ]
    };
  },
  computed: {
    page() {
      return store.getters['page/itemBySlug'](slug);
    },
    landing() {
      return store.getters['landing/itemBySlug'](slug);
    }
  },
  methods: {
    sortBy,
    filter
  }
};
</script>

<style lang="scss">
@import '@/styles/utility.scss';
</style>
