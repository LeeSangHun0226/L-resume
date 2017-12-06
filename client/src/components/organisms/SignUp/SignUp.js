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
  signUpError,
}) => {

  const {
    email,
    password,
  } = form;

  const {
    email: emailError,
    password: passwordError,
    // signup: signUpError,
  } = error ? error : {};

  // console.log(signUpError)
  return (
    <div className={cx('signUp-container')}>
        <div className={cx('content')}>
          <div className={cx('form')}>
            <InputError error={emailError} />
            <Input
              transparent
              value={email}
              onChange={onChangeInput}
              name="email"
              placeholder="E-mail(이메일 주소)"
            />
            <div className={cx('term')}>
              회원가입시 &nbsp; <a href="http://naver.com">이용약관</a>에 자동동의
            </div>
          </div>
          <div className={cx('form')}>
            <InputError error={passwordError} />
            <Input
              transparent
              value={password}
              onChange={onChangeInput}
              name="password"
              placeholder="Password(비밀번호)"
              type="password"
            />
          </div>
          <div className={cx('form-button')}>
            <InputError error={signUpError} />
            <Button roundCorner onClick={onSignUp} color={"blue"}>무료로 시작</Button>
          </div>
        </div>
    </div>
  );
};

export default SignUp;
