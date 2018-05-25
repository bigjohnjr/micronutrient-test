import React, { Component } from 'react';

class AminoAcids extends Component {

  renderData() {
    const { aminoacids } = this.props.data;
    return aminoacids.map((micro, index) => {
      return (
        <option value={micro.value} key={index}>{micro.name}</option>
      )
    })
  }

  render() {
    return (
      <form>
        <label className="nutrient-label">
          Amino Acids
        </label>
        <select value={this.props.value} onChange={this.handleChange}>
          <option value="" selected>--Amino Acids--</option>
          {this.renderData()}
        </select>
      </form>
    )
   }
}

export default AminoAcids;
