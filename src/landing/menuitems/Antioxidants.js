import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchMicros } from "../../actions/actions";

class Antioxidants extends Component {
  componentDidMount() {
    this.props.fetchMicros();
  }

  renderData() {
    const { antioxidants } = this.props;
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
          {this.props.antioxidants && this.renderData()}
        </select>
      </form>
    )
   }
}

export default connect(
  state => ({
    antioxidants: state.micros.antioxidants
  }),
  {
    fetchMicros
  },
)(Antioxidants);
