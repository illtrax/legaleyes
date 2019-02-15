/*
 *
 * Global reducer
 *
 */
import { fromJS } from 'immutable';

import { getNearbyPlaces, getPlace } from '../actions/places'

export const globalInitialState = fromJS({
    shops: [],
    avoid: []
})

function globalReducer(state = globalInitialState, action: any) {
	switch (action.type) {
        case getNearbyPlaces.SUCCESS:
            return state.merge({
                [action.payload.type]: action.payload.places
            })
        case getPlace.SUCCESS:
            return state.setIn(
                [action.payload.type, action.payload.id], action.payload.place
            )
		default:
			return state;
	}
}

export default globalReducer
