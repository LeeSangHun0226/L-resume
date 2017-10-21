import React, { Component } from 'react';
import { connect } from 'react-redux';
import validate from 'validate.js';
import axios from 'axios';
import { auth } from '../helpers/auth';
import {
  userRegisterAuthInfo,
  userSetError,
  userConfirmAuthCode,
} from '../actions/user_action.js';
import SignUp from '../components/organisms/SignUp';
import appConfig from '../config';

const setErrorMessage = (err) => {
  return {
    signUpError: err.message
  }
}

class SignUpContainer extends Component {

  state = {
    signUpError: null,
  }

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
      signUp: this.state.signUpError,
    }, constraints);

    error ? userSetError(error) : userSetError(null);

  }

  handleSignUp = (e) => {
    const { email, password } = this.props.userAuthForms;
    const { userSetError } = this.props;
    auth(email, password)
    .then(() => {
      axios.post('http://localhost:4000/api/user', {
        email,
        password,
      })
      .then((res) => localStorage.setItem('userId', res.data._id))
      .catch(err => console.log(err))
    })
    .catch(err => {
      this.setState(
      setErrorMessage(err)
    )
    const error = {
      signup: this.state.signUpError,
    }
    userSetError(error)
    })
    e.preventDefault();
  }

  render() {
    const { userAuthForms, userError } = this.props;
    const {
      handleChangeInput, 
      handleSignUp,
    } = this;

    return (
      <div>
        <SignUp
          form={userAuthForms}
          error={userError}
          onSignUp={handleSignUp}
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