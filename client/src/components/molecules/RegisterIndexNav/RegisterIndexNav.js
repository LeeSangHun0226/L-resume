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
          label: ['schoolType', 'schoolName', 'startDate', 'endDate']
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
          label: ['name', 'year'],
        }
        })}>
        Awards & Recognitions
      </NavItem>
    </FlexBox>
  );
};

export default RegisterIndexNav;
