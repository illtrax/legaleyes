/**
 *
 * Slider
 *
 */
import React from 'react';

import styled from 'styled-components';
// import InputSlider from './InputSlider';
import { Button, Slider } from '@blueprintjs/core';

import '@blueprintjs/core/lib/css/blueprint.css';
import './styles.css';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const InputSlider = styled.input`
	padding: 0.5em;
	margin: 0.5em;
	// background: grey;
	border: none;
	border-radius: 3px;
	&::-webkit-slider-thumb {
		width: 24px;
		height: 24px;
		margin-top: -9px;
		background: #ffffff;
		border-radius: 3px;
		cursor: pointer;
		-webkit-appearance: none;
		-webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2);
		box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2);
	}
	&::-webkit-slider-runnable-track {
		height: 6px;
		cursor: pointer;
		animate: 1s;
		//background: grey;
		background: linear-gradient(to right, red 50%,blue 50%);
	}
	// &:focus::-webkit-slider-runnable-track {
	// 	background: red;
	//}
`;

const Wrapper = styled.div`
	// background: grey;
`;

class RangeSlider extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.initialState;
		
		this.sliderChange = this.sliderChange.bind(this);
	};

	get initialState() {
		return {
			Dry: 0,
			Test: 0,
			Test1: 0
		};
	};

	
	render() {
		let clearStorage = <FormattedMessage {...messages.clearStorage} />	
		return (
			<div>
			<Wrapper>
				<input 
					value={this.state.Test}
				/>
				<InputSlider {...this.props}
					id='Test'
					type='range'
					min="0" 
					max="100" 
					step="0.1"
					value={this.state.Test}
					onChange={this.sliderChange}
					onRelease={this.sliderChange}
				/>
				<InputSlider
					id='Test1'
					type='range'
					min="10" 
					max="50" 
					step="1"
					value={this.state.Test1}
					onChange={this.sliderChange}
					onRelease={this.sliderChange}
				/>
			</Wrapper>
			<Button
				icon="refresh"
				intent="danger"
				onClick={() => {this.clear()}}
			>
				{clearStorage}
			</Button>
			</div>
		);
	};

	componentDidMount() {
		localStorage.length > 0 && this.loadFromLocalStorage();
		
		//document.querySelector("input#Test[type=range]::-webkit-slider-runnable-track").css('background','red');
		// console.log(this.state.Test);
		// console.log(document.querySelector("input#Test1[type=range]"))
	};
	
	loadFromLocalStorage() {
		for (var i = 0; i < localStorage.length; ++i) {
			let localKey = Object.keys(localStorage)[i];
			let localValue = localStorage.getItem(localKey);
			this.setState({ [localKey]: localValue });
			
			// document.querySelector('input#'+localKey+'[type=range]::-webkit-slider-runnable-track').style.background = ' background:linear-gradient(to right, purple '
			// +localValue+'%, #ccc '
			// +localValue+'%); }';
		};
	};
	
	sliderChange(e) {
		var id = e.target.id;
		var value = e.target.value;
		
		this.setState({ [id]: value });
		localStorage.setItem(id, value);
		document.styleSheets[0].insertRule('input#Test[type=range]::-webkit-slider-runnable-track { background: linear-gradient(to right, black '+value+'%,blue 50%); }', 0);



		// document.styleSheets[0].insertRule('input#Test[type=range]::-webkit-slider-runnable-track { background: red; }', 0);
	};
	
	// updateColor(id, value) {
	// 	console.log('updateColor');
	// 	// document.styleSheets[0].updateRule(
	// 	// 	'input#'+id+'[type=range]::-webkit-slider-runnable-track'
	// 	// 	+'{ background:linear-gradient(to right, purple '
	// 	// 	+value+'%, #ccc '
	// 	// 	+value+'%); }', 0
	// 	// );
	// };

	clear() {
		localStorage.clear();
		this.setState(this.initialState);
		console.log('Local Storage Cleared');
	};
}

// RangeSlider.propTypes = {
//   Dry: PropTypes.number,
//   // handleRoute: PropTypes.func,
//   // href: PropTypes.string,
//   // onClick: PropTypes.func,
//   // children: PropTypes.node.isRequired,
//   //   handleRoute: PropTypes.func,
//   // href: PropTypes.string,
//   // onClick: PropTypes.func,
//   // children: PropTypes.node.isRequired,
// };

export default RangeSlider;
