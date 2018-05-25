import React, { Component } from 'react';

class Antioxidants extends Component {

  renderData() {
    const antioxidants = this.props.data;
    return antioxidants.map((micro, index) => {
      return (
        <option value={micro.value} key={index}>{micro.name}</option>
      )
    })
  }

  render() {
    return (
      <form>
        <label className="nutrient-label">
          Antioxidants
        </label>
        <select value={this.props.value} onChange={this.handleChange}>
          <option value="" selected>--Antioxidants--</option>
          {this.renderData()}
        </select>
      </form>
    )
   }
}

export default Antioxidants;
