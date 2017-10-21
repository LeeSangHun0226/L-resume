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
  padding="0.5rem",
  xPadding,
  style,
  disabled,
  width,
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