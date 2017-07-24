import React, { Component } from 'react';

class LoggedIn extends Component {
  render() {
    let auth = this.props.auth
    return (
      <div className="header-list">
        {if (auth) {
          <LoggedIn />  
        } else {
          <NotLoggedIn />
        }}
      </div>
    );
  }
}

export default LoggedIn;