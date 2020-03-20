// TODO: separate resorts similar to https://github.com/whynotearth/shinta-mani-wild/pull/298
// TODO: remove deprecateds
import { PageService } from '@/connection/resources.js';
import Vue from 'vue';
import { companySlug } from '@/constants/app';

export default {
  namespaced: true,
  state: {
    items: {},
    // deprecated
    resort: {}
  },
  mutations: {
    // deprecated
    addItem(state, payload) {
      state.resort = payload;
    },

    update(state: any, { data, slug }: any) {
      const items = Object.assign({}, state.items, { [slug]: data });
      Vue.set(state, 'items', items);
    }
  },
  actions: {
    async getItemBySlug(context: any, slug: string) {
      try {
        const data = await PageService.slug({ companySlug, pageSlug: slug });
        context.commit('update', { data, slug });
        return data;
      } catch (error) {
        return error;
      }
    }
  },
  getters: {
    items(state: any) {
      return state.items;
    },
    itemBySlug: (state: any) => (slug: string) => {
      return state.items[slug] || {};
    }
  }
};
