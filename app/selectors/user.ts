/*
 *
 * SideBar Selectors
 *
 */
import { createSelector } from 'reselect'

export const selectUser = (state: any) => state.get('user')

export const selectUserSettings = () => createSelector(
	selectUser,
	(globalState) => globalState,
)