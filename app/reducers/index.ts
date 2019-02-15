/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux-immutable';

import globalReducer from './global'
import routeReducer from './route'
import placesReducer from './places'
import sideBarReducer from './sideBar'

import languageProviderReducer from '../containers/LanguageProvider/reducer';
import userReducer from './user';

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers?: any) {
  return combineReducers({
    user: userReducer,
    global: globalReducer,
    language: languageProviderReducer,
    route: routeReducer,
    places: placesReducer,
    sideBar: sideBarReducer,
    ...injectedReducers,
  }) as any;
}
