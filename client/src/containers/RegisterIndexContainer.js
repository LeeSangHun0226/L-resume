import React, { Component } from 'react';
import RegisterIndex from '../components/organisms/RegisterIndex';

class RegisterIndexContainer extends Component {

  render() {
    const { history } = this.props;
    return (
      <RegisterIndex history={history} />
    );
  }
}

export default RegisterIndexContainer;
