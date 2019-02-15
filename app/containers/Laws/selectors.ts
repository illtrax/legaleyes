import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the laws state
 */
const selectLaws = (state: any) =>
  state.get('laws', initialState);

export const makeSelectLaws = () => createSelector(
  selectLaws, 
  lawsState => lawsState);

