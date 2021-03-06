import React, { Component} from 'react';
import styles from './ScrollButton.scss';
import classNames from 'classnames/bind';
import footerTopImg from '../../../images/footer-top.svg';
import footerTopMobileImg from '../../../images/footer-top-mobile.png';

const cx = classNames.bind(styles);

class ScrollButton extends Component {
  state = {
    intervalId: 0
  };

  scrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPs);
  }

  scrollToTop = () => {
    const intervalId = setInterval(this.scrollStep, this.props.delayInMs);
    this.setState({ intervalId });
  }

  render () {
    return (
      <button
        className={cx('scrollButton')}
        onClick={() => this.scrollToTop()}
      >
        <img className={cx('footer-top')}src={footerTopImg} alt="footerTop" />
        <div className={cx('mobile-footer-top')}>
            <div className={cx('mobile-footer-top-text')}>Top</div>
            <img className={cx('mobile-footer-top-img')} src={footerTopMobileImg} alt="footerTop" />
        </div>
      </button>
    );
  }
}


// const ScrollButton = ({
//   children,
//   flex,
//   className,
//   roundCorner,
//   invert,
//   flat,
//   color,
//   padding="0.5rem",
//   xPadding,
//   style,
//   disabled,
//   width,
//   ...rest
// }) => {
//   const dynamicStyle = {
//     ...(xPadding ? {
//       paddingLeft: xPadding,
//       paddingRight: xPadding
//     } : {})
//   }
//   return (
//     <div
//       className={
//         cx('scrollButton', {
//           invert,
//           flex,
//           flat,
//           disabled,
//           roundCorner,
//         }, color, className)
//       }
//       style={{
//         padding,
//         width: `${width}rem`,
//         ...style,
//         ...dynamicStyle,
//       }}
//       {...rest}
//     >
//       {children}
//     </div>
//   );
// };

export default ScrollButton;
