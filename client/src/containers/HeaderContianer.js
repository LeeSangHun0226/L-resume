import React, { Component } from 'react';
import Header from '../components/organisms/Header';

class HeaderContainer extends Component {

  render() {
    const { authed } = this.props;
    return (
      <Header authed={authed} />
    );
  }
}

export default HeaderContainer;
