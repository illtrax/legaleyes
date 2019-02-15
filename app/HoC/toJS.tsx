/*
 * toJS
 * Higher-Order Component
 * Converts immutablejs objects to normal js
 */
import * as React from 'react'
import { Iterable } from 'immutable'

export default function toJS(WrapperComponent: any) {
  return (wrapperComponentProps: any) => {
    const KEY = 0;
    const VALUE = 1;

    const reducedProps = Object.entries(wrapperComponentProps).reduce(
      (newProps: any, wrappedComponentProp: any) => {
        // eslint-disable-next-line no-param-reassign
        newProps[wrappedComponentProp[KEY]] = Iterable.isIterable(
          wrappedComponentProp[VALUE]
        )
          ? wrappedComponentProp[VALUE].toJS()
          : wrappedComponentProp[VALUE];

        return newProps;
      },
      {}
    );
    const props = Iterable.isIterable(reducedProps)
      ? reducedProps.toJS()
      : reducedProps;
    return <WrapperComponent {...props} />
  }
}
