/**
 *
 * NavigationList
 *
 */

import * as React from 'react';
import { Icon, Theme, Typography, Card, CardHeader, Avatar, TextField, withStyles, Select, FormControl, InputLabel, MenuItem, Input, InputAdornment, IconButton } from '@material-ui/core';

const classStyles = (theme: Theme) => ({
    focused: {
        color: theme.palette.primary.light
    }
})

/* eslint-disable react/prefer-stateless-function */
class SettingsCard extends React.Component<SettingsCardProps> {
    state={
        userType: '',
        geolocate: false,
        location: '',
        dateOfBirth: '',
        validated: this.Validation()
    }
    handleChange = (event:any) => {
        console.log(event.target.name)
        this.setState({ [event.target.name]: event.target.value}, () => this.Validation());
    };
    handleClickGeolocate = () => {
        if(this.state.geolocate){
            this.setState({geolocate: false},() => this.Validation())
        }else{
            this.setState({geolocate: true, location: 'Fredericton, N.B.'},() => this.Validation())
        }
    }
    Validation () {
        if(this.state && this.state.userType && this.state.location  && this.state.dateOfBirth ){
            this.setState({ validated: true}, () => this.props.setUser(this.state))
        }
        else{
            this.setState({ validated: false}, () => this.props.setUser(this.state))
        }
    }
    componentDidMount(){
        if(this.props.user){
            this.setState({...this.props.user})
        }
    }
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
                backgroundColor: this.state.validated ? theme.palette.secondary.light : theme.palette.error.light,
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
                        <Avatar aria-label="Recipe" style={styles.avatar}>
                            <Icon>{this.state.validated ? 'check' : 'warning'}</Icon>
                        </Avatar>
                    }
                    title={<Typography style={styles.title}>{this.state.validated ? 'You are legal.' : 'Enter information below to see if you are legal.'}</Typography>}
                />
                <TextField
                    id="date"
                    label="Date of Birth"
                    type="date"
                    name='dateOfBirth'
                    value={this.state.dateOfBirth}
                    style={styles.textField}
                    onChange={this.handleChange}
                    InputLabelProps={{
                        shrink: true,
                        style: styles.title,
                    }}
                    InputProps={{
                        style: styles.title
                    }}
                />
                <FormControl style={styles.textField}>
                    <InputLabel style={styles.title} htmlFor="userType">User Type</InputLabel>
                    <Select
                        style={styles.title}
                        value={this.state.userType}
                        onChange={this.handleChange}
                        name='userType'
                        inputProps={{
                            name: 'userType',
                            id: 'userType',
                            style: styles.title
                        }}
                    >
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        <MenuItem value={'recreational'}>Recreational</MenuItem>
                        <MenuItem value={'medical'}>Medical</MenuItem>
                    </Select>
                </FormControl>
                <FormControl style={styles.textField}>
                <InputLabel style={styles.title} htmlFor="location">Location</InputLabel>
                <Input
                    style={styles.title}
                    id="location"
                    type='text'
                    name='location'
                    value={this.state.location}
                    onChange={this.handleChange}
                    disabled={this.state.geolocate? true : false}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="Use Geolocation"
                        onClick={this.handleClickGeolocate}
                        style={styles.title}
                        >
                        {this.state.geolocate ? <Icon>location_on</Icon> : <Icon>location_off</Icon>  }
                        </IconButton>
                    </InputAdornment>
                    }
                />
                </FormControl>
            </Card>
        )
    }
}

interface SettingsCardProps {
    theme: Theme
    classes: any
    user: any
    setUser: (user:any) => void,
}

export default withStyles(classStyles)(SettingsCard as any) as any
