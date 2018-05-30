import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchMicros } from "../../actions/actions";

class Omegas extends Component {
  componentDidMount() {
    this.props.fetchMicros();
  }

  renderData() {
    const { omegas } = this.props.omegas;
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

export default connect(
  state => ({
    omegas: state.omegas
  }),
  {
    fetchMicros
  },
)(Omegas);
