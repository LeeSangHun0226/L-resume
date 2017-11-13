import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Button = ({
  children, 
  flex, 
  className, 
  roundCorner, 
  invert, 
  flat,
  color,
  padding,
  xPadding,
  style,
  disabled,
  width,
  blue,
  ...rest
}) => {
  const dynamicStyle = {
    ...(xPadding ? {
      paddingLeft: xPadding,
      paddingRight: xPadding
    } : {})
  }
  return (
    <div
      className={
        cx('button', {
          invert,
          flex,
          flat,
          disabled,
          roundCorner,
          blue,
        }, color, className)
      }
      style={{
        padding,
        width: `${width}rem`,
        ...style,
        ...dynamicStyle,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Button;