import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const PageTemplate = ({ location, header, children, responsive, padding, position }) => {
  // console.log(location)
  return (
    <div className={cx('page')}>
      <header className={cx('header', location)}>
        {header}
      </header>
      <main className={cx('content', {
        padding: padding, // sets 3.5 rem padding-top
        responsive
      })}>
        {children}
      </main>
    </div>
  );
};

export default PageTemplate;
