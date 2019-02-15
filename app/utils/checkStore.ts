import invariant from 'invariant';

import * as lodash from 'lodash'

/**
 * Validate the shape of redux store
 */
export default function checkStore(store: any) {
  const shape = {
    dispatch: lodash.isFunction,
    subscribe: lodash.isFunction,
    getState: lodash.isFunction,
    replaceReducer: lodash.isFunction,
    runSaga: lodash.isFunction,
    injectedReducers: lodash.isObject,
    injectedSagas: lodash.isObject,
  };
  invariant(
    lodash.conformsTo(store, shape),
    '(src/utils...) injectors: Expected a valid redux store',
  );
}
