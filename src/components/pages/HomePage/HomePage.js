import React from 'react';
import PageTemplate from '../../templates/PageTemplate';
import HeaderContainer from '../../../containers/HeaderContianer';
import LoginContainer from '../../../containers/LoginContainer';
import SignUpContainer from '../../../containers/SignUpContainer';

const HomePage = () => {
  return (
    <PageTemplate
      header={<HeaderContainer />}
    >
      <SignUpContainer />
      <LoginContainer />
    </PageTemplate>
  );
};

export default HomePage;
