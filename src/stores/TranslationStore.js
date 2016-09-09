import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import * as translationsMutations from '../mutations/TranslationMutations';

const state = {
  fromLang: 'pt',
  toLang: 'en',
  type: 'W',
  word: '',
  observation: '',
  translations: []
};

const mutations = {
  [translationsMutations.ADD_TRANSLATION](state, data) {
    state.translations.push(data.translation)
  },
  [translationsMutations.REMOVE_TRANSLATION](state, data) {
    state.translations.$remove(state.translations[data.index])
  },
  [translationsMutations.SET_TRANSLATIONS](state, data) {
    state.translations = data.translations
  },
  [translationsMutations.UPDATE](state, data) {
    state.word = data.word.word
    state.observation = data.word.observation
  }
};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: state,
  mutations:mutations
});
