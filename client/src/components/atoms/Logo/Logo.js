import React from 'react';
import styles from './Logo.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import logoImg from '../../../images/logo_w.svg';

const cx = classNames.bind(styles);

const Logo = ({ location }) => {
  return (
    <Link to="/" className={cx('logo', location)}>
      <img className={cx('img')} src={logoImg} alt="logo-img" />
    </Link>
  );
};

export default Logo;
