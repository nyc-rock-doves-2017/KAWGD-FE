import React, { Component } from 'react';

class NewOrder extends Component {
  render(){
    return(
      <div className="popup">
        <a href="/" onClick={this.props.methods.showLogin} className='text-right'>X</a>
        <form className="popup">
          <p>Add Order</p>
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
            <input type="password" placeholder="Password" />
          </div>
          <button onClick={this.props.methods.addOrder}>Add Order</button>
        </form>
      </div>
    );
  };
};

export default NewOrder;
