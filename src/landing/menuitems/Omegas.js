import React, { Component } from 'react';

class Omegas extends Component {
  state = {micros: []};

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(micros => {
        this.setState({
          micros: micros.omegas
        });
      })
  }

  renderData() {
    const omegas = this.state.micros;
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
