import React, { Component } from 'react';

export default class OrderShow extends Component {
  render(){
    let order = {
                          "city": "New York City",
                          "country": "United States",
                          "customerName": "Mrs. Emil Hilpert",
                          "deliveryTime": 6,
                          "items": "Burritos",
                          "orderId": 1,
                          "orderTime": "2017-07-25T20:33:26.561Z",
                          "phone": "584.628.3904",
                          "state": "NY",
                          "street": "420 High Street",
                          "totalPrice": 6,
                          "zipcode": "10001"
                      }
    return(
      <div className="popup">
        <a href="/" className='text-right'>X</a>
        <h1>Information for:</h1>
        <ul>
          <li>Order ID: {order.orderId}</li>
          <li>Placed Time: {Date(order.placedTime)}</li>
          <li>Customer Name: {Date(order.customerName)}</li>
          <li>Items: {order.items}</li>
          <li>Price: {order.totalPrice}</li>
          <li>Delivery Time (Mins): {order.deliveryTime}</li>
        </ul>
      </div>
    )
  }

}
