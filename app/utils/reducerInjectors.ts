import invariant from 'invariant';
import * as lodash from 'lodash'

import checkStore from './checkStore';
import createReducer from '../reducers';

export function injectReducerFactory(store: any, isValid: any) {
  return function injectReducer(key: any, reducer: any) {
    if (!isValid) checkStore(store);

    invariant(
      lodash.isString(key) && !lodash.isEmpty(key) && lodash.isFunction(reducer),
      '(src/utils...) injectReducer: Expected `reducer` to be a reducer function',
    );

    // Check `store.injectedReducers[key] === reducer` for hot reloading when a key is the same but a reducer is different
    if (
      Reflect.has(store.injectedReducers, key) &&
      store.injectedReducers[key] === reducer
    )
      return;

    store.injectedReducers[key] = reducer; // eslint-disable-line no-param-reassign
    store.replaceReducer(createReducer(store.injectedReducers));
  };
}

export default function getInjectors(store: any) {
  checkStore(store);

  return {
    injectReducer: injectReducerFactory(store, true),
  };
}
