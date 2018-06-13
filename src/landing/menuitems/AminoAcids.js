import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchMicros } from "../../actions/actions";

class AminoAcids extends Component {
  componentDidMount() {
    this.props.fetchMicros();
  }

  renderData() {
    const { aminos } = this.props;
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
          {this.props.aminos && this.renderData()}
        </select>
      </form>
    )
   }
}

export default connect(
  state => ({
    aminos: state.micros.aminoacids
  }),
  {
    fetchMicros
  },
)(AminoAcids);
