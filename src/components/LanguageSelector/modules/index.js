import i18n from 'i18n';
// import { getBrowserLanguage } from 'utils/language';

// import {
//   SET_PLATFORM_LANGUAGE,
// } from './types';

// const USER_LANG = getBrowserLanguage();

// const INITIAL_LANG_CONF = {
//   language: USER_LANG,
//   literals: i18n[USER_LANG],
// };

const EN_LANGUAGE = 'en';

const INITIAL_LANG_CONF = {
  language: EN_LANGUAGE,
  literals: i18n[EN_LANGUAGE],
};

// export default function i18nReducer(state = INITIAL_LANG_CONF, { type, payload: lang }) {
export default function i18nReducer(state = INITIAL_LANG_CONF, { type }) {
  switch (type) {
    // case SET_PLATFORM_LANGUAGE:
    //   return {
    //     language: lang,
    //     literals: i18n[lang],
    //   };
    default:
      return state;
  }
}
