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
const DiredInputSlider = styled(RangeSlider)`
	&::-webkit-slider-runnable-track {
    background: linear-gradient(to right, green ${() =>
      localStorage.getItem('driedPercentage')
    }%, grey ${() =>
      localStorage.getItem('driedPercentage')
    }%);
  }
`
// Fresh
const FreshInputSlider = styled(RangeSlider)`
	&::-webkit-slider-runnable-track {
    background: linear-gradient(to right, green ${() =>
      localStorage.getItem('freshPercentage')
    }%, grey ${() =>
      localStorage.getItem('freshPercentage')
    }%);
  }
`

class Calculator extends React.Component<CalculatorProps, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      ProductTypes: [],
    }
    this.sliderChange = this.sliderChange.bind(this)
  };


  render() {
    const { maxHold, dried, fresh } = this.props.stash
    // console.log(dried)
    !localStorage.getItem('stash') && this.initializeLocalStorage()
    return (
      <Wrapper>
        <InputWrapper>
          <DiredInputSlider
            id='dried'
            type='range'
            min="0"
            max={maxHold}
            step="0.1"
            value={dried.holding}
            onChange={this.sliderChange}
            onMouseUp={this.sliderChange}
          />
        </InputWrapper>
        <InputWrapper>
          <FreshInputSlider
            id='fresh'
            type='range'
            min="0"
            max={maxHold*fresh.ratio}
            step="0.1"
            value={fresh.holding}
            onChange={this.sliderChange}
            onMouseUp={this.sliderChange}
          />
        </InputWrapper>
      </Wrapper>
    )
  }

  componentDidMount() {
    localStorage.getItem('stash') == 'true' && this.loadFromLocalStorage()
    // this.props.setValue('dried', 'holding', 6)
    // console.log( localStorage.getItem('driedPercentage') )
  }

  initializeLocalStorage() {
    console.log('initializeLocalStorage')
    const { maxHold, maxPlant, holding, ...stash} = this.props.stash
    let stashKeys = Object.keys(stash)

    for (var i = 0; i < stashKeys.length; ++i) {
      let key = stashKeys[i]
      let value = this.props.stash[key].holding
      let percent = key+'Percentage'

      localStorage.setItem(key, value)
      localStorage.setItem(percent, value)
    }
  }

  loadFromLocalStorage() {
    console.log('loadFromLocalStorage')
    const { maxHold, maxPlant, holding, ...stash} = this.props.stash
    let stashKeys = Object.keys(stash)

    for (var i = 0; i < stashKeys.length; ++i) {
      let id = stashKeys[i]
      console.log(id)
      let value = JSON.parse(localStorage.getItem(id) || '0')
      this.props.setValue(id, 'holding', value)
      console.log(value)
    }
  }

  sliderChange(e: any) {
    localStorage.setItem('stash', 'true')
    var id = e.target.id
    var value = e.target.value
    var max = e.target.max
    var percent = this.mapToPercent(value,max)
    this.props.setValue(id, 'holding', value)
    this.setState({ [id+'Percentage']: percent })
    localStorage.setItem(id, value)
    localStorage.setItem(id+'Percentage', percent.toString())
  }

  mapToPercent(num:number, max:number) {
    return num * 100 / max;
  }

  clear() {
    // localStorage.clear()
    // this.setState(this.initialState)
    // console.log('Local Storage Cleared')
  }
}

interface CalculatorProps {
    push: (url: string) => void
    setValue: (id: string, key: string, value: number) => void
    stash: any
    fresh: any
    productTypes: any
}

export default Calculator
