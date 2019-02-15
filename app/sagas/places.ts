/*
 *
 * Places saga
 *
 */
import { put, takeEvery } from 'redux-saga/effects'
import { getNearbyPlaces, getPlace } from '../actions/places'

const google = (window as any).google

function* doGetNearbyPlaces( action: any ) {
	console.log('placesSaga_doGetNearbyPlaces', action.payload)
    const { lat, lng, radius, keyword, type } = action.payload
	const center = new google.maps.LatLng( lat, lng )
	const map = new google.maps.Map(document.createElement('div'), { center })
	const request: any = {
		location: center,
		radius,
		keyword
	}
	const service = new google.maps.places.PlacesService(map)
	const { results, status } = yield new Promise(resolve => {
		service.nearbySearch(request, function(results: any, status: any) {
			resolve({ results, status})
		})
	})
	if (status == google.maps.places.PlacesServiceStatus.OK) {
	console.log(status, results)
		yield put( getNearbyPlaces.success({ type, places: results }))
	} else {
		yield put( getNearbyPlaces.failure({ error: 'response.err.message' }))
	}
}
function* doGetPlace( action: any ) {
    // const { mapElement, lat, lng, keyword, type } = action.payload
	// const center = new google.maps.LatLng( lat, lng )
	// const map = new google.maps.Map(mapElement as any, { center })
	// const request: any = {
	// 	location: center,
	// 	radius,
	// 	keyword
	// }
	// console.log('request', request)
	// const service = new google.maps.places.PlacesService(map)
	// service.nearbySearch(request, (results: any, status: any) => {
	// 	console.log(status, results)
	// })
	yield put( getPlace.failure({ error: 'Unfinished' }))
 }


const placesSaga = [
	takeEvery( getNearbyPlaces.REQUEST, doGetNearbyPlaces ),
	takeEvery( getPlace.REQUEST, doGetPlace )
]

export default placesSaga
