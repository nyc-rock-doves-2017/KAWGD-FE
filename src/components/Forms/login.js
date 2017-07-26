import React, { Component } from "react";

class Login extends React.Component {

  render(){

    return(
      <div className="popup">
        <form className="popup">
          <p>Login</p>
          <div className="">
            <label>Email Address</label>
            <input value={this.props.state.email} onChange={this.props.methods.getEmail} placeholder="usuario@dominio.com" />
          </div>
          <div className="">
            <label>Password</label>
            <input value={this.props.state.password} type="password" onChange={this.props.methods.getPassword} placeholder="Password" />
          </div>
          <button onClick={this.props.methods.authorize}>Login</button>
        </form><br />
        <a href="/" onClick={this.props.methods.showRegister}>New Users Sign Up Here!</a>
      </div>
    );
  }
}

export default Login;
