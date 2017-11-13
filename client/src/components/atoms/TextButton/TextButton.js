import React from 'react';
import styles from './TextButton.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const TextButton = ({ className, left, right, children, ...rest }) => {
  return (
    <div className={cx('text-button', { right }, className, { left })} {...rest}>
      {children}
    </div>
  );
};

export default TextButton;
