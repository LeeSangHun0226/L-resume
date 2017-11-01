import React from 'react';
import styles from './Footer.scss';
import classNames from 'classnames/bind';
import ScrollButton from '../../atoms/ScrollButton';

const cx = classNames.bind(styles);

const Footer = ({
  onLoginButtonClick,
  user,
  solid,
  authed,
}) => {
  return (
    <div className={cx('footer', { solid })}>
      <p>2017 Lprep All rights reserved</p>
      <ScrollButton scrollStepInPs="50" delayInMs="10" title="GO TO TOP"/>
    </div>
  );
};

export default Footer;
