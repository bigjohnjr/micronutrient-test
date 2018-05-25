import React, { Component } from 'react';

class Omegas extends Component {

  renderData() {
    const omegas = this.props.data;
    return omegas.map((micro, index) => {
      return (
        <option value={micro.value} key={index}>{micro.name}</option>
      )
    })
  }

  render() {
    return (
      <form>
        <label className="nutrient-label">
          Omegas
        </label>
        <select value={this.props.value} onChange={this.handleChange}>
          <option value="" selected>--Omegas--</option>
          {this.renderData()}
        </select>
      </form>
    )
   }
}

export default Omegas;
