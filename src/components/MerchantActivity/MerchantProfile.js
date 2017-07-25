import React, { Component } from 'react';
import {VictoryChart,VictoryLabel, VictoryLine} from 'victory';

export default class MerchantProfile extends Component {
  render(){
    let orderData = [{
                        "city": "New York City",
                        "country": "United States",
                        "delivery_time": "0.139916 min",
                        "items": "Burritos",
                        "name": "Lori Gulgowski",
                        "order_id": 1,
                        "phone": "(534) 299-3624 x045",
                        "state": "NY",
                        "street": "420 High Street",
                        "total_price": 6,
                        "zipcode": "10001"
                      },
                      {
                        "city": "New York City",
                        "country": "United States",
                        "delivery_time": "0.139916 min",
                        "items": "Burritos",
                        "name": "Lori Gulgowski",
                        "order_id": 1,
                        "phone": "(534) 299-3624 x045",
                        "state": "NY",
                        "street": "420 High Street",
                        "total_price": 6,
                        "zipcode": "10001"
                      }
                    ]

    let orgData = [
      {x: 1, y: 5},
      {x: 2, y: 2},
      {x: 3, y: 3},
      {x: 4, y: 5},
      {x: 5, y: 2}
    ]
    return(
      <div>
      <h1>Account Profile</h1>
      <h2>Orders In Progress:</h2>
      <p>Welcome! The below are your order information!</p>
      <ol>
        {orderData.map((order, i) =>
          <li key={i}>Order ID: {order.orderID} - Delivery: {order.delivery_time}</li>
        )}
      </ol>
      <h3>Historical Information:</h3>
      <ol>
        {orderData.map((order, i) =>
          <li key={i}>Order ID: {order.orderID} - Delivery: {order.delivery_time}</li>
        )}
      </ol>
      <VictoryChart height={200} animate={{easing: "circle"}}>
        <VictoryLabel y={10} x={130} text={"Delivery Time by Order (In Minutes)"}></VictoryLabel>
        <VictoryLabel y={180} x={180} text={"Order"}></VictoryLabel>
        <VictoryLine
          style={{data: { stroke: "green"}}}
          data={orgData}
          />
      </VictoryChart>
    </div>
    )
  }
}
