import React from 'react';
import styles from './RegisterIndex.scss';
import classNames from 'classnames/bind';
import Logo from '../../atoms/Logo';
import RegisterIndexNav from '../../molecules/RegisterIndexNav';

const cx = classNames.bind(styles);

const RegisterIndex = ({
  onLoginButtonClick,
  user,
  solid,
  history,
}) => {
  return (
    <div className={cx('RegisterIndex', { solid })}>
      <div className={cx('responsive')}>
        <div>
          <RegisterIndexNav history={history} />
        </div>
      </div>
    </div>
  );
};

export default RegisterIndex;
