import React, { Component } from 'react';
import Vitamins from './menuitems/Vitamins';
import Minerals from './menuitems/Minerals';
import AminoAcids from './menuitems/AminoAcids';
import Antioxidants from './menuitems/Antioxidants';
import Omegas from './menuitems/Omegas';

class MenuItems extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
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
          <Vitamins />
        </li>
        <li>
          <Minerals />
        </li>
        <li>
          <AminoAcids />
        </li>
        <li>
          <Antioxidants />
        </li>
        <li>
          <Omegas />
        </li>
      </ul>
    )
  }
}

export default MenuItems;
