import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import Logo from '../../atoms/Logo';
import HeaderNav from '../../molecules/HeaderNav';

const cx = classNames.bind(styles);

const Header = ({
  onLoginButtonClick,
  user,
  solid,
  authed,
  location,
}) => {
  return (
    <div className={cx('header', location )}
         style={location === 'home' ? {background: 'none'} : {}}>
      <div className={cx('responsive')}>
        <div className={cx('logo-wrapper')}>
          <Logo location={location} authed={authed}/>
          {
              location === 'home'?
              <div className={cx('lang-wrapper')}>
                  <div className={cx('lang-text')}>KR</div>
                  <div className={cx('dropdown-icon')}></div>
              </div>
              :
              <div className={cx('lang-wrapper-other')}>
                  <div className={cx('lang-text')}>KR</div>
                  <div className={cx('dropdown-icon')}></div>
              </div>
          }
        </div>

        <div>
          <HeaderNav authed={authed} location={location}/>
        </div>
      </div>
    </div>
  );
};

export default Header;
