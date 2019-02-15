/*
 *
 * LanguageProvider reducer
 *
 */

import { fromJS } from 'immutable';

import { changeLocale } from './actions';
import { DEFAULT_LOCALE } from '../../i18n'; // eslint-disable-line

export const initialState = fromJS({
  locale: DEFAULT_LOCALE,
});

function languageProviderReducer(state = initialState, action: any) {
  switch (action.type) {
    case changeLocale.SUCCESS:
      return state.set('locale', action.locale);
    default:
      return state;
  }
}

export default languageProviderReducer;
