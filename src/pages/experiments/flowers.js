import React from 'react'
import Template from '../../components/template'
import './Flowers.css'
import Flower1 from './fl1.png'
import GlobalTemperature from './global-temperature.json'

export default class FlowersExperiment3 extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      data: [],
      city: 'London',
      count: 80,
      year: 0,
      highest: 0,
      lowest: 0
    }
  }

  updateCount() {

    if (this.state.count < GlobalTemperature.length )
      this.setState({
        count: this.state.count + 1,
        year: GlobalTemperature[this.state.count]['year'],
        highest: GlobalTemperature[this.state.count]['highest'],
        lowest: GlobalTemperature[this.state.count]['lowest']
      })
    else
      this.setState({ count: 0})

  }

  componentDidMount() {
    this.updateCount()
    this.intervalId = setInterval(() => this.updateCount(), 800)
  }

  getTemperatureSign() {
    if (this.state.highest >= 0) {
      return ''
    } else
      return '-'
  }

  componentWillUnmount(){
     clearInterval(this.intervalId)
  }

  getStyleForImage(key) {

    return {
      filter: 'saturate('+ GlobalTemperature[this.state.count][key] + ')',
      backgroundImage: 'url(' + Flower1 + ')'}
  }

  render() {
    return(
      <Template>
        <div className="grid-experiment-full-image" style={{backgroundImage: 'url(' + Flower1 + ')'}}>
        <div className="flowers-explanation">Weather permitting reflects on Global Climate Change. And how human impact is affecting the world we experiencing.</div>
        <div className="flowers-year">{this.state.year}</div>
        <div className="flowers-highest">
          <span className="highest-temperature-sign">{(this.state.highest >= 0) ? '+' : '-'}</span>
          <span className="highest-temperature">{Math.abs(this.state.highest).toFixed(2)}°C</span>
        </div>
        <div className="opacity-layer" style={{opacity: this.state.highest}}></div>
        </div>
    </Template>
    )
  }
}