import { connect } from 'react-redux'
import * as Redux from 'redux'
import { createStructuredSelector } from 'reselect'

import toJS from '../../HoC/toJS'
import { selectSideBarActive, selectSideBarDirection } from '../../selectors/sideBar';
import SideBar from '../../components/SideBar';
import { toggleSideBar } from '../../actions/sideBar';
import { push } from 'react-router-redux';
import { selectUserSettings } from '../../selectors/user';
import { setUser } from '../../actions/user';

const mapStateToProps = createStructuredSelector({
	active: selectSideBarActive(),
	direction: selectSideBarDirection(),
	user: selectUserSettings()
})

const mapDispatchToProps = ( dispatch: any ) => ({
	toggleSideBar: (direction:string) => dispatch( toggleSideBar.success( {direction} ) ),
	setUser: (user:any) => dispatch( setUser.success( {user} )),
	push: ( url: string ) => dispatch( push( url ) ),
}) as any


export default Redux.compose(
	connect(mapStateToProps,mapDispatchToProps),
	toJS
) (SideBar) as any
