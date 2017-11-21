import React from 'react';
import styles from './Logo.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import whiteLogo from '../../../images/logo_w.svg';
import blackLogo from '../../../images/logo_b.svg';

const cx = classNames.bind(styles);

const Logo = ({ location, authed }) => {
  return (
    <Link to="/" className={cx('logo', location)}>
      {
        !authed 
          ? <img className={cx('img')} src={whiteLogo} alt="logo-img" />
          : <img className={cx('img')} src={blackLogo} alt="logo-img" />
      }
      
    </Link>
  );
};

export default Logo;
