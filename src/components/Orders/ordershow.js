import React, { Component } from 'react';

export default class OrderShow extends Component {
  render(){
    let order = {orderID: 1,
                  placedTime: Date.now(),
                  deliveredTime: Date.now()+1,
                  deliveryTime_mins: 2
                  }
    return(
      <div className="popup">
        <a href="/" onClick={this.props.methods.showLogin} className='text-right'>X</a>
        <h1>Information for:</h1>
        <ul>
          <li>Order ID: {order.orderID}</li>
          <li>Placed Time: {Date(order.placedTime)}</li>
          <li>Delivery Time: {Date(order.deliveredTime)}</li>
          <li>Delivery Time (Mins) {order.deliveryTime_mins}</li>
        </ul>
      </div>
    )
  }

}
