import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchMicros } from "../../actions/actions";
import { Table } from 'reactstrap';

class AminoResults extends React.Component {
  componentDidMount() {
    this.props.fetchMicros();
  }

  renderData() {
    const { aminos } = this.props.aminos;
    return aminos.map((micro) => {
      return (
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Current</th>
              <th>Prev</th>
              <th>Ref</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{micro.name}</th>
              <td>{micro.serum.current}</td>
              <td>{micro.serum.prev}</td>
              <td>{micro.serum.ref}</td>
            </tr>
          </tbody>
        </Table>
      )
    })
  }

  render() {
    return (
      <div>
        {this.renderData()}
      </div>
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
)(AminoResults);
