import React, { Component } from 'react';

class LoggedIn extends Component {
  render() {
    return (
      <div className="nav-bar">
        <a href="logout" id="logout">logout</a>
      </div>
    );
  };
}

export default LoggedIn;
