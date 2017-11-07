import React from 'react';
import PageTemplate from '../../templates/PageTemplate';
import HeaderContainer from '../../../containers/HeaderContianer';
import Home from '../../organisms/Home';

const HomePage = ({ authed, history }) => {

  return (
    <PageTemplate
      header={<HeaderContainer history={history} authed={authed} location="home" />}
      location="home"
    >
      <Home history={history} />
    </PageTemplate>
  );
};

export default HomePage;
