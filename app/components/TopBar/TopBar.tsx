import * as React from 'react'
import styled from 'styled-components'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import SettingsIcon from '@material-ui/icons/Settings';
import { Theme, WithTheme, withTheme } from '@material-ui/core';

const Wrapper = styled.div`
`
const Root = styled.div`
  flex-grow: 1;
`
const StyledAppBar = styled(AppBar)`
`
const MenuTypography = styled(Typography)`
  margin-left: -12px;
  margin-right: 20px;
  flex-grow: 1;
  text-align: left;
`
class TopBar extends React.Component<TopBarProps & WithTheme> {

  toggleSideBarHandler = (props: any) => { 
    this.props.toggleSideBar(props || 'left')
  }

	pushPage = (link: any) => {
		this.props.push(link)
  }

	render() {
    const { theme } = this.props;
    const primaryText = theme.palette.getContrastText;
    const primaryColor = theme.palette.primary.main;
    
      const styles = ({
      primaryTopNav: {
        backgroundColor: primaryColor,
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
        color: theme.palette.common.white,
        height: `${theme.spacing.unit * 10}px`
      },
      primaryNavButton: {
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
        color: primaryText,
        maxWidth: `100%`
      },
      })
		return (
			<Wrapper>
        <Root>
          <StyledAppBar style={styles.primaryTopNav} position="static">
            <Toolbar>
              <Button style={styles.primaryNavButton as any} className='left' color="inherit" aria-label="Menu" onClick={()=> {this.toggleSideBarHandler('left')}}>
                <MenuIcon />
              </Button>
              <MenuTypography onClick={()=>this.props.push('/')} variant="title" color="inherit">
                LegalEyes
              </MenuTypography>
              <Button style={styles.primaryNavButton as any} className='right' color="inherit" aria-label="Settings" onClick={() => {this.toggleSideBarHandler('right')}}>
                <SettingsIcon/>
              </Button>
            </Toolbar>
          </StyledAppBar>
        </Root>
			</Wrapper>
		)
	}
}

interface TopBarProps {
  toggleSideBar: (direction: string) => void
  sideBarActive: boolean
  push: Function
  theme: Theme
}
export default withTheme()(TopBar)

// export default withStyles(styles)(TopBar as any);

// export default withStyles(styles)<TopBarProps.Props>(TopBar);
