import React from 'react';
import styles from './HeaderNav.scss';
import classNames from 'classnames/bind';
import FlexBox from '../../atoms/FlexBox';
import NavItem from '../../atoms/NavItem';

const cx = classNames.bind(styles);

const HeaderNav = () => {
  return (
    <FlexBox
      row
      className={cx('header-nav')}
    >
      <NavItem to="/signup">
        가입하기
      </NavItem>
      <NavItem to="/register">
        시작하기
      </NavItem>
    </FlexBox>
  );
};

export default HeaderNav;
