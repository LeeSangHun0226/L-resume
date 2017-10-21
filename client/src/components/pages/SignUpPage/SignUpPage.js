import React from 'react';
import PageTemplate from '../../templates/PageTemplate';
import HeaderContainer from '../../../containers/HeaderContianer';
import SignUpContainer from '../../../containers/SignUpContainer';

const SignUpPage = () => {
  return (
    <PageTemplate
      header={<HeaderContainer />}
    >
      <SignUpContainer />
    </PageTemplate>
  );
};

export default SignUpPage;
