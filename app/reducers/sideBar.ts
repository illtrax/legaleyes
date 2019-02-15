/*
 *
 * Global reducer
 *
 */
import { fromJS } from 'immutable';

import { toggleSideBar } from '../actions/sideBar'

export const sideBarInitialState = fromJS({
	active: false,
	direction: 'left'
})

function sideBarReducer(state = sideBarInitialState, action: any) {
	// console.log('sideBar', action)
	switch (action.type) {
		case toggleSideBar.SUCCESS:
			const newActive = !state.get('active') || false
			const newDirection = action.payload.direction || 'left'
			return state.merge({
				active: newActive,
				direction: newDirection
			});
		default:
			return state;
	}
}

export default sideBarReducer
