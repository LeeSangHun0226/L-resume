import React from 'react';
import PageTemplate from '../../templates/PageTemplate';
import HeaderContainer from '../../../containers/HeaderContianer';
import LoginContainer from '../../../containers/LoginContainer';
import SignUpContainer from '../../../containers/SignUpContainer';

const HomePage = (props) => {
  console.log('page', props)
  return (
    <PageTemplate
      // header={<HeaderContainer />}
    >
      hi
    </PageTemplate>
  );
};

export default HomePage;
