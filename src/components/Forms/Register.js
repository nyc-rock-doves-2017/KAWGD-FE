import React, { Component } from "react";

class Register extends React.Component {

  render(){
    return(
      <div className="popup">
        <a href="/" onClick={this.props.methods.showLogin} className='text-right'>X</a>
        <form className="popup">
          <p>Register</p>
          <div className="label-input">
            <label>Email Address</label>
            <input value={this.props.state.email} onChange={this.props.methods.getEmail} placeholder="usuario@dominio.com" />
          </div>
          <div className="label-input">
            <label>Street Address</label>
            <input value={this.props.state.name} onChange={this.props.methods.getName} placeholder="123 Street St #123" />
          </div>
          <div className="label-input">
            <label>City, State  Zip</label>
            <input value={this.props.state.city} onChange={this.props.methods.getCity} placeholder="NY, NY 10001" />
          </div>
          <div className="label-input">
            <label>phone</label>
            <input value={this.props.state.phone} onChange={this.props.methods.getPhone} placeholder="890-567-1234" />
          </div>
          <div className="label-input">
            <label>Password</label>
            <input value={this.props.state.password} onChange={this.props.methods.getPassword} placeholder="Password" />
          </div>
          <button onClick={this.props.methods.register}>Register</button>
        </form>
      </div>
    );
  };
};

export default Register;
