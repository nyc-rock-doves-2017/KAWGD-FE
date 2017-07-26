import React, { Component } from 'react';

class NewOrder extends Component {
  render(){
    return(
      <div className="popup">
        <a href="/" onClick={this.props.methods.showMerchantProfile} className='text-right'>X</a>
        <form className="popup">
          <p>Add Order</p>
          <div className="label-input">
            <label>Items</label>
            <input value={this.props.state.items} onChange={this.props.methods.getItems} placeholder="items" />
          </div>
          <div className="label-input">
            <label>total price</label>
            <input value={this.props.state.total} onChange={this.props.methods.getTotal} placeholder="$$" />
          </div>
          <div className="label-input">
            <label>Customer Name</label>
            <input value={this.props.state.name} onChange={this.props.methods.getName} placeholder="chrissy evert" />
          </div>
          <div className="label-input">
            <label>Street Address</label>
            <input value={this.props.state.street} onChange={this.props.methods.getStreet} placeholder="123 street st" />
          </div>
          <div className="label-input">
            <label>city</label>
            <input value={this.props.state.city} onChange={this.props.methods.getCity} placeholder="890-567-1234" />
          </div>
          <div className="label-input">
            <label>state</label>
            <input value={this.props.state.state} onChange={this.props.methods.getState} placeholder="890-567-1234" />
          </div>
          <div className="label-input">
            <label>zipcode</label>
            <input value={this.props.state.zip} onChange={this.props.methods.getZip} placeholder="890-567-1234" />
          </div>
          <div className="label-input">
            <label>country</label>
            <input value={this.props.state.country} onChange={this.props.methods.getCountry} placeholder="890-567-1234" />
          </div>
          <div className="label-input">
            <label>customer phone</label>
            <input value={this.props.state.phone} onChange={this.props.methods.getPhone} placeholder="890-567-1234" />
          </div>
          <button onClick={this.props.methods.addOrder}>Add Order</button>
        </form>
      </div>
    );
  };
};

export default NewOrder;
