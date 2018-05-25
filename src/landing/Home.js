import React, { Component } from 'react';
import MenuItems from './MenuItems';
import Introduction from './Introduction';

class Home extends Component {

  render() {
    return (
      <React.Fragment>
        <MenuItems />
        <Introduction />
      </React.Fragment>
    )
  }
}

export default Home;
