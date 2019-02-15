import * as React from 'react'
import styled from 'styled-components'
import LawsItem from './LawsItem';
import AccountBalance from '@material-ui/icons/AccountBalance';

const Wrapper = styled.div`
    // height: 50px;
    background: #dddddd;
    color: #222222;
`

const TopWrapper = styled.div`
    // height: 50px;
    padding: 0.5em 1.5em;
    width: 100%;
`

const Title = styled.h3`
    display: inline;
    height: 100%;
    width: 100%;
    padding-left: 100px;
    vertical-align: middle;
    margin: 0;
`
const Options = styled.div`
    display: inline;
    height: 100%;
    // width: 50px;
    padding-right: 20px;
    float: right;
`
const List = styled.div`
    // height: calc(100% - 50px);
    background: #ffffff;
`

class Laws extends React.Component<LawsProps> {
    state = {
        editMode: false
    }
	pushPage = (url: string) => {
		this.props.push('/laws' + url)
    }
    toggleEdit = () => {
        const current = !this.state.editMode;
        this.setState({ editMode: current })
    }
    toggleEnable = (id: string, value: boolean) => {
        this.props.setVisibleLaw(id, value)
    }
    render() {
        const { editMode } = this.state
        const { laws } = this.props
        const list = [];
        for (let law in laws) {
            list.push({
                ...laws[law],
                id: law
            })
        }
        return(
            <Wrapper>
                <TopWrapper>
                    <Title>
                        JURISDICTIONS
                    </Title>
                    <Options>
                        <AccountBalance
                            onClick={() => this.toggleEdit()}
                        />
                    </Options>
                </TopWrapper>
                <List>
                    { list.map((item: any, key: any) => {
                        return (
                            <LawsItem
                                key={key}
                                {...item}
                                editMode={editMode}
                                toggle={this.toggleEnable}
                                pushPage={this.pushPage}
                            />
                        )
                    }) }
                </List>
            </Wrapper>
        )
    }
}

interface LawsProps {
    push: (url: string) => void
    setVisibleLaw: (id: string, value: boolean) => void
    items?: any
    laws: any
}

export default Laws
