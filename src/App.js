import React, { Component } from 'react';
import './App.css';
import Secundomer from './Components/Secundomer2';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  constructor(props) {
    super(props);

    console.log("App js constructor ishladi");

    this.state = {
      isRunning: true // Tugmani boshlash/uchirish uchun holat
    };
  }
  

  handleStart = () => {
    this.setState({ isRunning: true });
  };

  handlePause = () => {
    this.setState({ isRunning: false });
  };

  handleRestart = () => {
    this.setState({ isRunning: false }, () => {
      // Restart tugmasini bosganda vaqt sanoqni boshidan boshlatamiz
      this.refs.timer.setState({
        second: 0,
        minute: 0,
        hour: 0,
        
      });
    });
  };

  render() {
    console.log("App js render ishladi");
    return (
      <div className="container py-5 text-center">
        <Secundomer
          hour={8}
          minute={50}
          second={59}
          isRunning={this.state.isRunning}
          ref="timer" // Referensiya berilishi
        />
        <div className='justify-content-between'>
          <button onClick={this.handlePause} className='me-3 btn btn-outline-danger text-dark' >Pause</button>
          <button onClick={this.handleStart} className='btn btn-outline-success text-dark'>Start</button>
          <button onClick={this.handleRestart} className='ms-3 btn btn-outline-primary text-dark'>Restart</button>
        </div>
      </div>
    );
  }
}

export default App;
