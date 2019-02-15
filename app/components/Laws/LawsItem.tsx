import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: ${(props: any) => props.visible ? 'block' : 'none'};
    height: 50px;
    padding-left: 20px;
    padding-right: 20px;
` as any
const Icon = styled.div`
    height: 100%;
    width: 50px;
    display: inline;
`
const Title = styled.h4`
    display: inline-block;
    padding-left: 10px;
`
const Edit = styled.div`
    display: ${(props: any) => props.visible ? 'inline-block' : 'none'};
    height: 100%;
    // width: 50px;
    float: right;
` as any

class LawsItem extends React.Component<LawsItemProps> {
    itemClicked = () => {
        const { enabled } = this.props
        if (this.props.editMode) {
            this.props.toggle(this.props.id, !enabled)
        } else {
            this.props.pushPage(this.props.url)
        }
    }
    render() {
        const {
            name,
            icon,
            editMode,
            enabled
        } = this.props
        return(
            <Wrapper
                visible={editMode ? true : enabled}
                onClick={this.itemClicked}
            >
                <Icon>
                    {icon}
                </Icon>
                <Title>
                    {name}
                </Title>
                <Edit
                    visible={editMode}
                >
                    {enabled ? 'On' : 'Off'}
                </Edit>
            </Wrapper>
        )
    }
}

interface LawsItemProps {
    id: string
    name: string
    icon: string
    url: string
    editMode: boolean
    enabled: boolean
    toggle: (url: string, value: boolean) => void
    pushPage: (url: string) => void
}

export default LawsItem
