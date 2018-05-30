import React, { Component } from 'react';
import { connect } from 'react-redux';
import Introduction from './views/Introduction';
import VitaminResults from './views/VitaminResults';
import MineralResults from './views/MineralResults';
import AminoResults from './views/AminoResults';
import AntioxResults from './views/AntioxResults';
import OmegaResults from './views/OmegaResults';

class ResultsView extends React.Component {
  render() {
    return (
      <div>
        <Introduction />
        {/* <VitaminResults />
        <MineralResults />
        <AminoResults />
        <AntioxResults />
        <OmegaResults /> */}
      </div>
    )
  }
}

export default ResultsView;
