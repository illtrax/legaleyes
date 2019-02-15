/*
 *
 * Global reducer
 *
 */
import { fromJS } from 'immutable';

import { getWindowSize, toggleSideBar } from '../actions/global'
//import toJS from '../HoC/toJS';

export const globalInitialState = fromJS({
	size: {
		window: {
			width: 0,
			height: 0
		},
		content: {
			width: 0,
			height: 0
		},
		topBar: 64,
		bottomNav: 83,
	},
	sideBar: {
		active: false,
		direction: 'left'
	},

})

function globalReducer(state = globalInitialState, action: any) {
	// console.log(action.type, action.payload)
	switch (action.type) {
		case getWindowSize.SUCCESS:
			const topBar = state.get('size').get('topBar')
			const bottomNav = state.get('size').get('bottomNav')
			return state.merge({
				size: {
					window: {
						width: action.payload.width,
						height: action.payload.height
					},
					content: {
						width: action.payload.width,
						height: action.payload.height - topBar - bottomNav
					},
					topBar,
					bottomNav,
				}
			});
		case toggleSideBar.SUCCESS:
			const newActive = !state.get('sideBar').get('active') || false
			const newDirection = action.payload.direction || 'left'
			return state.merge({
				sideBar: {
					active: newActive,
					direction: newDirection
				},
			});
		default:
			return state;
	}
}

export default globalReducer
