import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import * as translationsMutations from '../mutations/TranslationMutations';

const state = {
  fromLang: 'pt',
  toLang: 'en',
  word: '',
  translations: []
};

const mutations = {
  [translationsMutations.ADD_TRANSLATION](state, data) {
    state.translations.push(data.translation)
  },
  [translationsMutations.REMOVE_TRANSLATION](state, data) {
    state.translations.$remove(state.translations[data.index])
  },
  [translationsMutations.SET_WORD](state, data) {
    state.word = data.word
  }
};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: state,
  mutations:mutations
});
