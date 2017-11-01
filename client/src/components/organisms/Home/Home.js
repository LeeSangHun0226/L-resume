import React from 'react';
import styles from './Home.scss';
import classNames from 'classnames/bind';
import notebookSVG from '../../../images/home-notebook.svg';
import homeImage from '../../../images/home-background.jpg';
import LoginPage from '../../pages/LoginPage';
import SignUpContainer from '../../../containers/SignUpContainer';

// import NotebookSVG from 'svg-react-loader?name=NotebookSVG!../../../images/home-notebook.svg';

const cx = classNames.bind(styles);

const Home = ({
  onLoginButtonClick,
  user,
  solid,
  authed,
  backgroundColor,
}) => {
  return (
    <div className={cx('home', { backgroundColor })}>
      <div className={cx('home-background')}>
        <div className={cx('home-content-wrapper')}>
          <h2 className={cx('home-title')}>
            : Rusume builder
          </h2>
          <p className={cx('home-sub-title')}>
            Lprep에서 운영하는 입시용 Resume builder입니다. 
          </p>
          <p className={cx('home-sub-title')}>
            본인의 resume를 편하게 작성 해보세요.
          </p>
          <SignUpContainer />
        </div>
      </div>
      <div className={cx('middle-wrapper')} >
        <div className={cx('middle-box')}>
          <div className={cx('middle-content-wrapper')}>
            <p className={cx('middle-content-title')}>
              생활기록
            </p>
            <p className={cx('middle-content-sub-title')}>
              Be in control of your informaition by setting policies in real-time knowing your personal or company
            </p>
          </div>
        </div>
        <div className={cx('middle-box')}>
          <div className={cx('middle-content-wrapper')}>
            <p className={cx('middle-content-title')}>
              워드작업 NO
            </p>
            <p className={cx('middle-content-sub-title')}>
              It's simple, fast and easy to use. You can share your files through our mobile apps, web app
            </p>
          </div>
        </div>
        <div className={cx('middle-box')}>
          <div className={cx('middle-content-wrapper')}>
            <p className={cx('middle-content-title')}>
              공유하기
            </p>
            <p className={cx('middle-content-sub-title')}>
              Your business can keep running the way you are used to.
            </p>
          </div>
        </div>
        <div className={cx('middle-box')}>
          <div className={cx('middle-content-wrapper')}>
            <p className={cx('middle-content-title')}>
              PDF/Word/JPG
            </p>
            <p className={cx('middle-content-sub-title')}>
              Only the recipeints who you have granted access to, will be able to view or edit these files
            </p>
          </div>
        </div>
        <div className={cx('middle-box')}>
          <div className={cx('middle-content-wrapper')}>
            <p className={cx('middle-content-title')}>
              언제든지 수정 가능
            </p>
            <p className={cx('middle-content-sub-title')}>
              You can Edit your files through the Quiver web app. Share securely via email, the cloud, or stroage platfroms like Box and Dropbox
            </p>
          </div>
        </div>
        <div className={cx('middle-box')}>
          <div className={cx('middle-content-wrapper')}>
            <p className={cx('middle-content-title')}>
              모바일 작업 가능
            </p>
            <p className={cx('middle-content-sub-title')}>
              Every picture, video, document is protected at file level, embedded with our security features.
            </p>
          </div>
        </div>      
      </div>
      <div className={cx('last-wrapper')}>
        <img src={notebookSVG} alt="notebookSVG" className={cx('last-logo')}/>
        <p className={cx('last-title')}>
          지금 바로 시작해 보세요
        </p>
        <p className={cx('last-sub-title')}>
          1주일에 10분만 투자하면 1년만에 자신의 이력서가 만들어 집니다.
        </p>
        <p className={cx('last-sub-title')}>
          내용만 채워보세요
        </p>
      </div>
    </div>
  );
};

export default Home;
