export const ADD_TRANSLATION = 'ADD_TRANSLATION';
export const REMOVE_TRANSLATION = 'REMOVE_TRANSLATION';
export const UPDATE = 'UPDATE';

export function addTranslation(translation) {
  return { type: ADD_TRANSLATION, translation };
};

export function removeTranslation(index) {
  return { type: REMOVE_TRANSLATION, index };
};

export function update(word) {
  return { type: UPDATE, word };
};
