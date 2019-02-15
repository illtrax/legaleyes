/*
 *
 * SideBar Selectors
 *
 */
import { createSelector } from 'reselect'

export const sideBarSelector = (state: any) => state.get('sideBar')

export const selectSideBarActive = () => createSelector(
	sideBarSelector,
	(globalState) => globalState.get('active'),
)

export const selectSideBarDirection = () => createSelector(
	sideBarSelector,
	globalState => globalState.get('direction'),
)