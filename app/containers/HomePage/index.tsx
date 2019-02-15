import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import * as Redux from 'redux'
import { createStructuredSelector } from 'reselect'

import HomePage from '../../components/Home/HomePage'
import toJS from '../../HoC/toJS'

const mapStateToProps = createStructuredSelector({

})

const mapDispatchToProps = ( dispatch: any ) => ({
	push: ( url: string ) => dispatch( push( url ) ),
})

export default Redux.compose(
	connect(mapStateToProps, mapDispatchToProps),
	toJS
) (HomePage) as any
