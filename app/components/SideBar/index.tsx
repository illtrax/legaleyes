import * as React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
//import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import Icon from '@material-ui/core/Icon';
import NavigationList from '../NavigationList'
import SettingsList from '../SettingsList'
import { Theme } from '@material-ui/core';

class SideBar extends React.Component<SideBarProps> {
    toggleDrawer = (side: string, open: boolean) => () => {
        this.props.toggleSideBar(side)
    }

    render() {
        
    return (
        <div>
        <SwipeableDrawer
            open={(this.props.direction=='left' && this.props.active) ? true : false }
            onClose={this.toggleDrawer('left', false)}
            onOpen={this.toggleDrawer('left', true)}
        >
            <div
                tabIndex={0}
            >
            <NavigationList {...this.props}/>
            </div>
        </SwipeableDrawer>
        <SwipeableDrawer
            anchor="right"
            open={(this.props.direction=='right' && this.props.active) ? true : false}
            onClose={this.toggleDrawer('right', false)}
            onOpen={this.toggleDrawer('right', true)}
        >
            <div
                tabIndex={0}
            >
            <SettingsList {...this.props}/>
            </div>
        </SwipeableDrawer>
        </div>
    );
    }
}

interface SideBarProps {
    direction: string,
    items: any,
    active: boolean;
	toggleSideBar: (direction:string) => void,
    key: any,
    navigation: Array<any>
    settings: Array<any>
    theme: Theme
    user:any
    setUser: (user: any) => void
    push: (id:string) => void
}

export default SideBar
