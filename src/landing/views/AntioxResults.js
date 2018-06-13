import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchMicros } from "../../actions/actions";
import { Table } from 'reactstrap';

class AntioxResults extends React.Component {
  componentDidMount() {
    this.props.fetchMicros();
  }

  renderData() {
    const { antioxidants } = this.props.antioxidants;
    return antioxidants.map((micro, i) => {
      return (
        <Table key={i}>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th colSpan={3}>Serum</th>
              <th colSpan={3}>WBC</th>
              <th colSpan={3}>RBC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <th>{micro.name}</th>
              <th>Current</th>
              <th>Prev</th>
              <th>Ref</th>
              <th>Current</th>
              <th>Prev</th>
              <th>Ref</th>
              <th>Current</th>
              <th>Prev</th>
              <th>Ref</th>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>{micro.serum.current}</td>
              <td>{micro.serum.prev}</td>
              <td>{micro.serum.ref}</td>
              <td>{micro.wbc.current}</td>
              <td>{micro.wbc.prev}</td>
              <td>{micro.wbc.ref}</td>
              <td>{micro.rbc.current}</td>
              <td>{micro.rbc.prev}</td>
              <td>{micro.rbc.ref}</td>
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
    antioxidants: state.antioxidants
  }),
  {
    fetchMicros
  },
)(AntioxResults);
