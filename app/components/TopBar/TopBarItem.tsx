import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.li`
	display: inline-block;
	width: ${(props: any) => props.width || 'auto' };
	height: 100%;
	padding: 0 15px;
	vertical-align: middle;
	${(props: any) => props.align && 'text-align: ' + props.align};
	:hover {
		color: #111111;
		background: #dddddd;
	}
` as any
const ItemTitle = styled.h3`
	display: inline;
	margin: 0;
	vertical-align: middle;
`

function TopBarItem(props: TopBarItemProps) {
	return (
		<Wrapper
			onClick={(e: any) => props.onClick(props.link || '/')}
			width={props.width}
			align={props.align}
		>
			<ItemTitle>
				{props.title}
			</ItemTitle>
		</Wrapper>
	)
}

interface TopBarItemProps {
	title?: string
	link?: string
	onClick: (e: any) => void
	icon?: string
	width?: string
	align?: string
}

export default TopBarItem
