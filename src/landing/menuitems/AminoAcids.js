import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchMicros } from "../../actions/actions";

class AminoAcids extends Component {
  componentDidMount() {
    this.props.fetchMicros();
  }

  renderData() {
    const { aminos } = this.props.aminos;
    return aminos.map((micro, index) => {
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

export default connect(
  state => ({
    aminos: state.aminos
  }),
  {
    fetchMicros
  },
)(AminoAcids);
