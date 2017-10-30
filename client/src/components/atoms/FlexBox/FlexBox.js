import React from 'react';
import styles from './FlexBox.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const FlexBox = ({
  row,
  column,
  center,
  right,
  space,
  className,
  children,
  ...rest
}) => {
  return (
    <div
      className={cx('flex-box', {
        row,
        column,
        center,
        right,
        space,
      }, className)}
      {...rest}>
      {children}
    </div>
  );
};

export default FlexBox;
