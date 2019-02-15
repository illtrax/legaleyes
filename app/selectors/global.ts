/*
 *
 * Global Selectors
 *
 */
import { createSelector } from 'reselect'

export const globalSelector = (state: any) => state.get('global')

export const sizeSelector = (state: any) => state.get('global').get('size')

export const sideBarSelector = (state: any) => state.get('global').get('sideBar')

export const selectWindowSize = () => createSelector(
	sizeSelector,
	globalState => globalState.get('window'),
)

export const selectContentSize = () => createSelector(
	sizeSelector,
	globalState => globalState.get('content'),
)

export const selectTopBarSize = () => createSelector(
	sizeSelector,
	globalState => globalState.get('topBar'),
)

export const selectBottomNavSize = () => createSelector(
	sizeSelector,
	globalState => globalState.get('bottomNav'),
)

export const selectSideBarActive = () => createSelector(
	sideBarSelector,
	globalState => globalState.get('active'),
)

export const selectSideBarDirection = () => createSelector(
	sideBarSelector,
	globalState => globalState.get('direction'),
)