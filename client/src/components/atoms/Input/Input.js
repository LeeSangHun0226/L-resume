import React from 'react';
import styles from './Input.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Input = ({ transparent, big, fullWidth, className, ...rest }) => {
  return (
    <input className={cx('input', {
      big,
      'full-width': fullWidth,
      'transparnet': transparent,
    }, className)} {...rest} />
  );
};

export default Input;
