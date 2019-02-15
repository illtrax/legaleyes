import * as React from 'react';
import styled from 'styled-components';
import RangeSlider from './RangeSlider'

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
`

const InputWrapper = styled.div`
  padding: 16px 32px;
`
// Set the input range track gradient
const InputSlider = styled(RangeSlider)`
	&::-webkit-slider-runnable-track {
    background: linear-gradient(to right, green ${() =>
      localStorage.getItem('dryPercentage')
    }%, grey ${() =>
      localStorage.getItem('dryPercentage')
    }%);
  }
`

class Calculator extends React.Component<CalculatorProps, any> {
  constructor(props: any) {
		super(props)
		this.state = this.initialState
		this.sliderChange = this.sliderChange.bind(this)
  };

  get initialState() {
		return {
      limit: 30,
      dry: 0,
      dryPercentage: 0,
      fresh: 0,
      edible: 0,
      liquid: 0,
      concentrate: 0,
      seeds: 0,
      plants: 0
		}
	}

    render() {
      // const { values } = this.props
      !localStorage.getItem('stash') && this.initializeLocalStorage()
        return (
            <Wrapper>
              <InputWrapper>
                <InputSlider
                  id='dried'
                  type='range'
                  min="0"
                  max={this.state.limit}
                  step="0.1"
                  value={this.state.dry}
                  onChange={this.sliderChange}
                  onMouseUp={this.sliderChange}
                />
              </InputWrapper>
              <InputWrapper>
                <InputSlider
                  id='dry'
                  type='range'
                  min="0"
                  max={this.state.limit}
                  step="0.1"
                  value={this.state.dry}
                  onChange={this.sliderChange}
                  onMouseUp={this.sliderChange}
                />
              </InputWrapper>
            </Wrapper>
        )
    }

    componentDidMount() {
      localStorage.getItem('stash') == 'true' && this.loadFromLocalStorage()
      this.props.setValue('dried', 'holding', 5)
      console.log( this.props )
    }

    initializeLocalStorage() {
      localStorage.setItem('stash', 'true')
      let state = Object.keys(this.state)
      for (var i = 0; i < state.length; ++i) {
        localStorage.setItem(state[i], this.state[state[i]])
      }
    }

    loadFromLocalStorage() {
      for (var i = 0; i < localStorage.length; ++i) {
        let localKey = Object.keys(localStorage)[i]
        let localValue = localStorage.getItem(localKey)
        this.setState({ [localKey]: localValue })
      }
    }

    sliderChange(e: any) {
      var id = e.target.id
      var value = e.target.value
      var max = e.target.max
      var percent = this.mapToPercent(value,max)
      this.setState({ [id]: value })
      this.setState({ [id+'Percentage']: percent })
      localStorage.setItem(id, value)
      localStorage.setItem(id+'Percentage', percent.toString())
    }

    mapToPercent(num:number, max:number) {
      return num * 100 / max;
    }

    clear() {
      localStorage.clear()
      this.setState(this.initialState)
      console.log('Local Storage Cleared')
    }
}

interface CalculatorProps {
    push: (url: string) => void
    setValue: (id: string, key: string, value: number) => void
    stash: any
}

export default Calculator
