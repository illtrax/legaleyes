import * as React from 'react'
import styled from 'styled-components'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const Wrapper = styled(BottomNavigationAction)`
	max-width: 100% !important;
	:hover {
		color: #ffffff;
	}
	${(props: any) => props.active && 'color: #ffffff !important;'}
` as any

function BottomNavItem(props: BottomNavItemProps) {
	const Component = props.icon
	return (
		<Wrapper
			onClick={(e: any) => props.onClick(props.url)}
			active={props.active? 'true' : undefined}
			label={props.title}
			icon={<Component />}
		/>
	)
}

interface BottomNavItemProps {
	title?: string
	url?: string
	onClick: (e: any) => void
	icon?: any
	active?: boolean
}

export default BottomNavItem
