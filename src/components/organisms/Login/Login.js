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
  onFindPassword,
  onChangeInputEmail,
  onChangeInputPassword,
  onChangeInput,
  onLogIn,
}) => {
  
  const { email, password } = form;

  const {
    email: emailError,
    password: passwordError,
    // localLogin: localLoginError,
  } = error ? error : {};

  return (
    <div className={cx('login-container')}>
      <div className={cx('bar')} />
      <div className={cx('content')}>
        <div className={cx('form')}>
          <Input
            value={email}
            onChange={onChangeInput}
            name="email"
            placeholder="e-mail"
          />
          <InputError error={emailError} />
          <TextButton onClick={onMoveTerms}>이용약관</TextButton>
        </div>
        <div className={cx('form')}>
          <Input
            value={password}
            onChange={onChangeInput}
            name="password"
            placeholder="password"
            type="password"
          />
          <InputError error={passwordError} />
          <TextButton onClick={onFindPassword}>비밀번호 찾기</TextButton>
        </div>
        <div className={cx('form')}>
          <Button roundCorner width={10} onClick={onLogIn}>시작</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
