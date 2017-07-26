import React, { Component } from 'react';
import {VictoryChart, VictoryLabel, VictoryLine, VictoryZoomContainer, VictoryAxis} from 'victory';

export default class OrderChart extends Component {
  render() {
    let dataCollection = this.props.dataCollection

    function dataComponent(x,y){
      this.x = x
      this.y = parseInt(y)
    }

    return(
      <div>

        <h2>Charts</h2>
        <h3>Delivery Time by Order (In Minutes)</h3>
        <VictoryChart height={150} animate={{easing: "circle"}} containerComponent={<VictoryZoomContainer/>}>
          <VictoryLine
            style={{data: { stroke: "green"}}}
            data={dataCollection.map((data,key)=> new dataComponent(data.orderId, data.totalDeliveryTime))}
            />
          <VictoryAxis label="Order ID"/>
          <VictoryAxis dependentAxis label="Delivery Time"/>
        </VictoryChart>
        <h2>Charts</h2>
        <h3>Delivery Time by Price (In Minutes)</h3>
        <VictoryChart height={100} animate={{easing: "circle"}} containerComponent={<VictoryZoomContainer/>}>
          <VictoryLine
            style={{data: { stroke: "green"}}}
            data={dataCollection.map((data,key)=> new dataComponent(data.totalPrice, data.totalDeliveryTime))}
            />
          <VictoryAxis label="Price"/>
          <VictoryAxis dependentAxis label="Min"/>
        </VictoryChart>
      </div>
    )
  }
}
