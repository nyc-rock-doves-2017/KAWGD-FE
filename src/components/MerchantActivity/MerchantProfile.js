import React, { Component } from 'react';
import {VictoryChart, VictoryLine} from 'victory';

class MerchantProfile extends Component {
  render(){
    let orderData = [{orderID: 1,
                      placedTime: Date.now(),
                      deliveredTime: Date.now()+1,
                      deliveryTime_mins: 2
                      },
                      {orderID: 2,
                      placedTime: Date.now(),
                      deliveredTime: Date.now()+3,
                      deliveryTime_mins: 2
                      },
                      {orderID: 3,
                      placedTime: Date.now(),
                      deliveredTime: Date.now()+5,
                      deliveryTime_mins: 2
                      },
                      {orderID: 4,
                      placedTime: Date.now(),
                      deliveredTime: Date.now()+2,
                      deliveryTime_mins: 2
                      },
                      {orderID: 5,
                      placedTime: Date.now(),
                      deliveredTime: Date.now()+1,
                      deliveryTime_mins: 2
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
      <ol>
        {orderData.map((order, i) =>
          <li key={i}>Order ID: {order.orderID} - Delivery: {order.deliveredTime-order.placedTime} min</li>
        )}
      </ol>
      <VictoryChart>
        <VictoryLine
          style={{data: { stroke: "green"}}}
          data={orgData}/>
      </VictoryChart>
      <h3>Historical Information:</h3>
      <ol>
        {orderData.map((order, i) =>
          <li key={i}>Order ID: {order.orderID} - Delivery: {order.deliveredTime-order.placedTime} min</li>
        )}
      </ol>

    </div>
    )
  }
}

export default MerchantProfile;
