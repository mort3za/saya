<template>
  <div>
    <!-- <page-header></page-header> -->
    <div class="page">
      <div class="page-content">
        <div class="page-home--content">
          <div class="primary em-high">
            <v-container class="pt-30 pb-10">
              <h1 class="pb-10 mb-0" :class="[$vuetify.breakpoint.smAndUp ? 'display-4' : 'display-3']">
                {{ page.title }}
              </h1>
              <p class="body-1 py-8 mb-0">
                <markdown-block :content="page.description"></markdown-block>
                Saya is the premier hotel software suite for Vietnam. Saya combines an end-to-end hotel management
                system with an AI-powered marketing and customer data platform designed to maximise your bookings.
              </p>
            </v-container>
          </div>
          <div>
            <v-img
              :src="
                transformCloudinaryUrl(
                  'https://res.cloudinary.com/whynotearth/image/upload/v1583765719/Saya/home-hero_xzzuff.png',
                  'f_auto'
                )
              "
            ></v-img>
          </div>
          <banner-text-full :title="'Built for Vietnam'"></banner-text-full>
          <div class="background em-medium">
            <v-container class="py-20">
              <p class="body-1 mb-20">
                Saya was built to serve the Vietnamese hotel industry as a long-term partner. Saya is fully multilingual
                between Vietnamese, Chinese, and English, and can handle payments from Visa, Amex, Alipay, and
                Vietnamese bank accounts right out of the box - and with only 10% commission.
              </p>
              <v-img
                :src="
                  transformCloudinaryUrl(
                    'https://res.cloudinary.com/whynotearth/image/upload/v1583766685/Saya/home-speaking_dujprx.png',
                    'f_auto'
                  )
                "
              ></v-img>
            </v-container>
          </div>
          <banner-text-full :title="'Take Control of Your Brand'"></banner-text-full>
          <div class="background em-medium">
            <v-container class="py-20">
              <p class="body-1 mb-20">
                Saya includes a fully personalized web presence for each partner from the ground up. Breaking away from
                traditional website building platforms helps your brand maintain complete control, while staying ahead
                of your competitors in innovation. Reduce your dependency on the online hotel giants with a web presence
                that retains ownership of your customers.
              </p>
              <v-img
                :src="
                  transformCloudinaryUrl(
                    'https://res.cloudinary.com/whynotearth/image/upload/v1583768734/Saya/home-personalization_uwcduc.png',
                    'f_auto'
                  )
                "
              ></v-img>
            </v-container>
          </div>
          <banner-text-full :title="'Boost Your Presence with AI-Driven Marketing'"></banner-text-full>
          <div class="background em-medium">
            <v-container class="py-20">
              <p class="body-1 mb-6">
                Saya is designed for full integration with Blobby, WNE’s open-source marketing AI. Blobby allows
                small-to-medium sized enterprises to access the power of bespoke AI-powered marketing campaigns which
                can boost your conversions by up to 200%.
              </p>
              <!-- <h3 class="mb-6 text-transform-uppercase">Our Live Performance</h3> -->
              <v-img
                max-height="336"
                contain=""
                :src="
                  transformCloudinaryUrl(
                    'https://res.cloudinary.com/whynotearth/image/upload/v1583769164/Saya/home-chart_ocobah.png',
                    'f_auto'
                  )
                "
              ></v-img>
              <div class="background em-high py-6">
                <h3 class="mb-0 text-transform-uppercase text-center">See what we can do for you</h3>
              </div>
              <div class="d-flex justify-center mb-6">
                <v-btn class="primary em-high">Sync Google Analytics</v-btn>
              </div>
              <p class="text-center mb-0 em-disabled">
                Syncing lets Saya read your Google analytics data, and show where improvements could be made
              </p>
            </v-container>
          </div>
          <banner-text-full title="Marketing"></banner-text-full>
          <!-- features -->
          <div class="background em-medium">
            <v-container class="py-20">
              <v-row>
                <v-col cols="4" v-for="feature in features1" :key="feature.id" class="py-10">
                  <feature-description-iconized :model="feature"></feature-description-iconized>
                </v-col>
              </v-row>
            </v-container>
          </div>

          <banner-text-full :title="'Hotel Management'"></banner-text-full>
          <!-- features -->
          <div class="background em-medium">
            <v-container class="py-20">
              <v-row>
                <v-col cols="4" v-for="feature in features2" :key="feature.id" class="py-10">
                  <feature-description-iconized :model="feature"></feature-description-iconized>
                </v-col>
              </v-row>
            </v-container>
          </div>

          <!-- who we are -->
          <banner-text-full :title="'Who We Are'"></banner-text-full>
          <div class="background em-medium">
            <v-container class="py-20">
              <div class="body-1 mb-20">
                <p>
                  WNE are a team based in southeast asia who make best-in-class enterprise level software for
                  medium-to-large companies that unifies all of their marketing, sales processes, and online branding.
                </p>
                <p>
                  Sayas clients currently include Volkswagen, Browtricks, and the vKirirom Pine Resort. Collectively,
                  our team have worked with Google, Amazon, Airbnb, and Goldman Sachs.
                </p>
              </div>

              <!-- gallery -->
              <v-row>
                <v-col>
                  <v-img
                    contain
                    :src="
                      transformCloudinaryUrl(
                        'https://res.cloudinary.com/whynotearth/image/upload/v1583834583/Saya/portfolio-1_hcgzej.png',
                        'f_auto'
                      )
                    "
                    alt="vKirirom Pine Resort"
                  ></v-img>
                </v-col>
              </v-row>

              <!-- row 2 -->
              <v-row>
                <v-col cols="6">
                  <v-img
                    contain
                    :src="
                      transformCloudinaryUrl(
                        'https://res.cloudinary.com/whynotearth/image/upload/v1583834055/Saya/portfolio-2_qkmij6.png',
                        'f_auto'
                      )
                    "
                    alt=""
                  ></v-img>
                </v-col>
                <v-col cols="6">
                  <v-img
                    contain
                    :src="
                      transformCloudinaryUrl(
                        'https://res.cloudinary.com/whynotearth/image/upload/v1583836039/Saya/portfolio-3_ebcigy.png',
                        'f_auto'
                      )
                    "
                    alt=""
                  ></v-img>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-img
                    contain
                    :src="
                      transformCloudinaryUrl(
                        'https://res.cloudinary.com/whynotearth/image/upload/v1583834077/Saya/portfolio-4_w7lrpc.png',
                        'f_auto'
                      )
                    "
                    alt=""
                  ></v-img>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
      </div>
      <!-- <page-footer></page-footer> -->
    </div>
  </div>
</template>

<script lang="ts">
import FeatureDescriptionIconized from '@/components/FeatureDescriptionIconized.vue';
import BannerTextFull from '@/components/BannerTextFull.vue';
import store from '@/store';
const slug = 'Home';
// const PageFooter = () => import(/* webpackMode: "eager" */ '@/components/PageFooter.vue');
const MarkdownBlock = () => import(/* webpackMode: "eager" */ '@/components/MarkdownBlock.vue');

// https://stagingapi.whynot.earth/api/v0/pages/slug/Saya/Home

export default {
  name: 'home-page',
  components: {
    FeatureDescriptionIconized,
    MarkdownBlock,
    BannerTextFull
    // PageFooter
    // PageHeader
  },
  async beforeRouteEnter(to, from, next) {
    store.commit('loading/updateIsSplashScreenVisible', true);

    await store.dispatch('page/getItemBySlug', slug);

    next();
  },
  computed: {
    page() {
      return store.getters['page/itemBySlug'](slug);
    }
  },
  data: () => ({
    features1: [
      {
        id: 1,
        title: 'Web Design',
        description:
          'Saya’s UX consultancy team will build a completely bespoke, personalized, and best-in-class web presence for your hotel.',
        icon: 'computer'
      },
      {
        id: 2,
        title: 'Full Marketing Analytics',
        description:
          'You retain full visibility and control of all marketing channels through Saya, including detailed analysis of your ROI.',
        icon: 'stats'
      },
      {
        id: 3,
        title: 'Social Media Management',
        description:
          'Saya’s social media team will be happy to take over your brand management, both within Vietnam and worldwide, with specialists in both Western and Chinese markets available.',
        icon: 'group'
      },
      {
        id: 4,
        title: 'Outbound Marketing',
        description:
          'Saya includes email and text campaign automation features, including pre-and-post arrival campaigns.',
        icon: 'email'
      },
      {
        id: 5,
        title: 'Ai-Driven Marketing ',
        description:
          'Integration with Blobby, Saya’s marketing AI, allows for long-term optimization of your marketing and web-presence to drive bookings. We’ve seen Blobby triple conversions in less than a year and a half.',
        icon: 'ai'
      }
    ],
    features2: [
      {
        id: 1,
        title: 'Booking Engine',
        description: 'Saya includes a robust and secure booking system.',
        icon: 'booking'
      },
      {
        id: 2,
        title: 'Payment Processing',
        description:
          'Sayas in-house payments processing engine gives you and your clients access to the most fast and secure hotel payments processor in Vietnam.',
        icon: 'payment'
      },
      {
        id: 3,
        title: 'Property Management',
        description:
          'Including management of housekeeping, incidentals, food + beverages, and booking integration as required.',
        icon: 'food'
      }
    ]
  })
};
</script>

<style lang="scss">
@import '@/styles/utility.scss';
</style>
<style lang="scss" scoped></style>
