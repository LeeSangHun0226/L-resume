import React from 'react';
import { Route } from 'react-router-dom';
import PageTemplate from '../../templates/PageTemplate';
import HeaderContainer from '../../../containers/HeaderContianer';
import RegisterIndexPage from '../../pages/RegisterIndexPage';
// import RegisterDetailPage from '../../pages/RegisterDetailPage';
import RegisterTemplate from '../../templates/RegisterTemplate';
import ContactContainer from '../../../containers/Register/ContactContainer';
import AcademicContainer from '../../../containers/Register/AcademicContainer';
import EducationContainer from '../../../containers/Register/EducationContainer';
import ExtracurricularContainer from '../../../containers/Register/ExtracurricularContainer';
import AwardContainer from '../../../containers/Register/AwardContainer';
import ExtraContainer from '../../../containers/Register/ExtraContainer';


const RegisterPage = ({ authed, match, history }) => {

  return (
    <PageTemplate
      header={<HeaderContainer authed={authed} location="register" />}
      // header={<RegisterHeaderContainer />}
    >
      <RegisterIndexPage history={history} />
      <RegisterTemplate>
        <Route exact path="/register/contact" component={ContactContainer} />
        <Route exact path="/register/education" component={EducationContainer} />
        <Route exact path="/register/academic" component={AcademicContainer} />
        <Route exact path="/register/extracurricular" component={ExtracurricularContainer} />
        <Route exact path="/register/award" component={AwardContainer} />
        <Route exact path="/register/new" component={ExtraContainer} />
      </RegisterTemplate>
      {/* <Route path={`${match.url}`} component={RegisterDetailPage} /> */}
    </PageTemplate>
  );
};

export default RegisterPage;
