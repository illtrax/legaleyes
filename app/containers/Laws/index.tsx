import { connect } from 'react-redux'
import * as Redux from 'redux'
import { push } from 'react-router-redux'
import { createStructuredSelector } from 'reselect'

import Laws from '../../components/Laws/Loadable'
import toJS from '../../HoC/toJS'
import { makeSelectLaws } from './selectors';
import injectReducer from '../../HoC/injectReducer';
import reducer from './reducer'
import { setVisibleLaw } from './actions';

const mapStateToProps = createStructuredSelector({
	laws: makeSelectLaws()
})

const mapDispatchToProps = ( dispatch: any ) => ({
	push: ( url: string ) => dispatch( push( url ) ),
	setVisibleLaw: ( id: string, value: boolean ) => dispatch( setVisibleLaw.success({ id, value }) ),
})

const withReducer = injectReducer({ key: 'laws', reducer })

export default Redux.compose(
	connect(mapStateToProps, mapDispatchToProps),
	withReducer,
	toJS
) (Laws) as any
