import { connect } from 'react-redux'
import * as Redux from 'redux'
import { createStructuredSelector } from 'reselect'
import { push } from 'react-router-redux';

import BottomNav from '../../components/BottomNav'
import toJS from '../../HoC/toJS'
import { selectBottomNavSize } from '../../selectors/global';
import { withRouter } from 'react-router';

const mapStateToProps = createStructuredSelector({
	height: selectBottomNavSize(),
})

const mapDispatchToProps = ( dispatch: any ) => ({
	push: ( url: string ) => dispatch( push( url ) ),
})
export default Redux.compose(
	withRouter,
	connect(mapStateToProps, mapDispatchToProps),
	toJS
) (BottomNav) as any
