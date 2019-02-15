import * as React from 'react'
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Typography, Theme, WithTheme , withTheme } from '@material-ui/core';



class HomePage extends React.Component<HomePageProps & WithTheme> {
	render() {
		const { theme } = this.props;
		console.log(theme)

		const styles = {
			root: {
			  padding: `${theme.spacing.unit*2}px ${theme.spacing.unit*6}px`,
			  background: `${theme.palette.background}`,
			  minHeight: `100%`
			},
			header:{
				padding: `${theme.spacing.unit*2}px 0`,
				color: `${theme.palette.primary.light}`
			},
			Subheader:{
				padding: `${theme.spacing.unit}px 0`,
				color: `${theme.palette.text.primary}`
			}
		  }
		return (
			<div style={styles.root}>
				<Typography style={styles.header} variant="display2">
					<FormattedMessage {...messages.header} />
				</Typography>
				<Typography>
					<FormattedMessage {...messages.body} />
				</Typography>
			</div>
		)
	}
}


interface HomePageProps{
	theme:Theme
} 

export default withTheme()(HomePage)