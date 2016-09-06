import * as mutations from '../mutations/TranslationMutations';

export function removeTranslation({ dispatch }, index) {
  dispatch(mutations.removeTranslation(index));
};

export function addTranslation({ dispatch }, translation) {
  dispatch(mutations.addTranslation(translation));
};

export function save({ dispatch }, form) {
  this.$http
    .post('admin/words/create', form)
    .then(function (response) {
      console.log(response.body.word)
    }).catch(function (ex) {
      console.log('Exception', ex)
    });
};
