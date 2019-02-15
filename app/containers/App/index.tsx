/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */


import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Styled from 'styled-components';

import HomePage from '../HomePage';
import NotFoundPage from '../NotFoundPage/Loadable';
import Calculator from '../Calculator';
import Laws from '../Laws';
import Map from '../Map';
import TopBar from '../TopBar';
import BottomNav from '../BottomNav';
import SideBar from '../SideBar';

import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: {main: '#2f2f3f'},
    secondary: indigo,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

const AppWrapper = Styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  // grid-template-columns: 1fr 1fr;
  // background-color: #eee;
  min-height: 100vh;
`;

const SidebarWrapper = Styled.div`
  // width: 300px;
  // grid-row: 1/ span 3;
  // grid-column: 1/ span 1;
  // background-color: #fff;
  // padding: 1em;
`;

const ContentWrapper = Styled.div`
  // margin 0 auto;
  grid-row: 2/ span 1;
  // grid-column: 2/ span 1;
`;

const NavWrapper = Styled.div`
  grid-row: 1/ span 1;
  z-index: 1000;
`;

const FooterWrapper = Styled.div`
  grid-row: 3;
  height: 100%;
  // grid-column: 2/ span 1
  // background-color: #111;
  // padding: 1em;
`;

const config = require('../../config/global.json')

class App extends React.Component {
  render(){
    return (
      <AppWrapper>
        <NavWrapper>
          <TopBar theme={theme} />
        </NavWrapper>
        <SidebarWrapper theme={theme} />
        <ContentWrapper >
          <Switch>
            <Route exact path="/" component={() => <HomePage theme={theme}  />} />
            <Route exact path="/calculator" component={Calculator} theme={theme}/>
            <Route exact path="/map" component={Map} theme={theme}/>
            <Route exact path="/laws" component={Laws} theme={theme}/>
            <Route component={NotFoundPage} theme={theme}/>
          </Switch>
        </ContentWrapper>
        <FooterWrapper >
          <BottomNav theme={theme} {...config.bottomNav}/>
        </FooterWrapper>
        <SideBar theme={theme} {...config.sideBar} />
      </AppWrapper>
    );
  }
}


export default App