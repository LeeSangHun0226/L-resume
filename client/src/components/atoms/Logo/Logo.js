import React from 'react';
import styles from './Logo.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Logo = ({ location }) => {
  return (
    <Link to="/" className={cx('logo', location)}>
      LESUME BUILDER
    </Link>
  );
};

export default Logo;
