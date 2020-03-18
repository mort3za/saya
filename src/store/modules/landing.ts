import Vue from 'vue';
import { companySlug } from '@/constants/app';
import { ajax } from '@/connection/ajax';
// TODO move to backend
const landingUrl = '/json/home-landing.json';

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
        const data = (
          await ajax({
            baseURL: '',
            url: landingUrl
          })
        ).data;
        context.commit('update', { data, slug });
        return data;
      } catch (error) {
        console.log('get resort issue');
        return new Error('get resort issue');
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
