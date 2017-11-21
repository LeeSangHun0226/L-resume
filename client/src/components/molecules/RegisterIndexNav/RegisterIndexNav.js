import React from 'react';
import styles from './RegisterIndexNav.scss';
import classNames from 'classnames/bind';
import FlexBox from '../../atoms/FlexBox';
import NavItem from '../../atoms/NavItem';
import { logout } from '../../../helpers/auth';
import { pdfServerConfig } from '../../../config';
import newEditImg from '../../../images/new-edit.svg';

const cx = classNames.bind(styles);

const RegisterIndexNav = ({
  onChangeTitle,
  title,
  history,
  isChangedTitle,
  onUpdateTitle,
  onSubmitTitle,
  onChangeNavList,
  navList,
  onNavClick,
}) => {
  const navLocation = 'registerIndex';
  const id = localStorage.getItem('userId');
  const pdflink = `${pdfServerConfig.url}/api/render?url=http://13.125.28.71:3000/pdf/${id}`
  return (
    <FlexBox column className={cx('registerIndex')}>
      <FlexBox space className={cx('header-wrapper')}>
        {
          !isChangedTitle
          ?
            <div className={cx('title-wrapper')}>
              <div className={cx('header-title')}>
                {title}
              </div>
              <button className={cx('edit-button')} onClick={onChangeTitle}>
                <img className={cx('image')} src={newEditImg} alt="new-edit" />
              </button>  
            </div>
          :
            <form onSubmit={onSubmitTitle} type="text">
              <input type="text" onChange={onUpdateTitle} />
              <input type="submit" value="submit" />
            </form>
        }
        <NavItem
          className={cx('header-menu')}
          onClick={() => {
          history.push({
          pathname: `/pdf/${id}`,
        })
      }}>
          <a href={pdflink}>download</a>
        </NavItem>
      </FlexBox>
      <FlexBox row space className={cx('nav-wrapper')}>
        {
          navList.map((nav, i) => {
            const active = nav.active;
            
            return (
              <NavItem
                key={i}
                className={cx('nav', { active })}
                onClick={() => {
                  onNavClick(i);
                  history.push({
                    pathname: nav.path
                  })
                }}
              >
                {nav.name}
              </NavItem>
            )}
          )
        }
      </FlexBox>
    </FlexBox>
  );
};

export default RegisterIndexNav;
