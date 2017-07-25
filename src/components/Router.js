import React, { Component } from 'react';
import Login from './Forms/Login.js';
import Register from './Forms/Register.js';

class Router extends Component {
    render() {
      let methods = this.props.methods
      var state = this.props.state;
      if (state === 'login') {
        return (
          <div className="overlay">
            <Login methods={methods} />
          </div>
        );
      } else if (state === 'register') {
        return (
          <div className="overlay">
            <Register methods={methods} />
          </div>
        );
      // } else if (this.state.inFocus[0] === 'merchant') {
        // return (
          // <div className="App">
            // <MerchantProfile info={this.state} />
          // </div>
        // );
      } else {
        return (null)
      }
    }
  }

export default Router
