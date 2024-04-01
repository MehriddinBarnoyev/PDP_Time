import React, { Component } from 'react';

class Secundomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: this.props.hour,
      minute: this.props.minute,
      second: this.props.second,
    };
    this.timerInterval = null;
  }

  componentDidMount() {
    if (this.props.isRunning) {
      this.startTimer();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isRunning !== this.props.isRunning) {
      if (this.props.isRunning) {
        this.startTimer();
      } else {
        this.stopTimer();
      }
    }
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      if (this.state.second === 0 && this.state.minute === 0 && this.state.hour === 0) {
        this.stopTimer();
        return;
      }
      let second = this.state.second;
      let minute = this.state.minute;
      let hour = this.state.hour;
      
      if (second === 0) {
        if (minute === 0) {
          hour--;
          minute = 59;
        } else {
          minute--;
        }
        second = 59;
      } else {
        second--;
      }
      
      this.setState({ hour, minute, second });
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timerInterval);
  }

  render() {
    const { hour, minute, second } = this.state;
    return (
      <div>
        <h1 className='h1 text-bolt'>{hour < 10 ? '0' + hour : hour} : {minute < 10 ? '0' + minute : minute} : {second < 10 ? '0' + second : second}</h1>
      </div>
    );
  }
}

export default Secundomer;
