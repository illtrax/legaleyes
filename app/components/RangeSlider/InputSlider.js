/**
 * Input[type=range]
 */

import styled from 'styled-components';

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

export default InputSlider;


