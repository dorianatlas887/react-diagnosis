export const ES_LANGUAGE = 'es';
export const EN_LANGUAGE = 'en';

export const DEFAULT_LANGUAGE = ES_LANGUAGE;
export const ALLOWED_LANGUAGES = [ES_LANGUAGE, EN_LANGUAGE];

/**
 * @name getBrowserLanguage
 * Function to get user language
 *
 * @returns {String} browser lang
 */
export function getBrowserLanguage() {
  let lang = '';

  if (navigator.languages && navigator.languages.length) {
    // latest versions of Chrome and Firefox set this correctly
    lang = navigator.languages[0];
  } else if (navigator.userLanguage) {
    // IE only
    lang = navigator.userLanguage;
  } else {
    // latest versions of Chrome, Firefox, and Safari set this correctly
    lang = navigator.language;
  }

  lang = (typeof lang !== 'undefined') ? lang.split('-')[0].toLowerCase() : '';

  return (ALLOWED_LANGUAGES.includes(lang)) ? lang : DEFAULT_LANGUAGE;
}
