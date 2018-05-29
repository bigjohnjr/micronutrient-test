import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchMicros } from "../../actions/actions";

class Vitamins extends Component {
  componentDidMount() {
    this.props.fetchMicros();
  }

  // componentDidMount() {
  //   fetch('/users')
  //     .then(res => res.json())
  //     .then(micros => {
  //       this.setState({
  //         micros: micros.vitamins
  //       });
  //     })
  // }

  renderData() {
    const { vitamins } = this.props.vitamins;
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

export default connect(
  state => ({
    vitamins: state.vitamins
  }),
  {
    fetchMicros
  },
)(Vitamins);
