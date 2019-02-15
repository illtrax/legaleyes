/**
 * Input[type=range]
 */
import styled from 'styled-components';

const RangeSlider = styled.input`
  -webkit-appearance: none;
  // background: grey;
  border: none;
  border-radius: 3px;
  width: 100%;
  -webkit-animate: 1s;
  &::-webkit-slider-thumb{
    width: 16px;
    height: 16px;
    margin-top: -5px;
    background: green;
    border-radius: 8px;
    cursor: pointer;
    -webkit-appearance: none;
    -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2);
    box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2);
    -webkit-animate: 1s;
  }
  &::-webkit-slider-runnable-track {
    height: 6px;
    cursor: pointer;
    -webkit-animate: 1s;
    border-radius: 3px;
  }
  &:focus::-webkit-slider-thumb {
    height: 32px;
    margin-top: -13px;
    border-radius: 16px;
    background: white;
  }
  &:focus {
    outline-width: 0px;
  }
`

export default RangeSlider
