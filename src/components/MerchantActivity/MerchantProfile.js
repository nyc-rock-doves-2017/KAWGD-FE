import React, { Component } from 'react';

class MerchantProfile extends React.Component {
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

    let organizedData = {[ {orderId: 1, deliveryTime_mins: 2},
                            {orderId: 2, deliveryTime_mins: 2},
                            {orderId: 3, deliveryTime_mins: 3},
                            {orderId: 4, deliveryTime_mins: 5},
                            {orderId: 5, deliveryTime_mins: 2}]
                          }
    return(
      <div>
      <h1>Account Profile</h1>
      <h2>Orders In Progress:</h2>
      <ol>
        {orderData.map((order, i) =>
          <li key={i}>Order ID: {order.orderID} - Delivery: {order.deliveredTime-order.placedTime} min</li>
        )}
      </ol>
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
