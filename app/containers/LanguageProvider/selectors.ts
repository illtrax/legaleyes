import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the languageToggle state domain
 */
export const selectLanguage = (state: any) =>
  state.get('language', initialState);

/**
 * Select the language locale
 */
export const makeSelectLocale = () => createSelector(
  selectLanguage, 
  languageState => languageState.get('locale'));

