/**
 *
 * SettingsList
 *
 */

import * as React from 'react';
import { List, ListItem, ListItemIcon, Icon, ListItemText, Theme, Typography } from '@material-ui/core';
import SettingsCard from '../SettingsCard'


/* eslint-disable react/prefer-stateless-function */
class SettingsList extends React.Component<SettingsListProps> {
  handleClick = (item:any) => {
    console.log(item)
  }
  render() {
    const { theme , settings } = this.props;
    const primaryColor = theme.palette.primary.main;
    
    const styles = ({
      primaryList: {
        backgroundColor: primaryColor,
        color: theme.palette.common.white,
        minHeight: `100vh`,
        display: `block`,
        width: `300px`,
        margin: 0,
        padding: 0
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
        <SettingsCard theme={theme} {...this.props}/>
        {settings && settings.map((item: any, i: number) => {
            return (
              <ListItem
                style={styles.primaryListItemWrap}   
                key={i} 
                button
                onClick={() => this.handleClick(item)}>
                <ListItemIcon style={styles.primaryListItem}> 
                    <Icon>{item.icon}</Icon>
                </ListItemIcon>
              <ListItemText 
                style={styles.primaryListItem} 
                primary={<Typography style={styles.primaryListItem}>{item.title}</Typography>} />
              </ListItem>
            )
        })}
        </List>
    )
  }
}

interface SettingsListProps {
  theme: Theme
  settings: Array<any>
  user:any
  setUser: (user: any) => void
}

export default SettingsList
