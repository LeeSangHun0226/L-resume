import React from 'react';
import styles from './HeaderNav.scss';
import classNames from 'classnames/bind';
import FlexBox from '../../atoms/FlexBox';
import NavItem from '../../atoms/NavItem';
import { logout } from '../../../helpers/auth';

const cx = classNames.bind(styles);

const HeaderNav = ({ authed, location }) => {
  console.log(authed);
  return (
    <FlexBox
      row
      className={cx('header-nav')}
    >
    {
      authed
      ?
        <NavItem
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
        <NavItem
          location={location}
          to="/login"
        >
          LOG IN
        </NavItem>
    }
    </FlexBox>
  );
};

export default HeaderNav;
