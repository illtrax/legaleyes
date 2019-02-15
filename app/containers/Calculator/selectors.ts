import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCalculator = (state: any) =>
  state.get('calculator', initialState);

export const makeSelectValues = () => createSelector(
  selectCalculator,
  calculatorState => calculatorState);

