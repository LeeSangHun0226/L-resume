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
}) => {
  const navLocation = 'registerIndex';

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
          const id = localStorage.getItem('userId');
          history.push({
          pathname: `/pdf/${id}`,
        })
      // const iframe = `<iframe width='100%' height='100%' src='${pdfServerConfig.url}/api/render?url=http://localhost:3000/pdf/${id}'></iframe>`
      // const x = window.open();
      // x.document.open();
      // x.document.write(iframe);
      // x.document.close();
      }}>
          download
        </NavItem>
      </FlexBox>
      <FlexBox row space className={cx('nav-wrapper')}>
        {
          navList.map((nav, i) => (
            <NavItem
              key={i}
              className={cx('nav')}
              onClick={() => history.push({
                pathname: nav.path
              })}
            >
              {nav.name}
            </NavItem>
          ))
        }
        <NavItem
          className={cx('nav')}
          onClick={onChangeNavList}
        >
          Add New +
        </NavItem>
      </FlexBox>
    </FlexBox>
  );
};

export default RegisterIndexNav;
