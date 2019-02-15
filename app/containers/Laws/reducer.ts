/*
 *
 * LanguageProvider reducer
 *
 */

import { fromJS } from 'immutable';

import { setVisibleLaw } from './actions';

export const initialState = fromJS({
  canadianFederal: {
    name: 'Canadian Federal',
    icon: 'ca-fed',
    url: '/ca-federal',
    enabled: true
  },
  alberta: {
    name: 'Alberta',
    icon: 'ca-al',
    url: '/ca-alberta',
    enabled: true
  },
  britishColumbia: {
    name: 'British Columbia',
    icon: 'ca-bc',
    url: '/ca-british-columbia',
    enabled: true
  },
  manitoba: {
    name: 'Manitoba',
    icon: 'ca-ma',
    url: '/ca-manitoba',
    enabled: true
  },
  newBrunswick: {
    name: 'New Brunswick',
    icon: 'ca-nb',
    url: '/ca-new-brunswick',
    enabled: true
  },
  newfoundland: {
    name: 'Newfoundland and Labrador',
    icon: 'ca-nfld',
    url: '/ca-newfoundland-and-labrador',
    enabled: true
  },
  novaScotia: {
    name: 'Nova Scotia',
    icon: 'ca-ns',
    url: '/ca-nova-scotia',
    enabled: true
  }
});

function lawsReducer(state = initialState, action: any) {
  switch (action.type) {
    case setVisibleLaw.SUCCESS:
      return state.merge({
        [action.payload.id]: state.get(action.payload.id).merge({
          enabled: action.payload.value
        })
      })
    default:
      return state;
  }
}

export default lawsReducer;
