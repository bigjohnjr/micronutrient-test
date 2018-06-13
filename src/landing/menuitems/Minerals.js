import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchMicros } from "../../actions/actions";

class Minerals extends Component {
  componentDidMount() {
    this.props.fetchMicros();
  }

  renderData() {
    const { minerals } = this.props;
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
          {this.props.minerals && this.renderData()}
        </select>
      </form>
    )
   }
}

export default connect(
  state => ({
    minerals: state.micros.minerals
  }),
  {
    fetchMicros
  },
)(Minerals);
