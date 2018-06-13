import React, { Component } from 'react';
import Vitamins from './menuitems/Vitamins';
import Minerals from './menuitems/Minerals';
import AminoAcids from './menuitems/AminoAcids';
import Antioxidants from './menuitems/Antioxidants';
import Omegas from './menuitems/Omegas';

class MenuItems extends Component {

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
