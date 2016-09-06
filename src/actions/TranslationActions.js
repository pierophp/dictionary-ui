import * as mutations from '../mutations/TranslationMutations';
import {
  baseUrl
} from '../../config'

export function removeTranslation({ dispatch }, index) {
  dispatch(mutations.removeTranslation(index));
};

export function addTranslation({ dispatch }, translation) {
  dispatch(mutations.addTranslation(translation));
};

export function save({ dispatch }, form) {

  fetch(baseUrl + 'admin/words/create', {
    method: 'POST',
    body: JSON.stringify(form)
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log('Success')
    })
    .catch(function (ex) {
      console.log('parsing failed', ex)
    });
};
