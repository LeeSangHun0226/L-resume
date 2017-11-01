import React from 'react';
import styles from './SignUp.scss';
import classNames from 'classnames/bind';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import TextButton from '../../atoms/TextButton';
import InputError from '../../atoms/InputError';

const cx = classNames.bind(styles);

const SignUp = ({
  form,
  error,
  onChangeInput,
  onSignUp,
}) => {

  const {
    email,
    password,
  } = form;

  const {
    email: emailError,
    password: passwordError,
    signup: signUpError,
  } = error ? error : {};

  return (
    <div className={cx('signUp-container')}>
        <div className={cx('content')}>
          <div className={cx('form')}>
            <Input
              value={email}
              onChange={onChangeInput}
              name="email"
              placeholder="e-mail"
              fullWidth
            />
            <InputError error={emailError} />
          </div>
          <div className={cx('form')}>
            <Input
              value={password}
              onChange={onChangeInput}
              name="password"
              placeholder="password"
              type="password"
              fullWidth
            />
            <InputError error={passwordError} />
            <InputError error={signUpError} />
          </div>
          <div className={cx('form')}>
            <Button roundCorner width={10} onClick={onSignUp}>회원가입</Button>
          </div>
        </div>
    </div>
  );
};

export default SignUp;
