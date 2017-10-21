import React from 'react';
import styles from './HeaderNav.scss';
import classNames from 'classnames/bind';
import FlexBox from '../../atoms/FlexBox';
import NavItem from '../../atoms/NavItem';
import { logout } from '../../../helpers/auth';

const cx = classNames.bind(styles);

const HeaderNav = ({ authed }) => {
  return (
    <FlexBox
      row
      className={cx('header-nav')}
    >
    {
      authed
      ?
        <NavItem 
          to="/" 
          onClick={() => logout()}>
            로그아웃
        </NavItem>
      :
      <FlexBox>
        <NavItem to="/signup">
          가입하기
        </NavItem>
        <NavItem to="/login">
          로그인
        </NavItem>
      </FlexBox>  
    }
    </FlexBox>
  );
};

export default HeaderNav;
