import React, { Component } from 'react';
import { connect } from 'react-redux';
import validate from 'validate.js';
import {
  Config,
  CognitoIdentityCredentials,
} from 'aws-sdk';
import {
  CognitoUserPool,
  CognitoUserAttribute,
} from "amazon-cognito-identity-js";
import {
  userRegisterAuthInfo,
  userSetError,
  userConfirmAuthCode,
} from '../actions/user_action.js';
import SignUp from '../components/organisms/SignUp';
import appConfig from '../config';

Config.region = appConfig.region;
Config.credentials = new CognitoIdentityCredentials({
  IdentityPoolId: appConfig.IdentityPoolId
});

const userPool = new CognitoUserPool({
  UserPoolId: appConfig.UserPoolId,
  ClientId: appConfig.ClientId,
});

class SignUpContainer extends Component {

  handleChangeInput = (e) => {
    const { name, value } = e.target;
    const {
      userAuthForms,
      userSetError,
      userRegisterAuthInfo,
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
    userRegisterAuthInfo(name, value);
    const error = validate({
      email: userAuthForms.email,
      password: userAuthForms.password,
    }, constraints);

    error ? userSetError(error) : userSetError(null);

  }

  handleConfirmAuthCode = () => {
    const { userConfirmAuthCode } = this.props;
    const { email, password } = this.props.userAuthForms;
    const attributeList = [
      new CognitoUserAttribute({
        Name: 'email',
        Value: email,
      }),
    ];
    userPool.signUp(email, password, attributeList, null, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      userConfirmAuthCode(true);
    })
  }

  render() {
    const { userAuthForms, userError, isUserConfirmedAuthCode } = this.props;
    const {
      handleChangeInput,
      handleConfirmAuthCode,
      handleSignUp,
    } = this;

    return (
      <div>
        <SignUp
          form={userAuthForms}
          error={userError}
          isUserConfirmedAuthCode={isUserConfirmedAuthCode}
          onConfirmAuthCode={handleConfirmAuthCode}
          onChangeInput={handleChangeInput}
        />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    userAuthForms: state.userReducer.userAuthForms,
    userError: state.userReducer.userError,
    isUserConfirmedAuthCode: state.userReducer.isUserConfirmedAuthCode,
  }), {
    userRegisterAuthInfo,
    userSetError,
    userConfirmAuthCode,
  }
)(SignUpContainer);
