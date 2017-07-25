import React, { Component } from 'react';
import OrderChart from './OrderChart.js';

export default class MerchantProfile extends Component {
  render(){
    let orderData =  [{
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
                      },
                      {
                          "city": "New York City",
                          "country": "United States",
                          "customerName": "Arnaldo Ullrich II",
                          "deliveryTime": 4,
                          "items": "Burritos",
                          "orderId": 6,
                          "orderTime": "2017-07-25T20:34:20.156Z",
                          "phone": "(402) 272-6707",
                          "state": "NY",
                          "street": "420 High Street",
                          "totalPrice": 6,
                          "zipcode": "10001"
                      },
                      {
                          "city": "New York City",
                          "country": "United States",
                          "customerName": "Arnaldo Ullrich II",
                          "deliveryTime": null,
                          "items": "Burritos",
                          "orderId": 3,
                          "orderTime": "2017-07-25T20:34:20.156Z",
                          "phone": "(402) 272-6707",
                          "state": "NY",
                          "street": "420 High Street",
                          "totalPrice": 6,
                          "zipcode": "10001"
                      }
                    ]

    var historicalOrders = orderData.filter((data)=> data.deliveryTime != null)
    var currentOrders = orderData.filter((data)=> data.deliveryTime === null)

    return(
      <div>
      <h1>Account Profile</h1>
      <a href="/" onClick={this.props.methods.showAddOrder}>Add New Order</a>
      <h2>Orders In Progress:</h2>
      <p>Welcome! The below are your order information!</p>
      <ol>
        {currentOrders.map((order, i) =>
          <li key={i}>Order ID: {order.orderId} - Delivery: {order.delivery_time}</li>
        )}
      </ol>
      <h3>Historical Information:</h3>
      <ol>
        {historicalOrders.map((order, i) =>
          <li key={i}>Order ID: {order.orderId} - Delivery: {order.delivery_time}</li>
        )}
      </ol>
      <OrderChart dataCollection={historicalOrders}></OrderChart>
    </div>
    )
  }
}
