import React, { Component } from 'react';
import { connect } from 'react-redux';
import validate from 'validate.js';
import axios from 'axios';

import { login, resetPassword } from '../helpers/auth';
import {
  authChangeInputForm,
  authSetError,
} from '../actions/auth_action.js';
import Login from '../components/organisms/Login';
import { fetchServerConfig } from '../config';

const setErrorMessage = (err) => {
  return {
    loginError: err,
  }
}

class LoginContainer extends Component {
  
  state = {
    loginError: null
  }

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

  handleLogIn = (e) => {
    const { email, password } = this.props.authForms;
    const { authSetError } =this.props;
    login(email, password)
      .catch(err => {
        this.setState(
          setErrorMessage('Invalid username/password')
        )
        const error = {
          login: this.state.loginError,
        }
        authSetError(error);
      })
    e.preventDefault();
  }

  handleResetPassword = () => {
    const { email } = this.props.authForms;
    const { authSetError } = this.props;
    resetPassword(email)
    .then(() => this.setState(
      setErrorMessage(`Password reset email sent to ${email}`)
    ))
    .catch(err => {
      this.setState(
        setErrorMessage('Email address not found')
      )
      const error = {
        login: this.state.loginError,
      }
      authSetError(error);
    })
  }

  render() {
    const { authForms, authError } = this.props;
    const { loginError } = this.state;
    const {
      handleChangeInput,
      handleChangeInputEmail,
      handleChangeInputPassword,
      handleLogIn,
      handleResetPassword,
      handleMoveTerms,
    } = this;

    return (
      <div>
        <Login
          form={authForms}
          error={authError}
          onChangeInputEmail={handleChangeInputEmail}
          onChangeInputPassword={handleChangeInputPassword}
          onMoveTerms={handleMoveTerms}
          onResetPassword={handleResetPassword}
          onLogIn={handleLogIn}
          onChangeInput={handleChangeInput}
          loginError={loginError}
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
