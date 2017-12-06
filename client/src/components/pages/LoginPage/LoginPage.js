import React from 'react';
import PageTemplate from '../../templates/PageTemplate';
import HeaderContainer from '../../../containers/HeaderContianer';
import LoginContainer from '../../../containers/LoginContainer';

const LoginPage = () => {
  return (
    <PageTemplate
      header={<HeaderContainer authed location="login"/>}
      location="login"
    >
      <LoginContainer />
    </PageTemplate>
  );
};

export default LoginPage;
