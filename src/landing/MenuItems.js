import React, { Component } from 'react';
import Vitamins from './menuitems/Vitamins';
import Minerals from './menuitems/Minerals';
import AminoAcids from './menuitems/AminoAcids';
import Antioxidants from './menuitems/Antioxidants';
import Omegas from './menuitems/Omegas';
import data from '../data.json';

class MenuItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      data: data
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({
        value: value
    });
  }

  render() {
    return (
      <ul className="menuitems">
        <li>
          <Vitamins data={this.state.data} />
        </li>
        <li>
          <Minerals data={this.state.data} />
        </li>
        <li>
          <AminoAcids data={this.state.data}/>
        </li>
        <li>
          <Antioxidants data={this.state.data}/>
        </li>
        <li>
          <Omegas data={this.state.data}/>
        </li>
      </ul>
    )
  }
}

export default MenuItems;
