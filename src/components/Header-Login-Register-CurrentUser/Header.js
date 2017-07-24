import React, { Component } from 'react';
import LoggedIn from './components/Header-Login-Register-CurrentUser/LoggedIn.js';
import NotLoggedIn from './components/Header-Login-Register-CurrentUser/NotLoggedIn.js';

class Header extends Component {
  render() {
    let auth = this.props.auth
    if (auth) {
      return (
        <div className="header">
          <h2>KAWGD</h2>
          <div className="header-list">
            <LoggedIn />
          </div>
        </div>
      );
    } else {
      return (
        <div className="header">
          <h2>KAWGD</h2>
          <div className="header-list">
            <NotLoggedIn />
          </div>
        </div>
      );
    }
  }
}

export default Header;
