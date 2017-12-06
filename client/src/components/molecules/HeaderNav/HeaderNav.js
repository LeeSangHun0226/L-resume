import React from 'react';
import styles from './HeaderNav.scss';
import classNames from 'classnames/bind';
import NavigationApp from '../../atoms/Navigation';
import FlexBox from '../../atoms/FlexBox';
import NavItem from '../../atoms/NavItem';
import { logout } from '../../../helpers/auth';

const cx = classNames.bind(styles);

const HeaderNav = ({ authed, location }) => {
  // console.log(authed);
  return (
    <FlexBox
      row
      className={cx('header-nav')}
    >
    {
      authed
      ?
      <div className={cx('logout-form')}>
          {
        location !== 'login'?
        <NavItem
          className={cx('nav-item-logout')}
          location={location}
          to="/"
          onClick={() => {
            logout()
            // localStorage.setItem('isLogedIn', false);
          }
          }>
            LOG OUT
        </NavItem>
        :
            false
        }
        <div className={cx('hamburger')}>
            <NavigationApp />
        </div>
      </div>
      :
      <div className={cx('login-form')}>
        <NavItem
          className={cx('nav-item')}
          location={location}
          to="/login"
        >
          LOG IN
        </NavItem>
        <div className={cx('hamburger')}>
            <NavigationApp />
      </div>
      </div>
    }
    </FlexBox>
  );
};

export default HeaderNav;
