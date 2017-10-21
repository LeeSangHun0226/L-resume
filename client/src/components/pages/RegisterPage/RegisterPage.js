import React from 'react';
import { Route } from 'react-router-dom';
import PageTemplate from '../../templates/PageTemplate';
import RegisterIndexPage from '../../pages/RegisterIndexPage';
import RegisterDetailPage from '../../pages/RegisterDetailPage';

const RegisterPage = ({ match, history }) => {
  return (
    <PageTemplate
      // header={<RegisterHeaderContainer />}
    >
      <RegisterIndexPage history={history} />
      <Route path={`${match.url}`} component={RegisterDetailPage} />
    </PageTemplate>
  );
};

export default RegisterPage;
