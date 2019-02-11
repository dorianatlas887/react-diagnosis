import {
  loadingAction,
} from 'store/globalState/global';

import {
  SET_PLATFORM_LANGUAGE,
} from './types';

export function setPlatformLanguage(lang) {
  return {
    type: SET_PLATFORM_LANGUAGE,
    payload: lang,
  };
}

export function setPlatformLanguageAction(lang) {
  return (dispatch) => {
    dispatch(loadingAction(true));
    dispatch(setPlatformLanguage(lang));

    setTimeout(() => {
      dispatch(loadingAction(false));
    }, 1000);
  };
}
