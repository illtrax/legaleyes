import { connect } from 'react-redux'
import * as Redux from 'redux'
import { push } from 'react-router-redux'
import { createStructuredSelector } from 'reselect'

import Map from '../../components/Map/Loadable'
import toJS from '../../HoC/toJS'
import { getNearbyPlaces } from '../../actions/places';
import { selectShopPlaces, selectAvoidPlaces } from '../../selectors/places';

const mapStateToProps = createStructuredSelector({
	shops: selectShopPlaces(),
	avoid: selectAvoidPlaces()
})

const mapDispatchToProps = ( dispatch: any ) => ({
	push: ( url: string ) => dispatch( push( url ) ),
	getNearbyPlaces: ( placesRequest: any ) =>
		dispatch( getNearbyPlaces.request(placesRequest))
})

export default Redux.compose(
	connect(mapStateToProps, mapDispatchToProps),
	toJS
) (Map) as any
