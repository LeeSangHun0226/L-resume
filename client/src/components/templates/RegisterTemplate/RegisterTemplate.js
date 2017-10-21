import React from 'react';
import styles from './RegisterTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const RegisterTemplate = ({ index, children, responsive, padding }) => {
  return (
    <div className={cx('page')}>
      <main className={cx('content', {
        padding: padding, // sets 3.5 rem padding-top
        responsive
      })}>
        {children}
      </main>
    </div>
  );
};

export default RegisterTemplate;
