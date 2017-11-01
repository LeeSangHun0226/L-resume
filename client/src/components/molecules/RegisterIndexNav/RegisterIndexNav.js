import React from 'react';
import styles from './RegisterIndexNav.scss';
import classNames from 'classnames/bind';
import FlexBox from '../../atoms/FlexBox';
import NavItem from '../../atoms/NavItem';
import { logout } from '../../../helpers/auth';
import { pdfServerConfig } from '../../../config';

const cx = classNames.bind(styles);

// const push = (history, to, title, label) => {
//   return history.push({
//     pathname: to,
//     state: {
//       title,
//       label,
//     }
//   })
// }

const RegisterIndexNav = ({ history }) => {
  const navLocation = 'registerIndex';

  return (
    <FlexBox column className={cx('registerIndex')}>
      <FlexBox space className={cx('header-wrapper')}>
          <div className={cx('header-title')}>
            MY RESUME TITLE
          </div>
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
        <NavItem 
          className={cx('nav')}
          onClick={() => history.push({
            pathname: '/register/contact',
            state: {
              title: 'Contact info',
              path: 'contact',
              label: ['firstName', 'lastName', 'address', 'phone', 'email'],
            }
        })}>
          Contact info
        </NavItem>
        <NavItem 
          navLocation={navLocation}
          className={cx('nav')}
          onClick={() => history.push({
            pathname: '/register/education',
            state: {
              title: 'Education',
              path: 'education',
              label: ['schoolType', 'schoolName', 'startDate', 'endDate', 'description']
            } 
        })}>
          Education
        </NavItem>
        <NavItem 
          className={cx('nav')}
          navLocation={navLocation}
          onClick={() => history.push({
            pathname: '/register/academic',
            state: {
              title: 'Academic Achievements',
              path: 'academic',
              label: ['description']
            }
        })}>
          Academic
          <br />
          Achievements
        </NavItem>
        <NavItem 
          className={cx('nav')}
          navLocation={navLocation}
          onClick={() => history.push({
            pathname: '/register/extracurricular',
            state: {
              title: 'Extracurricular Activities',
              path: 'extracurricular',
              label: ['position', 'activityName', 'city', 'country', 'startDate', 'endDate', 'description']
            }
        })}>
          Extracurricular
          <br />
          Activities
        </NavItem>
        <NavItem 
          className={cx('nav')}
          navLocation={navLocation}
          onClick={() => history.push({
            pathname: '/register/award',
            state: {
              title: 'Awards & Recognitions',
              path: 'award',
              label: ['name', 'year', 'description'],
            }
          })}>
          Awards &
          <br />
          Recognitions
        </NavItem>
        <NavItem
          className={cx('nav')}
          navLocation={navLocation}
        >
          Add New +
        </NavItem>
      </FlexBox>
    </FlexBox>
  );
};

export default RegisterIndexNav;
