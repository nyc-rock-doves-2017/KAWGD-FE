import React, { Component } from "react";

class Login extends React.Component {

  render(){
    return(
      <div className="popup">
        <form className="popup">
          <p>Login</p>
          <div className="">
            <label>Email Address</label>
            <input placeholder="usuario@dominio.com" />
          </div>
          <div className="">
            <label>Password</label>
            <input placeholder="Password" />
          </div>
          <a>Forgot Password?</a>
          <button>Login</button>
        </form><br />
        <a href="/" onClick={this.props.methods.showRegister}>New Users Sign Up Here!</a>
      </div>
    );
  }
}

export default Login;
