import { connect } from 'react-redux'
import * as Redux from 'redux'
import { push } from 'react-router-redux'
import { createStructuredSelector } from 'reselect'

import Calculator from '../../components/Calculator/Loadable'
import toJS from '../../HoC/toJS'
import { makeSelectValues } from './selectors';
import injectReducer from '../../HoC/injectReducer';
import reducer from './reducer'
import { setValue } from './actions';

const mapStateToProps = createStructuredSelector({
	stash: makeSelectValues()
})

const mapDispatchToProps = ( dispatch: any ) => ({
  push: ( url: string ) => dispatch( push( url ) ),
  setValue: ( id: string, key: string, value: number ) => dispatch( setValue.success({ id, key, value }) ),
})

const withReducer = injectReducer({ key: 'calculator', reducer })

export default Redux.compose(
  connect(mapStateToProps, mapDispatchToProps),
  withReducer,
	toJS
) (Calculator) as any
