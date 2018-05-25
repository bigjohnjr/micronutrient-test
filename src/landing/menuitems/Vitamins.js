import React, { Component } from 'react';

class Vitamins extends Component {
  state = {micros: []};

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(micros => {
        this.setState({
          micros: micros.vitamins
        });
      })
  }

  renderData() {
    const vitamins = this.state.micros;
    return vitamins.map((micro, index) => {
      return (
        <option value={micro.value} key={index}>{micro.name}</option>
      )
    })
  }

  render() {

    return (
      <form>
        <label className="nutrient-label">
          Vitamins
        </label>
        <select value={this.props.value} onChange={this.handleChange}>
          <option value="" selected>--Vitamins--</option>
          {this.renderData()}
        </select>
      </form>
    )
   }
}

export default Vitamins;
