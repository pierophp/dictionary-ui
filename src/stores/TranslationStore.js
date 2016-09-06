import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import * as translationsMutations from '../mutations/TranslationMutations';

const state = {
  word: '',
  translations: ['Test', 'Name', 'Piero', 'Giusti', 'AZ']
};

const mutations = {
  [translationsMutations.ADD_TRANSLATION](state, data) {
    state.translations.push(data.translation)
  },
  [translationsMutations.REMOVE_TRANSLATION](state, data) {
    state.translations.$remove(state.translations[data.index])
  }
};

export default new Vuex.Store({ state, mutations });
