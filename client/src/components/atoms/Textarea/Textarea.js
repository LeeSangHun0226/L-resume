import React from 'react';
import styles from './Textarea.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Textarea = ({ big, fullWidth, className, ...rest }) => {
  return (
    <textarea className={cx('textarea', {
      big,
      'full-width': fullWidth
    }, className)} {...rest} />
  );
};

export default Textarea;
