import React, { Component } from 'react';
import Login from './Forms/Login.js';
import Register from './Forms/Register.js';
import MerchantProfile from './MerchantActivity/MerchantProfile.js';
import OrderShow from './Orders/ordershow.js';
import NewOrder from './Forms/NewOrder.js';

class Router extends Component {
  render() {
    let methods = this.props.methods
    var state = this.props.state;
    var inFocus = this.props.state.inFocus
    if (inFocus[0] === 'login') {
      return (
        <div className="overlay">
          <Login state={state} methods={methods} />
        </div>
      );
    } else if (inFocus[0] === 'register') {
      return (
        <div className="overlay">
          <Register state={state} methods={methods} />
        </div>
      );
    } else if (inFocus[0] === 'merchant') {
      if (inFocus.length === 1) {
        return (
          <div className="App">
            <MerchantProfile state={state} methods={methods} />
          </div>
        );
      } else if (inFocus[1] === 'addOrder') {
        return (
          <div className="overlay">
            <MerchantProfile state={state} methods={methods} />
            <NewOrder state={state} methods={methods} />
          </div>
        )
      } else if (inFocus[1] === 'order') {
        return (
          <div className="overlay">
            <MerchantProfile state={state} methods={methods} />
            <OrderShow state={state} methods={methods} />
          </div>
        )
      } else {
        return (null)
      }
    } else {
      return (null)
    }
  }
}

export default Router
