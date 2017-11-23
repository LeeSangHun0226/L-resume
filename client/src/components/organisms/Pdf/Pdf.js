import React, { Component } from 'react';
import axios from 'axios';
import styles from './Pdf.scss';
import classNames from 'classnames/bind';
import { fetchServerConfig } from '../../../config';

const cx = classNames.bind(styles);

class Pdf extends Component {

  state = {
    data: [],
    loading: true,
  }

  componentDidMount() {
    // const { userId } = this.props.match.params;
    let email;
    const href = window.location.href;
    const param = href.split('pdf/');
    localStorage.getItem('email') ? email = localStorage.getItem('email') : email = param[1];
    axios.get(`http://${fetchServerConfig.ip}:4000/api/register/${email}`)
      .then((res) => {
        this.setState({
          data: res.data[0],
          loading: false,
        })
      })
  }


  validateEducation = (education) => {
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

  validateAcademic = (academic) => {
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

  validateExtra = (extra) => {
    console.log(extra)
    return (
      <div>
        <h3 className={cx('body-title')}>Extra Curricular</h3>
        {
          extra.body.map(data => {
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

  validateAward = (award) => {
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

  render() {
    const { contact, education, academic, extracurricular, award } = this.state.data;
    return this.state.loading ? <h2>loading</h2> : (
      <div className={cx('pdf')}>
        <h2 className={cx('header-name')}>{contact.firstName} {contact.lastName}</h2>
        <p className={cx('header-info')}>Address: {contact.address}</p>
        <p className={cx('header-info')}>Phone: {contact.address} &nbsp; // &nbsp; Email: {contact.email}</p>
        <div className={cx('bar')} />
          {this.validateEducation(education)}
        <div className={cx('bar-transparent')} />
          {this.validateAcademic(academic)}
        <div className={cx('bar-transparent')} />
          {this.validateExtra(extracurricular)}
        <div className={cx('bar-transparent')} />
          {this.validateAward(award)}
      </div>
    )
  }
}

export default Pdf;
