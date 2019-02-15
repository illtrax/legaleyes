/**
 *
 * NavigationList
 *
 */

import * as React from 'react';
import { Icon, Theme, Typography, Card, CardHeader, Avatar, withStyles } from '@material-ui/core';

const classStyles = (theme: Theme) => ({
    focused: {
        color: theme.palette.primary.light
    }
})

/* eslint-disable react/prefer-stateless-function */
class NavigationCard extends React.Component<NavigationCardProps> {

    render() {
        const { theme } = this.props;
        const styles = ({
            primaryCard: {
                backgroundColor: theme.palette.primary.dark,
                display: `block`,
                width: `300px`,
                padding: `${theme.spacing.unit*2}px`,
            },
            avatar: {
                backgroundColor: this.props.user && this.props.user.validated ?  theme.palette.secondary.light : theme.palette.error.light,
            },
            title:{
                color: theme.palette.getContrastText(theme.palette.primary.dark)            },
            textField: {
                marginBottom: `${theme.spacing.unit*2}px`,
                marginLeft: `${theme.spacing.unit*2}px`,
                marginRight:`${theme.spacing.unit*2}px`,
                display: 'flex',
                color: theme.palette.getContrastText(theme.palette.primary.dark)
            },
        })
        return (
            <Card style={styles.primaryCard}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Legal Status" style={styles.avatar}>
                            <Icon>{ this.props.user && this.props.user.validated  ? 'check' : 'warning'}</Icon>
                        </Avatar>
                    }
                    title={<Typography style={styles.title}>{ this.props.user && this.props.user.validated ?  'You are legal.': 'You may not be legal.'}</Typography>}
                />
            </Card>
        )
    }
}

interface NavigationCardProps {
    theme: Theme
    classes: any
    user:any
}

export default withStyles(classStyles)(NavigationCard as any) as any
