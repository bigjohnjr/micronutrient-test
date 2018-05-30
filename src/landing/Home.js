import React, { Component } from 'react';
import MenuItems from './MenuItems';
import ResultsView from './ResultsView';

class Home extends Component {

  render() {
    return (
      <React.Fragment>
        <MenuItems />
        <ResultsView />
      </React.Fragment>
    )
  }
}

export default Home;
