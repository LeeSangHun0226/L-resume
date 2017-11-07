import React, { Component } from 'react';
import Header from '../components/organisms/Header';

class HeaderContainer extends Component {

  render() {
    const { authed, location, history } = this.props;
    return (
      <Header authed={authed} location={location} history={history} />
    );
  }
}

export default HeaderContainer;
