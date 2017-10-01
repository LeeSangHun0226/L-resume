import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import Logo from '../../atoms/Logo';
import HeaderNav from '../../molecules/HeaderNav';

const cx = classNames.bind(styles);

const Header = ({
  onLoginButtonClick,
  user,
  solid
}) => {
  return (
    <div className={cx('header', { solid })}>
      <div className={cx('responsive')}>
        <div className={cx('logo-wrapper')}>
          <Logo />
        </div>
        <div>
          <HeaderNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
