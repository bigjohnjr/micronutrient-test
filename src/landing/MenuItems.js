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
          <Vitamins data={this.props.users} />
        </li>
        <li>
          <Minerals data={this.props.users} />
        </li>
        <li>
          <AminoAcids data={this.props.users}/>
        </li>
        <li>
          <Antioxidants data={this.props.users}/>
        </li>
        <li>
          <Omegas data={this.props.users}/>
        </li>
      </ul>
    )
  }
}

export default MenuItems;
