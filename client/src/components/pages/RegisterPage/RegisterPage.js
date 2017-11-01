import React from 'react';
import { Route } from 'react-router-dom';
import PageTemplate from '../../templates/PageTemplate';
import HeaderContainer from '../../../containers/HeaderContianer';
import RegisterIndexPage from '../../pages/RegisterIndexPage';
import RegisterDetailPage from '../../pages/RegisterDetailPage';

const RegisterPage = ({ authed, match, history }) => {
  return (
    <PageTemplate
      header={<HeaderContainer authed={authed} location="register" />}
      // header={<RegisterHeaderContainer />}
    >
      <RegisterIndexPage history={history} />
      <Route path={`${match.url}`} component={RegisterDetailPage} />
    </PageTemplate>
  );
};

export default RegisterPage;
