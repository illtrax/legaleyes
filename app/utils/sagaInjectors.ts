import invariant from 'invariant';
import * as lodash from 'lodash'

import checkStore from './checkStore';
import { DAEMON, ONCE_TILL_UNMOUNT, RESTART_ON_REMOUNT } from './constants';

const allowedModes = [RESTART_ON_REMOUNT, DAEMON, ONCE_TILL_UNMOUNT];

const checkKey = (key: any) =>
  invariant(
    lodash.isString(key) && !lodash.isEmpty(key),
    '(src/utils...) injectSaga: Expected `key` to be a non empty string',
  );

const checkDescriptor = (descriptor: any) => {
  const shape = {
    saga: lodash.isFunction,
    mode: (mode: any) => lodash.isString(mode) && allowedModes.includes(mode),
  };
  invariant(
    lodash.conformsTo(descriptor, shape),
    '(src/utils...) injectSaga: Expected a valid saga descriptor',
  );
};

export function injectSagaFactory(store: any, isValid: any) {
  return function injectSaga(key: any, descriptor = {} as any, args: any) {
    if (!isValid) checkStore(store);

    const newDescriptor = {
      ...descriptor,
      mode: descriptor.mode || RESTART_ON_REMOUNT,
    };
    const { saga, mode } = newDescriptor;

    checkKey(key);
    checkDescriptor(newDescriptor);

    let hasSaga = Reflect.has(store.injectedSagas, key);

    if (process.env.NODE_ENV !== 'production') {
      const oldDescriptor = store.injectedSagas[key];
      // enable hot reloading of daemon and once-till-unmount sagas
      if (hasSaga && oldDescriptor.saga !== saga) {
        oldDescriptor.task.cancel();
        hasSaga = false;
      }
    }

    if (
      !hasSaga ||
      (hasSaga && mode !== DAEMON && mode !== ONCE_TILL_UNMOUNT)
    ) {
      /* eslint-disable no-param-reassign */
      store.injectedSagas[key] = {
        ...newDescriptor,
        task: store.runSaga(saga, args),
      };
      /* eslint-enable no-param-reassign */
    }
  };
}

export function ejectSagaFactory(store: any, isValid: any) {
  return function ejectSaga(key: any) {
    if (!isValid) checkStore(store);

    checkKey(key);

    if (Reflect.has(store.injectedSagas, key)) {
      const descriptor = store.injectedSagas[key];
      if (descriptor.mode !== DAEMON) {
        descriptor.task.cancel();
        // Clean up in production; in development we need `descriptor.saga` for hot reloading
        if (process.env.NODE_ENV === 'production') {
          // Need some value to be able to detect `ONCE_TILL_UNMOUNT` sagas in `injectSaga`
          store.injectedSagas[key] = 'done'; // eslint-disable-line no-param-reassign
        }
      }
    }
  };
}

export default function getInjectors(store: any) {
  checkStore(store);

  return {
    injectSaga: injectSagaFactory(store, true),
    ejectSaga: ejectSagaFactory(store, true),
  };
}
