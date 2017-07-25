import React, { Component } from 'react';
import './App.css';
import Router from './components/Router.js';
import OrderShow from './components/Orders/ordershow.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      authUser: null,
      orders: [],
      inFocus: ['merchant'],
    }
    this.showLogin = this.showLogin.bind(this)
    this.showRegister = this.showRegister.bind(this)
    this.showAddOrder = this.showAddOrder.bind(this)
    // this.authorize = this.authorize.bind(this)
    // this.register = this.register.bind(this)
    // this.logout = this.logout.bind(this)
    // this.addOrder = this.addOrder.bind(this)
    // this.showMerchantProfile = this.showMerchantProfile.bind(this)
    // this.showOrder = this.showOrder.bind(this)
    // this.showDeliverer = this.showDeliverer.bind(this)
    // this.Router = this.Router.bind(this)
  }

  // componentWillMount() {
  //   this.setState({inFocus: this.state.inFocus.push('login')})
  // }

  showLogin(e) {
    e.preventDefault();
    this.setState({inFocus: ['login']})
  }

  showRegister(e) {
    e.preventDefault();
    this.setState({inFocus: ['register']})
  }

  showAddOrder(e) {
    e.preventDefault();
    this.setState({inFocus: ['merchant', 'addOrder']})
  }

  // authorize(e) {
  //   // if ()
  //   this.setState({inFocus: ['merchant']})
  // }

  // register(e) {
  //   this.setState({inFocus: ['merchant']})
  // }

  // logout(e) {
  //   this.setState({inFocus: ['login']})
  // }

  // addOrder(e) {
  //   this.setState({inFocus: ['merchant']})
  // }

  showMerchantProfile(e) {
    this.setState({inFocus: ['merchant']})
  }

  showOrder(e) {
    this.setState({inFocus: ['merchant', 'order']})
  }

  // showDeliverer(e) {
  //   this.setState({inFocus: ['merchant', 'deliverer']})
  // }

  render() {
    let methods = {showRegister: this.showRegister, showLogin: this.showLogin, showMerchantProfile: this.showMerchantProfile, showOrder: this.showOrder, showAddOrder: this.showAddOrder}
    return (
      <div>
        <Router state={this.state.inFocus} methods={methods} />
      </div>
    )
  }
}

export default App;
