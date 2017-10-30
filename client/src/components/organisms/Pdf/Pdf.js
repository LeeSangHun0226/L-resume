import React from 'react';
import styles from './Pdf.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const validateEducation = (education) => {
  if (education) {
    if (education.description) {
      const description = education.description.split('\n');
      return (
        <div>
          <h3 className={cx('body-title')}>Education</h3>
          <div className={cx('body-wrapper')}>
            <p className={cx('body')}>{education.schoolType}</p>
            <p className={cx('body')}>{education.startDate} - {education.endDate}</p>
          </div>
          <div className={cx('body-description')}>
            {
              description.map((data, i) => (
                <p key={i}>{data}</p>
              ))
            }
          </div>
        </div>
      )
    }
    return (
      <div>
        <h3 className={cx('body-title')}>Education</h3>
        <div className={cx('body-wrapper')}>
          <p className={cx('body')}>{education.schoolType}</p>
          <p className={cx('body')}>{education.endDate}</p>
        </div>
      </div>
    )
  }
  return;
}

const validateAcademic = (academic) => {
  if (academic) {
    if (academic.description) {
      const description = academic.description.split('\n');
      return (
        <div>
          <h3 className={cx('body-title')}>Academic</h3>
          <div className={cx('body-description')}>
            {
              description.map((data, i) => (
                <p key={i}>{data}</p>
              ))
            }
          </div>
        </div>
      )
    }
    return (
      <div>
        <h3 className={cx('body-title')}>Academic</h3>
      </div>
    )
  }
}

const validateExtra = (extra) => {
  if (extra) {
    if (extra.description) {
      const description = extra.description.split('\n');
      return (
        <div>
          <h3 className={cx('body-title')}>Extra Curricular</h3>
          <div className={cx('body-wrapper')}>
            <p className={cx('body')}>{extra.activityName}</p>
            <p className={cx('body')}>{extra.startDate} - {extra.endDate}</p>
          </div>
          <p className={cx('body')}>{extra.position}</p>
          <p className={cx('body')}>{extra.city}</p>
          <div className={cx('body-description')}>
            {
              description.map((data, i) => (
                <p key={i}>{data}</p>
              ))
            }
          </div>
        </div>
      )
    }

    return (
      <div>
        <h3 className={cx('body-title')}>Extra Curricular</h3>
        <div className={cx('body-wrapper')}>
          <p className={cx('body')}>{extra.activityName}</p>
          <p className={cx('body')}>{extra.startDate} - {extra.endDate}</p>
        </div>
        <p className={cx('body')}>{extra.position}</p>
        <p className={cx('body')}>{extra.city}</p>
      </div>
    )
  }
}

const validateAward = (award) => {
  if (award) {
    if (award.description) {
      const description = award.description.split('\n');
      return (
        <div>
          <h3 className={cx('body-title')}>Awards</h3>
          <div className={cx('body-wrapper')}>
            <p className={cx('body')}>{award.name}</p>
            <p className={cx('body')}>{award.year}</p>
          </div>
          <div className={cx('body-description')}>
            {
              description.map((data, i) => (
                <p key={i}>{data}</p>
              ))
            }
          </div>
        </div>
      )
    }
    return (
      <div>
        <h3 className={cx('body-title')}>Awards</h3>
        <p className={cx('body')}>{award.name}</p>
        <p className={cx('body')}>{award.year}</p>
      </div>
    )
  }
  return;
}

const Pdf = ({ data }) => {
  const { contact, education, academic, extracurricular, award } = data;

  return (
    <div className={cx('pdf')}>
      <h2 className={cx('header-name')}>{contact.firstName} {contact.lastName}</h2>
      <p className={cx('header-info')}>Address: {contact.address}</p>
      <p className={cx('header-info')}>Phone: {contact.address} &nbsp; // &nbsp; Email: {contact.email}</p>
      <div className={cx('bar')} />
        {validateEducation(education)}
      <div className={cx('bar-transparent')} />
        {validateAcademic(academic)}
      <div className={cx('bar-transparent')} />
        {validateExtra(extracurricular)}
      <div className={cx('bar-transparent')} />
        {validateAward(award)}
    </div>
  )
}

export default Pdf;
