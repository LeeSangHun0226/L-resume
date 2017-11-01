import React, { Component } from 'react';
import Header from '../components/organisms/Header';

class HeaderContainer extends Component {

  render() {
    const { authed, location } = this.props;
    return (
      <Header authed={authed} location={location} />
    );
  }
}

export default HeaderContainer;
