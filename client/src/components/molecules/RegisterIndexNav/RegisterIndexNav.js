import React from 'react';
import styles from './RegisterIndexNav.scss';
import classNames from 'classnames/bind';
import FlexBox from '../../atoms/FlexBox';
import NavItem from '../../atoms/NavItem';
import { logout } from '../../../helpers/auth';

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
  return (
    <FlexBox column>
      <FlexBox right className={cx('header-selected')}>
          <NavItem onClick={() => {
            const id = localStorage.getItem('userId');
            history.push({
            pathname: `/pdf/${id}`,
          })
        const iframe = `<iframe width='100%' height='100%' src='http://localhost:9000/api/render?url=http://localhost:3000/pdf/${id}'></iframe>`
        const x = window.open();
        x.document.open();
        x.document.write(iframe);
        x.document.close();
        }}>
            download
          </NavItem>
      </FlexBox>
      <FlexBox
        row
        className={cx('header-nav')}
      >
        <NavItem onClick={() => history.push({
          pathname: '/register/contact',
          state: {
            title: 'Contact info',
            path: 'contact',
            label: ['firstName', 'lastName', 'address', 'phone', 'email'],
          }
        })}>
          Contact info
        </NavItem>
        <NavItem onClick={() => history.push({
          pathname: '/register/education',
          state: {
            title: 'Education',
            path: 'education',
            label: ['schoolType', 'schoolName', 'startDate', 'endDate', 'description']
          } 
        })}>
          Education
        </NavItem>
        <NavItem onClick={() => history.push({
          pathname: '/register/academic',
          state: {
            title: 'Academic Achievements',
            path: 'academic',
            label: ['description']
          }
        })}>
          Academic Achievements
        </NavItem>
        <NavItem onClick={() => history.push({
          pathname: '/register/extracurricular',
          state: {
            title: 'Extracurricular Activities',
            path: 'extracurricular',
            label: ['position', 'activityName', 'city', 'country', 'startDate', 'endDate', 'description']
          }
        })}>
          Extracurricular Activities
        </NavItem>
        <NavItem onClick={() => history.push({
          pathname: '/register/award',
          state: {
            title: 'Awards & Recognitions',
            path: 'award',
            label: ['name', 'year', 'description'],
          }
          })}>
          Awards & Recognitions
        </NavItem>
      </FlexBox>
    </FlexBox>
  );
};

export default RegisterIndexNav;
