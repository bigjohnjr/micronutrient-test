import React, { Component } from 'react';
import MenuItems from './MenuItems';
import Introduction from './Introduction';

class Home extends Component {
  state = {users: []};

  componentDidMount() {
    console.log('app mounted');
    fetch('/users')
      .then(res =>{
        return res.json();
      })
      .then(users => {
        console.log(users);
        this.setState({ users });
      });
  }

  render() {
    return (
      <React.Fragment>
        <MenuItems users={this.state.users} />
        <Introduction />
      </React.Fragment>
    )
  }
}

export default Home;
