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
        <h2>Delivery Time by Order (In Minutes)</h2>
        <VictoryChart height={200} animate={{easing: "circle"}} containerComponent={<VictoryZoomContainer/>}>
          <VictoryLine
            style={{data: { stroke: "green"}}}
            data={dataCollection.map((data,key)=> new dataComponent(data.orderId, data.deliveryTime))}
            />
          <VictoryAxis label="Order ID"/>
          <VictoryAxis dependentAxis label="Delivery Time"/>
        </VictoryChart>
      </div>
    )
  }
}
