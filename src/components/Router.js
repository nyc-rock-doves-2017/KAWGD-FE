import React, { Component } from 'react';
import Login from './Forms/login.js';
import Register from './Forms/Register.js';
import MerchantProfile from './MerchantActivity/MerchantProfile.js';

class Router extends Component {
    render() {
      let methods = this.props.methods
      var state = this.props.state;
      if (state[0] === 'login') {
        return (
          <div className="overlay">
            <Login methods={methods} />
          </div>
        );
      } else if (state[0] === 'register') {
        return (
          <div className="overlay">
            <Register methods={methods} />
          </div>
        );
      } else if (state[0] === 'merchant') {
        return (
          <div className="App">
            <MerchantProfile state={state} methods={methods} />
          </div>
        );
      } else {
        return (null)
      }
    }
  }

export default Router
