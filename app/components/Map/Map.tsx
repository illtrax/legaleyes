import * as React from 'react';
import styled from 'styled-components';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { GooglePlace } from '../../types/global';

const MapWrapper = styled(Map)`
    height: 100%;
    width: 100%;
`

class MapContainer extends React.Component<MapProps> {
    componentDidMount() {
		this.props.getNearbyPlaces({
			mapElement: document.getElementById('map'),
			lat: 45.963432,
			lng: -66.643358,
			radius: 2000,
			keyword: 'smoke shop',
			type: 'shops'
		})
		this.props.getNearbyPlaces({
			mapElement: document.getElementById('map'),
			lat: 45.963432,
			lng: -66.643358,
			radius: 2000,
			keyword: 'school daycare',
			type: 'avoid'
		})
	}
	logLatLng = (position: any) => {
		console.log('Position', position)
		alert(position.coords.latitude +"_"+ position.coords.longitude)
	}
    render() {
        const mockProps = {
            center: {
                lat: 45.9554797,
                lng: -66.6520871,
            },
            zoom: 10
		}
		console.log('Map_Props', this.props)
		const { shops } = this.props
        return (
            <MapWrapper
				id='map'
				style={{width: '100%', height: 'calc(100% - 120px)', position: 'relative'}}
				google={this.props.google}
				zoom={this.props.zoom}
				initialCenter={mockProps.center}
			>
				{ shops && shops.map((shop: GooglePlace, key: any) => {
					const { location } = shop.geometry
					const position = {
						lat: location.lat(),
						lng: location.lng()
					}
					console.log('Location', position)
					return (
						<Marker
							title={shop.name}
							name={shop.name}
							position={position}
						/>
					)
				})}
            </MapWrapper>
        )
    }
}

interface MapProps {
    center: {
        lat: number
        lng: number
    }
	zoom: number
	shops: any
	avoid: any
	google: any
	push: (url: string) => void
	getNearbyPlaces: (placesRequest: any) => void
}

const LoadingContainer = (props: any) => (
	<div>Loading... </div>
)

export default GoogleApiWrapper(
	(props: any) => ({
		apiKey: 'AIzaSyD8Jsd6j3gEB6aBPzDGOYKgyHqmsGEBCvY',
		language: props.language,
		LoadingContainer
	}
))(MapContainer)
