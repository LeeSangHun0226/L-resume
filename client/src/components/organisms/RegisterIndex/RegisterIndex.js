import React from 'react';
import styles from './RegisterIndex.scss';
import classNames from 'classnames/bind';
import Logo from '../../atoms/Logo';
import RegisterIndexNav from '../../molecules/RegisterIndexNav';

const cx = classNames.bind(styles);

const RegisterIndex = ({
  onLoginButtonClick,
  user,
  solid,
  history,
  onChangeTitle,
  title,
  isChangedTitle,
  onUpdateTitle,
  onSubmitTitle,
  navList,
  onChangeNavList,
  onNavClick,
  onExtraTitleChange,
}) => {
  return (
    <div className={cx('RegisterIndex', { solid })}>
      <div className={cx('responsive')}>
        <div>
          <RegisterIndexNav
            history={history}
            onChangeTitle={onChangeTitle}
            title={title}
            isChangedTitle={isChangedTitle}
            onUpdateTitle={onUpdateTitle}
            onSubmitTitle={onSubmitTitle}
            navList={navList}
            onChangeNavList={onChangeNavList}
            onNavClick={onNavClick}
            onExtraTitleChange={onExtraTitleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterIndex;
