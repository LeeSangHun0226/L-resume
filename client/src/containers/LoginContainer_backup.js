import React, { Component } from 'react';
import { connect } from 'react-redux';
import validate from 'validate.js';
import {
  Config,
  CognitoIdentityCredentials,
} from 'aws-sdk';
import {
  CognitoUser,
  CognitoUserPool,
  CognitoUserAttribute,
  AuthenticationDetails,
} from "amazon-cognito-identity-js";
import {
  authChangeInputForm,
  authSetError,
} from '../actions/auth_action.js';
import Login from '../components/organisms/Login';
import appConfig from '../config';

Config.region = appConfig.region;
Config.credentials = new CognitoIdentityCredentials({
  IdentityPoolId: appConfig.IdentityPoolId
});

const userPool = new CognitoUserPool({
  UserPoolId: appConfig.UserPoolId,
  ClientId: appConfig.ClientId,
});

class LoginContainer extends Component {

  handleChangeInput = (e) => {
    const { name, value } = e.target;
    const {
      authForms,
      authChangeInputForm,
      authSetError,
     } = this.props;
    const constraints = {
      email: {
        email: {
          message: () => '^잘못된 형식의 이메일입니다.',
        },
      },
      password: {
        length: {
          minimum: 6,
          tooShort: '^비밀번호는 %{count}자 이상 입력하세요.',
        },
      },
    };
    authChangeInputForm(name, value);
    const error = validate({
      email: authForms.email,
      password: authForms.password
    }, constraints);
    
    error ? authSetError(error) : authSetError(null);

  }

  handleLogIn = () => {
    const { email, password } = this.props.authForms;
    const Email = email;
    const Password = password;

    return new Promise((resolve, reject) => {
      const authenticationData = {
        Email,
        Password,
      };

      const authenticationDetails = new AuthenticationDetails(authenticationData);
      const userData = {
        Username: Email,
        Pool: userPool,
      }

      const cognitoUser = new CognitoUser(userData);
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
          const token = result.getAccessToken().getJwtToken();
          const user = userPool.getCurrentUser();
          console.log(result.idToken.jwtToken)
          
          // console.log('access token + ' + result.getAccessToken().getJwtToken())
          resolve(result);
        },
        onFailure: function (reject) {
          alert(reject)
        },
      })
    })
  }

  handleFindPassword = () => {
    const { email } = this.props.authForms;
    const Email = email;
    const userData = {
      Username: Email,
      Pool: userPool,
    }

    const cognitoUser = new CognitoUser(userData);
    cognitoUser.forgotPassword({
      onSuccess: function (data) {
        // successfully initiated reset password request
        console.log('CodeDeliveryData from forgotPassword: ' + data);
      },
      onFailure: function (err) {
        alert(err);
      },
      //Optional automatic callback
      inputVerificationCode: function (data) {
        console.log('Code sent to: ' + data);
        var verificationCode = prompt('Please input verification code ', '');
        var newPassword = prompt('Enter new password ', '');
        cognitoUser.confirmPassword(verificationCode, newPassword, this);
      }
    });
  }

  render() {
    const { authForms, authError } = this.props;
    const {
      handleChangeInput,
      handleChangeInputEmail,
      handleChangeInputPassword,
      handleLogIn,
      handleFindPassword,
      handleMoveTerms,
    } = this;

    return (
      <div>
      {/*
        <h1>
          :Resume builder
        </h1>
        <p>
          Lprep에서 운영하는 입시용 Resume Builder입니다.<br />
          본인의 resume를 언제든지 편하게 작성해 보세요.
        </p>
      */}
        <Login
          form={authForms}
          error={authError}
          onChangeInputEmail={handleChangeInputEmail}
          onChangeInputPassword={handleChangeInputPassword}
          onMoveTerms={handleMoveTerms}
          onFindPassword={handleFindPassword}
          onLogIn={handleLogIn}
          onChangeInput={handleChangeInput}
        />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    authForms: state.authReducer.authForms,
    authError: state.authReducer.authError,
  }), {
    authChangeInputForm,
    authSetError,
  }
)(LoginContainer);
