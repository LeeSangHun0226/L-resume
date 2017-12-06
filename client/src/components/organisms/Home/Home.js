import React from 'react';
import styles from './Home.scss';
import classNames from 'classnames/bind';
import notebookSVG from '../../../images/home-notebook.svg';
import homeImage from '../../../images/home-background.jpg';
import LoginPage from '../../pages/LoginPage';
import SignUpContainer from '../../../containers/SignUpContainer';
import Button from '../../atoms/Button';

// import NotebookSVG from 'svg-react-loader?name=NotebookSVG!../../../images/home-notebook.svg';

const cx = classNames.bind(styles);

const Home = ({
  onLoginButtonClick,
  user,
  solid,
  authed,
  backgroundColor,
  history
}) => {

  return (
    <div className={cx('home', { backgroundColor })}>
      <div className={cx('home-background')}>
        <div className={cx('home-content-wrapper')}>
          <h2 className={cx('home-title')}>
            Resume Builder
          </h2>
          <p className={cx('home-sub-title')}>
              Lprep에서 운영하는 입시용 Resume Builder 입니다.<br />
              본인의 resume을 언제든지 편하게 작성 해보세요.
          </p>
          <SignUpContainer history={history} />
        </div>
      </div>
      <div className={cx('middle-wrapper')} >
        <div className={cx('middle-box')}>
          <div className={cx('middle-content-wrapper')}>
            <p className={cx('middle-content-title')}>
              Extracurricular Activities
            </p>
            <p className={cx('middle-content-sub-title')}>
                A place where you can keep a record of all the activities you have been a part of.
            </p>
          </div>
        </div>
        <div className={cx('middle-box')}>
          <div className={cx('middle-content-wrapper')}>
            <p className={cx('middle-content-title')}>
              File sharing
            </p>
            <p className={cx('middle-content-sub-title')}>
                It’s simple, fast and easy to use. You can share your files through our mobile app and our website.
            </p>
          </div>
        </div>
        <div className={cx('middle-box')}>
          <div className={cx('middle-content-wrapper')}>
            <p className={cx('middle-content-title')}>
              Cloud
            </p>
            <p className={cx('middle-content-sub-title')}>
              You can share your resume online, any time you want. Share your resume securely via kakaotalk email, the cloud, or other storage platforms such as Dropbox.
            </p>
          </div>
        </div>
        <div className={cx('middle-box')}>
          <div className={cx('middle-content-wrapper')}>
            <p className={cx('middle-content-title')}>
              PDF/Word/JPG
            </p>
            <p className={cx('middle-content-sub-title')}>
                You can select the file type of your choice.
            </p>
          </div>
        </div>
        <div className={cx('middle-box')}>
          <div className={cx('middle-content-wrapper')}>
            <p className={cx('middle-content-title')}>
              Editing
            </p>
            <p className={cx('middle-content-sub-title')}>
              You can always edit your portfolio.
            </p>
          </div>
        </div>
        <div className={cx('middle-box')}>
          <div className={cx('middle-content-wrapper')}>
            <p className={cx('middle-content-title')}>
              Security
            </p>
            <p className={cx('middle-content-sub-title')}>
              All pictures, videos, and documents are protected individually with our security features.
            </p>
          </div>
        </div>
      </div>
      <div className={cx('last-wrapper')}>
        <img src={notebookSVG} alt="notebookSVG" className={cx('last-logo')}/>
        <p className={cx('last-title')}>
          지금 바로 시작해보세요.
        </p>
        <p className={cx('last-sub-title')}>
            1주일에 10분만 투자하면 <span className={cx('text-break')}>1년만에 자신의 이력서가 만들어집니다.<br /></span>
            내용만 채워보세요.
        </p>
        <div className={cx('button')}>
          <Button roundCorner blue onClick={() => window.scroll(0, 0)}>무료로 시작</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
