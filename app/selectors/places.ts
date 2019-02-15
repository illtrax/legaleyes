/*
 *
 * Global Selectors
 *
 */
import { createSelector } from 'reselect'

export const placesSelector = (state: any) => state.get('places')

export const selectShopPlaces = () => createSelector(
	placesSelector,
	substate => substate.get('shops'),
)

export const selectAvoidPlaces = () => createSelector(
	placesSelector,
	substate => substate.get('avoid'),
)
