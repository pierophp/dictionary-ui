import * as mutations from '../mutations/TranslationMutations';

export function removeTranslation({ dispatch }, index) {
  dispatch(mutations.removeTranslation(index));
};

export function addTranslation({ dispatch }, translation) {
  dispatch(mutations.addTranslation(translation));
};

export function setTranslations({ dispatch }, translations) {
  dispatch(mutations.setTranslations(translations));
};

export function update({ dispatch }, word) {
  dispatch(mutations.update(word));
};

export function save({ dispatch }, state) {
  this.$http
    .post('admin/words/save', state)
    .then(function (response) {
      console.log(response.body.word)
    }).catch(function (ex) {
      console.log('Exception', ex)
    });
};
