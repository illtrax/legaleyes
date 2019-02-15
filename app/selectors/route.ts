import { createSelector } from 'reselect';

const selectRoute = (state: any) => state.get('route');

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.get('location').toJS());

export { makeSelectLocation };
