import React from 'react';
import PageTemplate from '../../templates/PageTemplate';
import HeaderContainer from '../../../containers/HeaderContianer';
import Home from '../../organisms/Home';

const HomePage = ({ authed }) => {
  return (
    <PageTemplate
      header={<HeaderContainer authed={authed} location="home" />}
      location="home"
    >
      <Home />
    </PageTemplate>
  );
};

export default HomePage;
