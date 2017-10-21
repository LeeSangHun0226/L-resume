import React, { Component } from 'react';
import RegisterIndex from '../components/organisms/RegisterIndex';

class RegisterTitleContainer extends Component {

  render() {
    const { title } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <p>기본적인 정보를 입력하는 공간입니다</p>
      </div>
    );
  }
}

export default RegisterTitleContainer;
