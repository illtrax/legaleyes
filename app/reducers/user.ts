/*
 *
 * Global reducer
 *
 */
import { fromJS } from 'immutable';

import { setDateOfBirth, setUserType, setLocation, setSelectedStash, setUser } from '../actions/user';

export const userInitialState = fromJS({
  dateOfBirth: '',
  userType: '',
  location: '',
  selectedStash: {}
})

function userReducer(state = userInitialState, action: any) {
	// console.log('user', action)
	switch (action.type) {
		case setDateOfBirth.SUCCESS:
			return state.merge({
				dateOfBirth: action.payload,
      });
    case setUserType.SUCCESS:
			return state.merge({
				userType: action.payload,
      });
    case setLocation.SUCCESS:
			return state.merge({
				location: action.payload,
      });
    case setSelectedStash.SUCCESS:
			return state.merge({
				selectedStash: action.payload,
      });
    case setUser.SUCCESS:
			return state.merge(action.payload.user);
		default:
			return state;
	}
}

export default userReducer
