import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header-Login-Register-CurrentUser/Header.js';
import MerchantProfile from './components/MerchantActivity/MerchantProfile.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      auth: null
    }
  }

  render() {
    return (
      // <div className="App">
      //   <Header auth={this.state.auth} />
      // </div>
      <div>
        <MerchantProfile/>
      </div>
    );
  }
}

export default App;
