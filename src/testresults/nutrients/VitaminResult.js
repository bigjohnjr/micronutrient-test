import React, { Component } from 'react';
import data from '../../data.json';

class VitaminResult extends Component {
  renderData() {
    return data.map((nutrient, index) => {
      console.log('hi', nutrient, index);
      return (
        <div key={index}>{nutrient.name}</div>
      )
    })
  }

  render() {
    return (
      <div>{this.renderData()}</div>
    )
  }
}

export default VitaminResult;
