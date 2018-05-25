import React, { Component } from 'react';

class Minerals extends Component {
  state = {micros: []};

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(micros => {
        this.setState({
          micros: micros.minerals
        });
      })
  }

  renderData() {
    const minerals = this.state.micros;
    return minerals.map((micro, index) => {
      return (
        <option value={micro.value} key={index}>{micro.name}</option>
      )
    })
  }

  render() {
    return (
      <form>
        <label className="nutrient-label">
          Minerals
        </label>
        <select value={this.props.value} onChange={this.handleChange}>
          <option value="" selected>--Minerals--</option>
          {this.renderData()}
        </select>
      </form>
    )
   }
}

export default Minerals;
