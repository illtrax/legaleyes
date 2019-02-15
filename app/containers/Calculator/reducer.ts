/*
 *
 * Calculator reducer
 *
 */

import { fromJS } from 'immutable';
import { setValue } from './actions';

export const initialState = fromJS({
  maxHold: 30,
  maxPlant: 4,
  holding: 0,
  dried: {
    name: 'Dried',
    ratio: 1,
    holding: 0,
    percentage: 0,
    enabled: false
  },
  fresh: {
    name: 'Fresh',
    ratio: 5,
    holding: 0,
    percentage: 0,
    enabled: false
  },
  edible: {
    name: 'Edible',
    ratio: 15,
    holding: 0,
    percentage: 0,
    enabled: false
  },
  liquid: {
    name: 'Liquid',
    ratio: 70,
    holding: 0,
    percentage: 0,
    enabled: false
  },
  concentrate: {
    name: 'Concentrate',
    ratio: 70,
    holding: 0,
    percentage: 0,
    enabled: false
  },
  seed: {
    name: 'Seed',
    ratio: 1,
    holding: 0,
    percentage: 0,
    enabled: false
  },
  plant: {
    name: 'Plant',
    ratio: 1,
    holding: 0,
    percentage: 0,
    enabled: false
  },
});

function calculatorReducer(state = initialState, action: any) {
  switch (action.type) {
    case setValue.SUCCESS:
      return state.merge({
        [action.payload.id]: state.get(action.payload.id).merge({
          [action.payload.key]: action.payload.value
        })
      })
    default:
      return state;
  }
}

export default calculatorReducer;
