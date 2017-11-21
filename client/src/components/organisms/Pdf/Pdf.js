import React from 'react';
import styles from './Pdf.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const validateEducation = (education) => {
  return (
    <div>
      <h3 className={cx('body-title')}>Education</h3>
      {
        education.body.map(data => {
          const description = data.description.split('\n');
          return (
            <div>
              <div className={cx('body-wrapper')}>
                <p className={cx('body')}>{data.schoolType}</p>
                <p className={cx('body')}>{data.startDate} - {data.endDate}</p>
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
        })
      }
    </div>
  )
}

const validateAcademic = (academic) => {
  return (
    <div>
      <h3 className={cx('body-title')}>Academic</h3>
      {
        academic.body.map(data => {
          const description = data.description.split('\n');
          return (
            <div className={cx('body-description')}>
              {
                description.map((data, i) => (
                  <p key={i}>{data}</p>
                ))
              }
            </div>
          )
        })
      }
    </div>
  )
}

const validateExtra = (extra) => {
  console.log(extra)
  return (
    <div>
      <h3 className={cx('body-title')}>Extra Curricular</h3>
      {
        extra.body.map(data => {
          const description = data.description.split('\n');
          return (
            <div>
              <div className={cx('body-wrapper')}>
                <p className={cx('body')}>{data.activityName}</p>
                <p className={cx('body')}>{data.startDate} - {data.endDate}</p>
              </div>
                <p className={cx('body')}>{data.position}</p>
                <p className={cx('body')}>{data.city}</p>
            </div>
          )
        })
      }
    </div>
  )
}

const validateAward = (award) => {
  return (
    <div>
      <h3 className={cx('body-title')}>Award</h3>
      {
        award.body.map(data => {
          return (
            <div>
              <div className={cx('body-wrapper')}>
                <p className={cx('body')}>{data.name}</p>
                <p className={cx('body')}>{data.year}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
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
