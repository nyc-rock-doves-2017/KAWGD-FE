import React, { Component } from 'react';
import Login from '../Forms/Login.js';
import Register from '../Forms/Register.js';
var login = '<Login />';
var register = '<Register />';
var docu = document.getElementsByClassName("App");

class NotLoggedIn extends Component {
  // componentDidMount() {
  // }

  loginLink(e) {
    e.preventDefault();
    // ReactDOM.render(<Login />, document.getElementsByClassName("App")[0]);

    // ReactDOM.render(<Login />, document.body);
    // docu[0].insertAdjacentHTML('beforeend', Login)

    // npm install append-react-dom --save
    // appendReactDOM(Login, docu[0], {
      // bar: 'bar'
    // });
  };

  registerLink(e) {
    e.preventDefault();
    docu[0].append(register)
  };


  render() {
    return (
      <div className="nav-bar" id="nav-bar">
        <a href="/login" onClick={(e) => this.loginLink(e)}>login</a>
        <a href="/register" onClick={(e) => this.registerLink(e)}>register</a>
      </div>
    );
  };
};

export default NotLoggedIn;
