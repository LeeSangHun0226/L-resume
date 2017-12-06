import React from 'react';
import styles from './Login.scss';
import classNames from 'classnames/bind';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import TextButton from '../../atoms/TextButton';
import InputError from '../../atoms/InputError';

const cx = classNames.bind(styles);

const Login = ({
  // email,
  // password,
  form,
  error,
  onMoveTerms,
  onResetPassword,
  onChangeInputEmail,
  onChangeInputPassword,
  onChangeInput,
  onLogIn,
  loginError,
}) => {

  const { email, password } = form;

  const {
    email: emailError,
    password: passwordError,
    // login: loginError,
    // localLogin: localLoginError,
  } = error ? error : {};

  return (
    <div className={cx('login-container')}>
      <div className={cx('bar')} />
      <div className={cx('content')}>
        <h3 className={cx('title')}>로그인</h3>
        <div className={cx('form')}>
          <Input
            value={email}
            onChange={onChangeInput}
            name="email"
            placeholder="E-mail(이메일주소)"
            className={cx('form-input')}
          />
          <InputError
              error={emailError}
              />
        </div>
        <div className={cx('form')}>
          <Input
            value={password}
            onChange={onChangeInput}
            name="password"
            placeholder="Password(비밀번호)"
            type="password"
            className={cx('form-input')}
          />
          <InputError
              error={passwordError}
              />
          <TextButton
              onClick={onResetPassword}
              className={cx('form-password')}>
              비밀번호 찾기
          </TextButton>
        </div>
        <div className={cx('form')}>
          <InputError error={loginError} />
        </div>
        <div className={cx('form')}>
          <Button roundCorner
              className={cx('button')}
              onClick={onLogIn}>
              로그인
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
