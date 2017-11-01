import React from 'react';
import RegisterTemplate from '../../templates/RegisterTemplate';
import RegisterTitleContainer from '../../../containers/RegisterTitleContainer';
import RegisterFormContainer from '../../../containers/RegisterFormContainer';

const RegisterDetailPage = (props) => {
  const title = props.location.state ? props.location.state.title : 'resume list' ;
  const label = props.location.state ? props.location.state.label : [] ;
  const path = props.location.state ? props.location.state.path : '';
  const pathname = props.location.pathname ? props.location.pathname : false;
  return (
    <RegisterTemplate>
      <RegisterTitleContainer title={title} />
      {
        pathname === '/register' ? <div style={{ minHeight: '400px' }}>resume list 들어갈 곳</div> : 
        <RegisterFormContainer label={label} title={title} path={path} />
      }
    </RegisterTemplate>
  );
};

export default RegisterDetailPage;
