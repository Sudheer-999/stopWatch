import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {currentSeconds: 0}

  componentWillUnmount() {
    this.stopTimer()
  }

  startCountDown = () => {
    this.setState(prevState => ({currentSeconds: prevState.currentSeconds + 1}))
  }

  stopTimer = () => {
    clearInterval(this.intervalId)
  }

  onStop = () => {
    this.stopTimer()
  }

  onReset = () => {
    this.setState({currentSeconds: 0})
    this.stopTimer()
  }

  onStart = () => {
    this.intervalId = setInterval(() => {
      this.startCountDown()
    }, 1000)
  }

  timeFormat = () => {
    const {currentSeconds} = this.state

    const seconds = Math.floor(currentSeconds % 60)
    const minutes = Math.floor(currentSeconds / 60)

    const secondsToString = seconds > 9 ? seconds : `0${seconds}`
    const minutesToString = minutes > 9 ? minutes : `0${minutes}`

    return `${minutesToString}:${secondsToString}`
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="main-head">Stopwatch</h1>
        <div className="time-con">
          <div className="stopwatch-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="stop-watch"
            />
            <p className="timer-text">Timer</p>
          </div>
          <h1 className="clock-time">{this.timeFormat()}</h1>
          <div className="btn-container">
            <button type="button" className="btn green" onClick={this.onStart}>
              Start
            </button>
            <button type="button" className="btn red" onClick={this.onStop}>
              Stop
            </button>
            <button type="button" className="btn orange" onClick={this.onReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
