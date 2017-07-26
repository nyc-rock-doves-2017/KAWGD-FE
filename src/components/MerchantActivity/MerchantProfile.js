import React, { Component } from 'react';
import OrderChart from './OrderChart.js';
import OrderShow from '../Orders/ordershow.js';

export default class MerchantProfile extends Component {
  render(){
    // debugger;
    let orderData = [{
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

    // var historicalOrders = orderData;
    // var unassignedOrders = orderData;
    var historicalOrders = orderData.filter((data)=> data.deliveryTime != null)
    var unassignedOrders = orderData.filter((data)=> data.deliveryTime === null)

    return(
      <div>
      <h1>Account Profile</h1>
      <a href="/" onClick={this.props.methods.showAddOrder}>Add New Order</a>
      <h2>Unassigned Orders:</h2>
      <ol>
        {unassignedOrders.map((order, i) =>
          <li key={i}>Order ID: {order.orderId} >> Customer Name: {order.customerName}</li>
        )}
      </ol>
      <h2>Historical Orders:</h2>
      <ol>
        {historicalOrders.map((order, i) =>
          <li key={i}>Order ID: {order.orderId} - Delivery: {order.deliveryTime} minutes</li>
        )}
      </ol>
      <OrderChart dataCollection={historicalOrders}></OrderChart>
      <OrderShow/>
    </div>
    )
  }
}
