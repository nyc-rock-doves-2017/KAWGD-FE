import React, { Component } from "react";

class Register extends React.Component {

  render(){
    return(
      <form className="form">
        <p>Register</p>
        <div className="label-input">
          <label>Email Address</label>
          <input placeholder="usuario@dominio.com" />
        </div>
        <div className="label-input">
          <label>Address</label>
          <input placeholder="123 Street St #123" />
        </div>
        <div className="label-input">
          <label>City, State  Zip</label>
          <input placeholder="NY, NY 10001" />
        </div>
        <div className="label-input">
          <label>phone</label>
          <input placeholder="890-567-1234" />
        </div>
        <div className="label-input">
          <label>Password</label>
          <input placeholder="Password" />
        </div>
        <button>Register</button>
      </form>
    );
  };
};

export default Register;