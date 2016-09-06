export const ADD_TRANSLATION = 'ADD_TRANSLATION';
export const REMOVE_TRANSLATION = 'REMOVE_TRANSLATION';
export const SET_WORD = 'SET_WORD';

export function addTranslation(translation) {
  return { type: ADD_TRANSLATION, translation };
};

export function removeTranslation(index) {
  return { type: REMOVE_TRANSLATION, index };
};

export function setWord(word) {
  return { type: SET_WORD, word };
};
