import React from 'react';
import Hamburger from '../Hamburger';
import NavItem from '../NavItem';
import FlexBox from '../FlexBox';
import styles from './Navigation.scss';
import classNames from 'classnames/bind';
import { logout } from '../../../helpers/auth';

const cx = classNames.bind(styles);

const NavLink = ({ authed, location }) => {
  // console.log(authed);
  return (
    <FlexBox
    >
    {
      authed
      ?
      <div className={cx('logout-form')}>
        <NavItem
          className={cx('nav-item')}
          location={location}
          to="/"
          onClick={() => {
            logout()
            // localStorage.setItem('isLogedIn', false);
          }
          }>
            LOG OUT
        </NavItem>
      </div>
      :
      <div className={cx('login-form')}>
        <NavItem
          className={cx('nav-item')}
          location={location}
          to="/login"
        >
          LOG IN
        </NavItem>
      </div>
    }
</FlexBox>
  );
};

class NavigationApp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      show: false
    }
    this.handle_toggleShow = this.handle_toggleShow.bind(this)
  }
  handle_toggleShow(){
    this.setState({
      show: !this.state.show
    })
  }
  render(){
    const styles = {
        container: {
          position: 'absolute',
          top: '7rem',
          left: '0',
          width: '100%',
          zIndex: '9999'
        },
        item: {
            width: '100%',
            lineHeight: '6.36rem',
            backgroundColor: '#fff',
            textAlign: 'center',
            fontSize: '1.8rem',
            border: '1px solid #F0F0F0',
            marginBottom: '-1px',
            fontWeight: 'bold',
            fontFamily: 'Apple SD Gothic Neo, sans-serif'
        }
    }
    return (<div className='MainContainer'>
        <div
          id='ReactButton'
          onClick={()=>       {this.handle_toggleShow()}}>
          <Hamburger />
        </div>
        <div
          transitionName='slide'>
        {this.state.show &&
            <div style={styles.container}>
                <div className='sideMenu'>
                  <div style={styles.item}><NavLink /></div>
                  <div style={styles.item}>EN</div>
                  <div style={styles.item}>KR</div>
                </div>
              </div>
          }
        </div>
      </div>
      )
  }
}
export default NavigationApp;
