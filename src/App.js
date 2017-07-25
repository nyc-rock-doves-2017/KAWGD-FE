import React, { Component } from 'react';
import './App.css';
import Router from './components/Router.js';
import OrderShow from './components/Orders/ordershow.js';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      authUser: null,
      orders: [],
      inFocus: ['login'],
      email: '',
      password: '',
      errors: [],
      phone: '',
      street: '',
      city: '',
      state: '',
      zip: '',
      country: '',
      items: '',
      total: '',
    }
    this.showLogin = this.showLogin.bind(this)
    this.showRegister = this.showRegister.bind(this)
    this.showAddOrder = this.showAddOrder.bind(this)
    this.authorize = this.authorize.bind(this)
    this.register = this.register.bind(this)
    this.logout = this.logout.bind(this)
    this.addOrder = this.addOrder.bind(this)
    this.showMerchantProfile = this.showMerchantProfile.bind(this)
    this.showOrder = this.showOrder.bind(this)
    this.showDeliverer = this.showDeliverer.bind(this)
    this.getEmail = this.getEmail.bind(this)
    this.getPassword = this.getPassword.bind(this)
    this.getStreet = this.getStreet.bind(this)
    this.getState = this.getState.bind(this)
    this.getPhone = this.getPhone.bind(this)
    this.getCity = this.getCity.bind(this)
    this.getZip = this.getZip.bind(this)
    this.getCountry = this.getCountry.bind(this)
    this.getItems = this.getItems.bind(this)
    this.getTotal = this.getTotal.bind(this)

  }

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

  authorize(args, e) {
    e.preventDefault();
    axios.post('https://git.heroku.com/frozen-reaches-18671/sessions', { email: this.state.email, password: this.state.password })
      .then(function(res){
        console.log(res)
      // if (res === "OK") {
      //   this.setState({ authUser: this.state.login.email, errors: [], inFocus: ['merchant'] })
      // } else if (res === 'NOPE') {
      //   this.setState({ errors: this.state.errors.push('incorrect email/pw') })
      // } else {
      //   this.setState({ errors: this.state.errors.push('connectivity issues') })
      // }
    });
    // this.setState({inFocus: ['merchant']})
  }

  register(e) {
    e.preventDefault();
    axios.post('https://git.heroku.com/frozen-reaches-18671/users', { email: this.state.email, password: this.state.password, user_type: 'merchant', phone_number: this.state.phone })
      .then(function(res){
        console.log(res)
      // if (res === "OK") {
      //   this.setState({ authUser: this.state.login.email, errors: [], inFocus: ['merchant'] })
      // } else if (res === 'NOPE') {
      //   this.setState({ errors: this.state.errors.push('incorrect email/pw') })
      // } else {
      //   this.setState({ errors: this.state.errors.push('connectivity issues') })
      // }
    });
    // this.setState({inFocus: ['merchant']})
  }

  getPassword(e) {
    this.setState({password: e.target.value})
  }

  getItems(e) {
    this.setState({items: e.target.value})
  }

  getTotal(e) {
    this.setState({total: e.target.value})
  }

  getZip(e) {
    this.setState({zip: e.target.value})
  }

  getState(e) {
    this.setState({state: e.target.value})
  }

  getCountry(e) {
    this.setState({country: e.target.value})
  }

  getCity(e) {
    this.setState({city: e.target.value})
  }

  getStreet(e) {
    this.setState({street: e.target.value})
  }

  getName(e) {
    this.setState({name: e.target.value})
  }

  getPhone(e) {
    this.setState({phone: e.target.value})
  }

  getEmail(e) {
    this.setState({email: e.target.value})
  }

  logout(e) {
    e.preventDefault();
    this.setState({inFocus: ['login']})
  }

  addOrder(e) {
    e.preventDefault();
    // axios.post('https://frozen-reaches-18671.herokuapp.com/orders', { email: this.state.email, password: this.state.password })
    //   .then(function(res){
    //   if (res === "OK") {
    //     this.setState({ authUser: this.state.login.email, errors: [], inFocus: ['merchant'] })
    //   } else if (res === 'NOPE') {
    //     this.setState({ errors: this.state.errors.push('incorrect email/pw') })
    //   } else {
    //     this.setState({ errors: this.state.errors.push('connectivity issues') })
    //   }
    // });
    this.setState({inFocus: ['merchant']})
  }

  showMerchantProfile(e) {
    axios.get('https://frozen-reaches-18671.herokuapp.com/users/1')
      .then(function(res){
        console.log(res.data[0])
    });
    // this.setState({inFocus: ['merchant']})
  }

  showOrder(e) {
    e.preventDefault();
    this.setState({inFocus: ['merchant', 'order']})
  }

  showDeliverer(e) {
    this.setState({inFocus: ['merchant', 'deliverer']})
  }

  render() {
    this.showMerchantProfile()
    let methods = {getTotal: this.getTotal, getItems: this.getItems, getZip: this.getZip, getCountry: this.getCountry, getState: this.getState, getCity: this.getCity, getStreet: this.getStreet, getName: this.getName, getPhone: this.getPhone, getPassword: this.getPassword, getEmail: this.getEmail, showDeliverer: this.showDeliverer, logout: this.logout, addOrder: this.addOrder, showRegister: this.showRegister, authorize: this.authorize, register: this.register, showLogin: this.showLogin, showMerchantProfile: this.showMerchantProfile, showOrder: this.showOrder, showAddOrder: this.showAddOrder}
    return (
      <div>
        <Router state={this.state} methods={methods} />
      </div>
    )
  }
}

export default App;
