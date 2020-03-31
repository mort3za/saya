import Vue from 'vue';
import { PageService } from '@/connection/resources.js';
import { companySlug } from '@/constants/app';

export default {
  namespaced: true,
  state: {
    items: {}
  },
  mutations: {
    update(state: any, { data, slug }: any) {
      const items = Object.assign({}, state.items, { [slug]: data });
      Vue.set(state, 'items', items);
    }
  },
  actions: {
    async getItemBySlug(context: any, slug: string) {
      try {
        const data = await PageService.landingpage({ companySlug, pageSlug: slug });
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
