import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import * as Redux from 'redux'
import { createStructuredSelector } from 'reselect'

import TopBar from '../../components/TopBar/Loadable'
import toJS from '../../HoC/toJS'
import { selectTopBarSize } from '../../selectors/global';
import {toggleSideBar} from '../../actions/sideBar'

const mapStateToProps = createStructuredSelector({
	height: selectTopBarSize(),
})

const mapDispatchToProps = ( dispatch: any ) => ({
	push: ( url: string ) => dispatch( push( url ) ),
	toggleSideBar: (direction:string) => dispatch( toggleSideBar.success( {direction} ) ),
}) as any

export default Redux.compose(
	connect(mapStateToProps, mapDispatchToProps),
	toJS
) (TopBar) as any
