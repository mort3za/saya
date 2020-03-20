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
        </div>
      </div>
      <!-- section 2 -->
      <landing-component-container
        v-for="component in filter(sortBy(landing.components, 'order'), ['section', 2])"
        :key="component.id"
        :component="component"
      >
        <landing-component-loader :type="component.type" :model="component.model"></landing-component-loader>
      </landing-component-container>
    </div>
  </div>
</template>

<script lang="ts">
import LandingComponentContainer from '@/components/LandingComponentContainer.vue';
import LandingComponentLoader from '@/components/LandingComponentLoader.vue';
import store from '@/store';
import aosAnimations from '@/mixins/aos-animations';
import { getFormattedMetaTitle } from '../helpers';
import { sortBy, filter } from 'lodash-es';

export default {
  name: 'landing-page',
  mixins: [aosAnimations],
  props: ['slug'],
  components: {
    LandingComponentLoader,
    LandingComponentContainer
  },
  async beforeRouteEnter(to, from, next) {
    const slug = to.params.id || 'home';

    store.commit('loading/updateIsSplashScreenVisible', true);

    const promise1 = store.dispatch('page/getItemBySlug', slug);
    const promise2 = store.dispatch('landing/getItemBySlug', slug);

    await Promise.all([promise1, promise2]);

    next();
  },
  metaInfo() {
    const page = Object.assign({}, { custom: {} }, (this as any).page);
    return {
      title: getFormattedMetaTitle(page.title, { titleCase: false }),
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: page.custom && page.custom.description
        }
      ],
      script: [
        {
          vmid: 'jsonld',
          type: 'application/ld+json',
          json: page.custom
        }
      ]
    };
  },
  computed: {
    page() {
      return store.getters['page/itemBySlug']((this as any).slug);
    },
    landing() {
      return store.getters['landing/itemBySlug']((this as any).slug);
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
