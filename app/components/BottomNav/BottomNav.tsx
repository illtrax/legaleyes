import * as React from 'react'
//import styled from 'styled-components'
//import BottomNavItem from './BottomNavItem'
import BottomNavigation from '@material-ui/core/BottomNavigation';
// import AccountBalance from '@material-ui/icons/AccountBalance';
// import LocationOn from '@material-ui/icons/LocationOn';
// import Tune from '@material-ui/icons/Tune';
import { BottomNavigationAction, Icon, Theme, withTheme, WithTheme } from '@material-ui/core';

// const Wrapper = styled(BottomNavigation)`
// 	background: #444444 !important;
// 	color: #eeeeee !important;
// ` as any


class BottomNav extends React.Component< BottomNavProps & WithTheme> {
	state = {
		active: this.props.location.pathname
	}
	setActiveTab = (event: any,value:any ) => {
		console.log(event)
		this.setState({ active: value })
		this.props.push(value)
	}
	render() {
	const { active } = this.state;
	const { tabs , theme } = this.props;
	const currentLocation = this.props.location.pathname
	console.log(currentLocation)
	console.log(tabs) 
//	const primaryText = theme.palette.text.primary;
//	const primaryColor = theme.palette.primary.main;

	const styles = {
	primaryNav: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.white,
		height: `${theme.spacing.unit * 10}px`
	},
	primaryNavItem: {
		padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
		color: theme.palette.common.white,
		maxWidth: `100%`
	},
	}
	return (
		<BottomNavigation
		value={active}
		showLabels
		onChange={this.setActiveTab}
		style={styles.primaryNav}
		>
		{ tabs.map((item: any, key: number) => {
			console.log(currentLocation == item.url)
			return(
			<BottomNavigationAction
				style={styles.primaryNavItem}
				{...item}
				key={key}
				icon={<Icon>{item.icon}</Icon>}
				label={item.title}
				value={item.url}
				selected={currentLocation == item.url ? 'true' : 'false'}
			/>
		)}) }
		</BottomNavigation>
	);
	}
}

interface BottomNavProps {
	push: (url: string) => void
	tabs: Array<any>
	location: any
	theme: Theme
}

export default withTheme()(BottomNav)
