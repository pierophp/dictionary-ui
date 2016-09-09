export const ADD_TRANSLATION = 'ADD_TRANSLATION';
export const REMOVE_TRANSLATION = 'REMOVE_TRANSLATION';
export const SET_TRANSLATIONS = 'ADD_TRANSLATIONS';
export const UPDATE = 'UPDATE';

export function addTranslation(translation) {
  return { type: ADD_TRANSLATION, translation };
};

export function setTranslations(translations) {
  return { type: SET_TRANSLATIONS, translations };
};

export function removeTranslation(index) {
  return { type: REMOVE_TRANSLATION, index };
};

export function update(word) {
  return { type: UPDATE, word };
};
