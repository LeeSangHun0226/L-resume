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
          location === 'home'?
       <div className={cx('img-wrapper')}>
           <img className={cx('white')} src={whiteLogo} alt="logo-img" />
           <img className={cx('black')} src={blackLogo} alt="logo-img" />
       </div>
       :
       <div className={cx('img-wrapper')}>
           <img src={blackLogo} alt="logo-img" />
       </div>
      }

    </Link>
  );
};

export default Logo;
