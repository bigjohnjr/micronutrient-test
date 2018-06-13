import React, { Component } from 'react';
import { connect } from 'react-redux';
import Introduction from './views/Introduction';
import VitaminResults from './views/VitaminResults';
import MineralResults from './views/MineralResults';
import AminoResults from './views/AminoResults';
import AntioxResults from './views/AntioxResults';
import OmegaResults from './views/OmegaResults';

class ResultsView extends React.Component {
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
      <React.Fragment>
        {this.props.activeResultView === 'Intro' && <Introduction />}
        {/* <VitaminResults />
        <MineralResults />
        */}
        {this.props.activeResultView === 'aminoResults' && <AminoResults />}
        {this.props.activeResultView === 'antioxResults' && <AntioxResults />}
        {/*
        <OmegaResults /> */}
      </React.Fragment>
    )
  }
}

export default connect(
  state => ({
    activeResultView: state.activeResultView,
  }),
)(ResultsView);
