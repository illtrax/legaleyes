/**
 *
 * NavigationList
 *
 */

import * as React from 'react';
import { List, ListItem, ListItemIcon, Icon, ListItemText, Theme, Typography } from '@material-ui/core';
import NavigationCard from '../NavigationCard'

/* eslint-disable react/prefer-stateless-function */
class NavigationList extends React.Component<NavigationListProps> {
    handleClick = (url:any) => {
        console.log(url)
        this.props.push(url)
        this.props.toggleSideBar('left')
    }
    render() {
        const { theme , navigation } = this.props;
        const primaryColor = theme.palette.primary.main;
        const styles = ({
            primaryList: {
            backgroundColor: primaryColor,
            color: theme.palette.common.white,
            minHeight: `100vh`,
            display: `block`,
            width: `300px`,
            padding: `0`
            },
            primaryListItemWrap: {
                padding: `${theme.spacing.unit*2}px ${theme.spacing.unit*4}px`,
            },

            primaryListItem: {
            color: theme.palette.common.white,
            }
        })
        return (
            <List style={styles.primaryList}>
            <NavigationCard {...this.props}/>
            <ListItem 
                style={styles.primaryListItemWrap}  
            >
                <ListItemText 
                    style={styles.primaryListItem} 
                    primary={<Typography variant={'title'} style={styles.primaryListItem}>Menu</Typography>} 
                />
            </ListItem>
            {navigation && navigation.map((item: any, i: number) => {
                return (
                    <ListItem 
                        button
                        key={i} 
                        style={styles.primaryListItemWrap}  
                        onClick={() => this.handleClick(item.url)}
                    >
                        <ListItemIcon style={styles.primaryListItem}>
                            <Icon>{item.icon}</Icon>
                        </ListItemIcon>
                        <ListItemText 
                            style={styles.primaryListItem} 
                            primary={<Typography style={styles.primaryListItem}>{item.title}</Typography>} 
                        />
                    </ListItem>
                )
            })}
            </List>
        );
    }
}

interface NavigationListProps {
    theme: Theme
    navigation: Array<any>
    push: (url: string) => void
    toggleSideBar: (direction:string) => void
    user: any
}

export default NavigationList;
