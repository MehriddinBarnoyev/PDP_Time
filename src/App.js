// import logo from './logo.svg';
import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Component } from 'react';
import Secundomer from './Components/Secundomer2';

class App extends Component {
  constructor(props) {
    super(props)

    console.log("App js constructor ishladi");
  }

  render() {
    console.log("App js render ishladi");
    return (

      <div className="container py-5 text-center">
        <Secundomer hour={2} minute={20} second={0}></Secundomer>
        <div className='justify-content-between'>
          <button  className='me-3 btn btn-outline-danger text-dark'>Pause</button>
          <button className='btn btn-outline-success text-dark'>Start</button>
          <button  className='ms-3 btn btn-outline-primary text-dark'>Restart</button>

        </div>

      </div>
    );
  }
}

export default App;
